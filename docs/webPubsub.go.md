# `webPubsub` Submodule <a name="`webPubsub` Submodule" id="@cdktn/provider-azurerm.webPubsub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsub <a name="WebPubsub" id="@cdktn/provider-azurerm.webPubsub.WebPubsub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub azurerm_web_pubsub}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

webpubsub.NewWebPubsub(scope Construct, id *string, config WebPubsubConfig) WebPubsub
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig">WebPubsubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig">WebPubsubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.putLiveTrace">PutLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetAadAuthEnabled">ResetAadAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetLiveTrace">ResetLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTlsClientCertEnabled">ResetTlsClientCertEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putIdentity"></a>

```go
func PutIdentity(value WebPubsubIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---

##### `PutLiveTrace` <a name="PutLiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putLiveTrace"></a>

```go
func PutLiveTrace(value WebPubsubLiveTrace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putLiveTrace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putTimeouts"></a>

```go
func PutTimeouts(value WebPubsubTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

---

##### `ResetAadAuthEnabled` <a name="ResetAadAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetAadAuthEnabled"></a>

```go
func ResetAadAuthEnabled()
```

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLiveTrace` <a name="ResetLiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetLiveTrace"></a>

```go
func ResetLiveTrace()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetLocalAuthEnabled"></a>

```go
func ResetLocalAuthEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsClientCertEnabled` <a name="ResetTlsClientCertEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTlsClientCertEnabled"></a>

```go
func ResetTlsClientCertEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WebPubsub resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

webpubsub.WebPubsub_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

webpubsub.WebPubsub_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

webpubsub.WebPubsub_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

webpubsub.WebPubsub_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WebPubsub resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WebPubsub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WebPubsub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WebPubsub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.externalIp">ExternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference">WebPubsubIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.liveTrace">LiveTrace</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference">WebPubsubLiveTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicPort">PublicPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.serverPort">ServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference">WebPubsubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabledInput">AadAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.liveTraceInput">LiveTraceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabledInput">TlsClientCertEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.externalIp"></a>

```go
func ExternalIp() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.identity"></a>

```go
func Identity() WebPubsubIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference">WebPubsubIdentityOutputReference</a>

---

##### `LiveTrace`<sup>Required</sup> <a name="LiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.liveTrace"></a>

```go
func LiveTrace() WebPubsubLiveTraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference">WebPubsubLiveTraceOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.primaryAccessKey"></a>

```go
func PrimaryAccessKey() *string
```

- *Type:* *string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PublicPort`<sup>Required</sup> <a name="PublicPort" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicPort"></a>

```go
func PublicPort() *f64
```

- *Type:* *f64

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.secondaryAccessKey"></a>

```go
func SecondaryAccessKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.serverPort"></a>

```go
func ServerPort() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.timeouts"></a>

```go
func Timeouts() WebPubsubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference">WebPubsubTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AadAuthEnabledInput`<sup>Optional</sup> <a name="AadAuthEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabledInput"></a>

```go
func AadAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.identityInput"></a>

```go
func IdentityInput() WebPubsubIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LiveTraceInput`<sup>Optional</sup> <a name="LiveTraceInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.liveTraceInput"></a>

```go
func LiveTraceInput() WebPubsubLiveTrace
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabledInput"></a>

```go
func LocalAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsClientCertEnabledInput`<sup>Optional</sup> <a name="TlsClientCertEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabledInput"></a>

```go
func TlsClientCertEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AadAuthEnabled`<sup>Required</sup> <a name="AadAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabled"></a>

```go
func AadAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabled"></a>

```go
func LocalAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TlsClientCertEnabled`<sup>Required</sup> <a name="TlsClientCertEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabled"></a>

```go
func TlsClientCertEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubConfig <a name="WebPubsubConfig" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

&webpubsub.WebPubsubConfig {
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
	Sku: *string,
	AadAuthEnabled: interface{},
	Capacity: *f64,
	Id: *string,
	Identity: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.webPubsub.WebPubsubIdentity,
	LiveTrace: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.webPubsub.WebPubsubLiveTrace,
	LocalAuthEnabled: interface{},
	PublicNetworkAccessEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.webPubsub.WebPubsubTimeouts,
	TlsClientCertEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#location WebPubsub#location}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#name WebPubsub#name}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#sku WebPubsub#sku}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#id WebPubsub#id}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.liveTrace">LiveTrace</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#tags WebPubsub#tags}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#location WebPubsub#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#name WebPubsub#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#sku WebPubsub#sku}.

---

##### `AadAuthEnabled`<sup>Optional</sup> <a name="AadAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.aadAuthEnabled"></a>

```go
AadAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#id WebPubsub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.identity"></a>

```go
Identity WebPubsubIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#identity WebPubsub#identity}

---

##### `LiveTrace`<sup>Optional</sup> <a name="LiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.liveTrace"></a>

```go
LiveTrace WebPubsubLiveTrace
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#live_trace WebPubsub#live_trace}

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.localAuthEnabled"></a>

```go
LocalAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#tags WebPubsub#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.timeouts"></a>

```go
Timeouts WebPubsubTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#timeouts WebPubsub#timeouts}

---

##### `TlsClientCertEnabled`<sup>Optional</sup> <a name="TlsClientCertEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.tlsClientCertEnabled"></a>

```go
TlsClientCertEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}.

---

### WebPubsubIdentity <a name="WebPubsubIdentity" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

&webpubsub.WebPubsubIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#type WebPubsub#type}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#identity_ids WebPubsub#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#type WebPubsub#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#identity_ids WebPubsub#identity_ids}.

---

### WebPubsubLiveTrace <a name="WebPubsubLiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

&webpubsub.WebPubsubLiveTrace {
	ConnectivityLogsEnabled: interface{},
	Enabled: interface{},
	HttpRequestLogsEnabled: interface{},
	MessagingLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#enabled WebPubsub#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}. |

---

##### `ConnectivityLogsEnabled`<sup>Optional</sup> <a name="ConnectivityLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.connectivityLogsEnabled"></a>

```go
ConnectivityLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#enabled WebPubsub#enabled}.

---

##### `HttpRequestLogsEnabled`<sup>Optional</sup> <a name="HttpRequestLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.httpRequestLogsEnabled"></a>

```go
HttpRequestLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}.

---

##### `MessagingLogsEnabled`<sup>Optional</sup> <a name="MessagingLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.messagingLogsEnabled"></a>

```go
MessagingLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}.

---

### WebPubsubTimeouts <a name="WebPubsubTimeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

&webpubsub.WebPubsubTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#create WebPubsub#create}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#delete WebPubsub#delete}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#read WebPubsub#read}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#update WebPubsub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#create WebPubsub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#delete WebPubsub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#read WebPubsub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/web_pubsub#update WebPubsub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubIdentityOutputReference <a name="WebPubsubIdentityOutputReference" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

webpubsub.NewWebPubsubIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebPubsubIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() WebPubsubIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---


### WebPubsubLiveTraceOutputReference <a name="WebPubsubLiveTraceOutputReference" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

webpubsub.NewWebPubsubLiveTraceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebPubsubLiveTraceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetConnectivityLogsEnabled">ResetConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetHttpRequestLogsEnabled">ResetHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetMessagingLogsEnabled">ResetMessagingLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectivityLogsEnabled` <a name="ResetConnectivityLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetConnectivityLogsEnabled"></a>

```go
func ResetConnectivityLogsEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHttpRequestLogsEnabled` <a name="ResetHttpRequestLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetHttpRequestLogsEnabled"></a>

```go
func ResetHttpRequestLogsEnabled()
```

##### `ResetMessagingLogsEnabled` <a name="ResetMessagingLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetMessagingLogsEnabled"></a>

```go
func ResetMessagingLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabledInput">ConnectivityLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabledInput">HttpRequestLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabledInput">MessagingLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectivityLogsEnabledInput`<sup>Optional</sup> <a name="ConnectivityLogsEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabledInput"></a>

```go
func ConnectivityLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HttpRequestLogsEnabledInput`<sup>Optional</sup> <a name="HttpRequestLogsEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabledInput"></a>

```go
func HttpRequestLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MessagingLogsEnabledInput`<sup>Optional</sup> <a name="MessagingLogsEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabledInput"></a>

```go
func MessagingLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectivityLogsEnabled`<sup>Required</sup> <a name="ConnectivityLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabled"></a>

```go
func ConnectivityLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HttpRequestLogsEnabled`<sup>Required</sup> <a name="HttpRequestLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabled"></a>

```go
func HttpRequestLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MessagingLogsEnabled`<sup>Required</sup> <a name="MessagingLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabled"></a>

```go
func MessagingLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.internalValue"></a>

```go
func InternalValue() WebPubsubLiveTrace
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---


### WebPubsubTimeoutsOutputReference <a name="WebPubsubTimeoutsOutputReference" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/webpubsub"

webpubsub.NewWebPubsubTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebPubsubTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



