# `iothubEndpointStorageContainer` Submodule <a name="`iothubEndpointStorageContainer` Submodule" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointStorageContainer <a name="IothubEndpointStorageContainer" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container azurerm_iothub_endpoint_storage_container}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/iothubendpointstoragecontainer"

iothubendpointstoragecontainer.NewIothubEndpointStorageContainer(scope Construct, id *string, config IothubEndpointStorageContainerConfig) IothubEndpointStorageContainer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig">IothubEndpointStorageContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig">IothubEndpointStorageContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetBatchFrequencyInSeconds">ResetBatchFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEndpointUri">ResetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetFileNameFormat">ResetFileNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetIdentityId">ResetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetMaxChunkSizeInBytes">ResetMaxChunkSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts"></a>

```go
func PutTimeouts(value IothubEndpointStorageContainerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetAuthenticationType"></a>

```go
func ResetAuthenticationType()
```

##### `ResetBatchFrequencyInSeconds` <a name="ResetBatchFrequencyInSeconds" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetBatchFrequencyInSeconds"></a>

```go
func ResetBatchFrequencyInSeconds()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetEndpointUri` <a name="ResetEndpointUri" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEndpointUri"></a>

```go
func ResetEndpointUri()
```

##### `ResetFileNameFormat` <a name="ResetFileNameFormat" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetFileNameFormat"></a>

```go
func ResetFileNameFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityId` <a name="ResetIdentityId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetIdentityId"></a>

```go
func ResetIdentityId()
```

##### `ResetMaxChunkSizeInBytes` <a name="ResetMaxChunkSizeInBytes" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetMaxChunkSizeInBytes"></a>

```go
func ResetMaxChunkSizeInBytes()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IothubEndpointStorageContainer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/iothubendpointstoragecontainer"

iothubendpointstoragecontainer.IothubEndpointStorageContainer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/iothubendpointstoragecontainer"

iothubendpointstoragecontainer.IothubEndpointStorageContainer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/iothubendpointstoragecontainer"

iothubendpointstoragecontainer.IothubEndpointStorageContainer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/iothubendpointstoragecontainer"

iothubendpointstoragecontainer.IothubEndpointStorageContainer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IothubEndpointStorageContainer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IothubEndpointStorageContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IothubEndpointStorageContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IothubEndpointStorageContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference">IothubEndpointStorageContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSecondsInput">BatchFrequencyInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUriInput">EndpointUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormatInput">FileNameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityIdInput">IdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubIdInput">IothubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytesInput">MaxChunkSizeInBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSeconds">BatchFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormat">FileNameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityId">IdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubId">IothubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytes">MaxChunkSizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeouts"></a>

```go
func Timeouts() IothubEndpointStorageContainerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference">IothubEndpointStorageContainerTimeoutsOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `BatchFrequencyInSecondsInput`<sup>Optional</sup> <a name="BatchFrequencyInSecondsInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSecondsInput"></a>

```go
func BatchFrequencyInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `EndpointUriInput`<sup>Optional</sup> <a name="EndpointUriInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUriInput"></a>

```go
func EndpointUriInput() *string
```

- *Type:* *string

---

##### `FileNameFormatInput`<sup>Optional</sup> <a name="FileNameFormatInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormatInput"></a>

```go
func FileNameFormatInput() *string
```

- *Type:* *string

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityIdInput"></a>

```go
func IdentityIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IothubIdInput`<sup>Optional</sup> <a name="IothubIdInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubIdInput"></a>

```go
func IothubIdInput() *string
```

- *Type:* *string

---

##### `MaxChunkSizeInBytesInput`<sup>Optional</sup> <a name="MaxChunkSizeInBytesInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytesInput"></a>

```go
func MaxChunkSizeInBytesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `BatchFrequencyInSeconds`<sup>Required</sup> <a name="BatchFrequencyInSeconds" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSeconds"></a>

```go
func BatchFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUri"></a>

```go
func EndpointUri() *string
```

- *Type:* *string

---

##### `FileNameFormat`<sup>Required</sup> <a name="FileNameFormat" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormat"></a>

```go
func FileNameFormat() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityId"></a>

```go
func IdentityId() *string
```

- *Type:* *string

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubId"></a>

```go
func IothubId() *string
```

- *Type:* *string

---

##### `MaxChunkSizeInBytes`<sup>Required</sup> <a name="MaxChunkSizeInBytes" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytes"></a>

```go
func MaxChunkSizeInBytes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointStorageContainerConfig <a name="IothubEndpointStorageContainerConfig" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/iothubendpointstoragecontainer"

&iothubendpointstoragecontainer.IothubEndpointStorageContainerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerName: *string,
	IothubId: *string,
	Name: *string,
	ResourceGroupName: *string,
	AuthenticationType: *string,
	BatchFrequencyInSeconds: *f64,
	ConnectionString: *string,
	Encoding: *string,
	EndpointUri: *string,
	FileNameFormat: *string,
	Id: *string,
	IdentityId: *string,
	MaxChunkSizeInBytes: *f64,
	SubscriptionId: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.iothubId">IothubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.batchFrequencyInSeconds">BatchFrequencyInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.fileNameFormat">FileNameFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.identityId">IdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.maxChunkSizeInBytes">MaxChunkSizeInBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#subscription_id IothubEndpointStorageContainer#subscription_id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}.

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.iothubId"></a>

```go
IothubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}.

---

##### `BatchFrequencyInSeconds`<sup>Optional</sup> <a name="BatchFrequencyInSeconds" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.batchFrequencyInSeconds"></a>

```go
BatchFrequencyInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}.

---

##### `EndpointUri`<sup>Optional</sup> <a name="EndpointUri" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.endpointUri"></a>

```go
EndpointUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}.

---

##### `FileNameFormat`<sup>Optional</sup> <a name="FileNameFormat" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.fileNameFormat"></a>

```go
FileNameFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityId`<sup>Optional</sup> <a name="IdentityId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.identityId"></a>

```go
IdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}.

---

##### `MaxChunkSizeInBytes`<sup>Optional</sup> <a name="MaxChunkSizeInBytes" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.maxChunkSizeInBytes"></a>

```go
MaxChunkSizeInBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#subscription_id IothubEndpointStorageContainer#subscription_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.timeouts"></a>

```go
Timeouts IothubEndpointStorageContainerTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#timeouts IothubEndpointStorageContainer#timeouts}

---

### IothubEndpointStorageContainerTimeouts <a name="IothubEndpointStorageContainerTimeouts" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/iothubendpointstoragecontainer"

&iothubendpointstoragecontainer.IothubEndpointStorageContainerTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#create IothubEndpointStorageContainer#create}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#delete IothubEndpointStorageContainer#delete}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#read IothubEndpointStorageContainer#read}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#update IothubEndpointStorageContainer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#create IothubEndpointStorageContainer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#delete IothubEndpointStorageContainer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#read IothubEndpointStorageContainer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/iothub_endpoint_storage_container#update IothubEndpointStorageContainer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointStorageContainerTimeoutsOutputReference <a name="IothubEndpointStorageContainerTimeoutsOutputReference" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/iothubendpointstoragecontainer"

iothubendpointstoragecontainer.NewIothubEndpointStorageContainerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IothubEndpointStorageContainerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



