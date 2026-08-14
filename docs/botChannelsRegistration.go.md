# `botChannelsRegistration` Submodule <a name="`botChannelsRegistration` Submodule" id="@cdktn/provider-azurerm.botChannelsRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelsRegistration <a name="BotChannelsRegistration" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration azurerm_bot_channels_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/botchannelsregistration"

botchannelsregistration.NewBotChannelsRegistration(scope Construct, id *string, config BotChannelsRegistrationConfig) BotChannelsRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig">BotChannelsRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig">BotChannelsRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetCmkKeyVaultUrl">ResetCmkKeyVaultUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApiKey">ResetDeveloperAppInsightsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApplicationId">ResetDeveloperAppInsightsApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsKey">ResetDeveloperAppInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIconUrl">ResetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetMicrosoftAppTenantId">ResetMicrosoftAppTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetMicrosoftAppUserAssignedIdentityId">ResetMicrosoftAppUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetStreamingEndpointEnabled">ResetStreamingEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts"></a>

```go
func PutTimeouts(value BotChannelsRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>

---

##### `ResetCmkKeyVaultUrl` <a name="ResetCmkKeyVaultUrl" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetCmkKeyVaultUrl"></a>

```go
func ResetCmkKeyVaultUrl()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeveloperAppInsightsApiKey` <a name="ResetDeveloperAppInsightsApiKey" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApiKey"></a>

```go
func ResetDeveloperAppInsightsApiKey()
```

##### `ResetDeveloperAppInsightsApplicationId` <a name="ResetDeveloperAppInsightsApplicationId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApplicationId"></a>

```go
func ResetDeveloperAppInsightsApplicationId()
```

##### `ResetDeveloperAppInsightsKey` <a name="ResetDeveloperAppInsightsKey" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsKey"></a>

```go
func ResetDeveloperAppInsightsKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetIconUrl` <a name="ResetIconUrl" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIconUrl"></a>

```go
func ResetIconUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetMicrosoftAppTenantId` <a name="ResetMicrosoftAppTenantId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetMicrosoftAppTenantId"></a>

```go
func ResetMicrosoftAppTenantId()
```

##### `ResetMicrosoftAppUserAssignedIdentityId` <a name="ResetMicrosoftAppUserAssignedIdentityId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetMicrosoftAppUserAssignedIdentityId"></a>

```go
func ResetMicrosoftAppUserAssignedIdentityId()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetStreamingEndpointEnabled` <a name="ResetStreamingEndpointEnabled" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetStreamingEndpointEnabled"></a>

```go
func ResetStreamingEndpointEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BotChannelsRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/botchannelsregistration"

botchannelsregistration.BotChannelsRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/botchannelsregistration"

botchannelsregistration.BotChannelsRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/botchannelsregistration"

botchannelsregistration.BotChannelsRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/botchannelsregistration"

botchannelsregistration.BotChannelsRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BotChannelsRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BotChannelsRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BotChannelsRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BotChannelsRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference">BotChannelsRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrlInput">CmkKeyVaultUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKeyInput">DeveloperAppInsightsApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationIdInput">DeveloperAppInsightsApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKeyInput">DeveloperAppInsightsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrlInput">IconUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppIdInput">MicrosoftAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppTenantIdInput">MicrosoftAppTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppTypeInput">MicrosoftAppTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppUserAssignedIdentityIdInput">MicrosoftAppUserAssignedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabledInput">StreamingEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrl">CmkKeyVaultUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrl">IconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppId">MicrosoftAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppTenantId">MicrosoftAppTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppType">MicrosoftAppType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppUserAssignedIdentityId">MicrosoftAppUserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabled">StreamingEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeouts"></a>

```go
func Timeouts() BotChannelsRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference">BotChannelsRegistrationTimeoutsOutputReference</a>

---

##### `CmkKeyVaultUrlInput`<sup>Optional</sup> <a name="CmkKeyVaultUrlInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrlInput"></a>

```go
func CmkKeyVaultUrlInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApiKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKeyInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKeyInput"></a>

```go
func DeveloperAppInsightsApiKeyInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApplicationIdInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationIdInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationIdInput"></a>

```go
func DeveloperAppInsightsApplicationIdInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsKeyInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKeyInput"></a>

```go
func DeveloperAppInsightsKeyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `IconUrlInput`<sup>Optional</sup> <a name="IconUrlInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrlInput"></a>

```go
func IconUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppIdInput`<sup>Optional</sup> <a name="MicrosoftAppIdInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppIdInput"></a>

```go
func MicrosoftAppIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppTenantIdInput`<sup>Optional</sup> <a name="MicrosoftAppTenantIdInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppTenantIdInput"></a>

```go
func MicrosoftAppTenantIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppTypeInput`<sup>Optional</sup> <a name="MicrosoftAppTypeInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppTypeInput"></a>

```go
func MicrosoftAppTypeInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="MicrosoftAppUserAssignedIdentityIdInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppUserAssignedIdentityIdInput"></a>

```go
func MicrosoftAppUserAssignedIdentityIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `StreamingEndpointEnabledInput`<sup>Optional</sup> <a name="StreamingEndpointEnabledInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabledInput"></a>

```go
func StreamingEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CmkKeyVaultUrl`<sup>Required</sup> <a name="CmkKeyVaultUrl" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrl"></a>

```go
func CmkKeyVaultUrl() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApiKey`<sup>Required</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKey"></a>

```go
func DeveloperAppInsightsApiKey() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApplicationId`<sup>Required</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationId"></a>

```go
func DeveloperAppInsightsApplicationId() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsKey`<sup>Required</sup> <a name="DeveloperAppInsightsKey" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKey"></a>

```go
func DeveloperAppInsightsKey() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrl"></a>

```go
func IconUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppId"></a>

```go
func MicrosoftAppId() *string
```

- *Type:* *string

---

##### `MicrosoftAppTenantId`<sup>Required</sup> <a name="MicrosoftAppTenantId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppTenantId"></a>

```go
func MicrosoftAppTenantId() *string
```

- *Type:* *string

---

##### `MicrosoftAppType`<sup>Required</sup> <a name="MicrosoftAppType" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppType"></a>

```go
func MicrosoftAppType() *string
```

- *Type:* *string

---

##### `MicrosoftAppUserAssignedIdentityId`<sup>Required</sup> <a name="MicrosoftAppUserAssignedIdentityId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppUserAssignedIdentityId"></a>

```go
func MicrosoftAppUserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `StreamingEndpointEnabled`<sup>Required</sup> <a name="StreamingEndpointEnabled" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabled"></a>

```go
func StreamingEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelsRegistrationConfig <a name="BotChannelsRegistrationConfig" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/botchannelsregistration"

&botchannelsregistration.BotChannelsRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MicrosoftAppId: *string,
	MicrosoftAppType: *string,
	Name: *string,
	ResourceGroupName: *string,
	Sku: *string,
	CmkKeyVaultUrl: *string,
	Description: *string,
	DeveloperAppInsightsApiKey: *string,
	DeveloperAppInsightsApplicationId: *string,
	DeveloperAppInsightsKey: *string,
	DisplayName: *string,
	Endpoint: *string,
	IconUrl: *string,
	Id: *string,
	MicrosoftAppTenantId: *string,
	MicrosoftAppUserAssignedIdentityId: *string,
	PublicNetworkAccessEnabled: interface{},
	StreamingEndpointEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.botChannelsRegistration.BotChannelsRegistrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#location BotChannelsRegistration#location}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppId">MicrosoftAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#microsoft_app_id BotChannelsRegistration#microsoft_app_id}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppType">MicrosoftAppType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#microsoft_app_type BotChannelsRegistration#microsoft_app_type}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#name BotChannelsRegistration#name}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#resource_group_name BotChannelsRegistration#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#sku BotChannelsRegistration#sku}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.cmkKeyVaultUrl">CmkKeyVaultUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#cmk_key_vault_url BotChannelsRegistration#cmk_key_vault_url}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#description BotChannelsRegistration#description}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#developer_app_insights_api_key BotChannelsRegistration#developer_app_insights_api_key}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#developer_app_insights_application_id BotChannelsRegistration#developer_app_insights_application_id}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#developer_app_insights_key BotChannelsRegistration#developer_app_insights_key}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#display_name BotChannelsRegistration#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#endpoint BotChannelsRegistration#endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.iconUrl">IconUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#icon_url BotChannelsRegistration#icon_url}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#id BotChannelsRegistration#id}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppTenantId">MicrosoftAppTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#microsoft_app_tenant_id BotChannelsRegistration#microsoft_app_tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppUserAssignedIdentityId">MicrosoftAppUserAssignedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#microsoft_app_user_assigned_identity_id BotChannelsRegistration#microsoft_app_user_assigned_identity_id}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#public_network_access_enabled BotChannelsRegistration#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.streamingEndpointEnabled">StreamingEndpointEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#streaming_endpoint_enabled BotChannelsRegistration#streaming_endpoint_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#tags BotChannelsRegistration#tags}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#location BotChannelsRegistration#location}.

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppId"></a>

```go
MicrosoftAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#microsoft_app_id BotChannelsRegistration#microsoft_app_id}.

---

##### `MicrosoftAppType`<sup>Required</sup> <a name="MicrosoftAppType" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppType"></a>

```go
MicrosoftAppType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#microsoft_app_type BotChannelsRegistration#microsoft_app_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#name BotChannelsRegistration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#resource_group_name BotChannelsRegistration#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#sku BotChannelsRegistration#sku}.

---

##### `CmkKeyVaultUrl`<sup>Optional</sup> <a name="CmkKeyVaultUrl" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.cmkKeyVaultUrl"></a>

```go
CmkKeyVaultUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#cmk_key_vault_url BotChannelsRegistration#cmk_key_vault_url}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#description BotChannelsRegistration#description}.

---

##### `DeveloperAppInsightsApiKey`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApiKey"></a>

```go
DeveloperAppInsightsApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#developer_app_insights_api_key BotChannelsRegistration#developer_app_insights_api_key}.

---

##### `DeveloperAppInsightsApplicationId`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApplicationId"></a>

```go
DeveloperAppInsightsApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#developer_app_insights_application_id BotChannelsRegistration#developer_app_insights_application_id}.

---

##### `DeveloperAppInsightsKey`<sup>Optional</sup> <a name="DeveloperAppInsightsKey" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsKey"></a>

```go
DeveloperAppInsightsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#developer_app_insights_key BotChannelsRegistration#developer_app_insights_key}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#display_name BotChannelsRegistration#display_name}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#endpoint BotChannelsRegistration#endpoint}.

---

##### `IconUrl`<sup>Optional</sup> <a name="IconUrl" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.iconUrl"></a>

```go
IconUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#icon_url BotChannelsRegistration#icon_url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#id BotChannelsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MicrosoftAppTenantId`<sup>Optional</sup> <a name="MicrosoftAppTenantId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppTenantId"></a>

```go
MicrosoftAppTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#microsoft_app_tenant_id BotChannelsRegistration#microsoft_app_tenant_id}.

---

##### `MicrosoftAppUserAssignedIdentityId`<sup>Optional</sup> <a name="MicrosoftAppUserAssignedIdentityId" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppUserAssignedIdentityId"></a>

```go
MicrosoftAppUserAssignedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#microsoft_app_user_assigned_identity_id BotChannelsRegistration#microsoft_app_user_assigned_identity_id}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#public_network_access_enabled BotChannelsRegistration#public_network_access_enabled}.

---

##### `StreamingEndpointEnabled`<sup>Optional</sup> <a name="StreamingEndpointEnabled" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.streamingEndpointEnabled"></a>

```go
StreamingEndpointEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#streaming_endpoint_enabled BotChannelsRegistration#streaming_endpoint_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#tags BotChannelsRegistration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.timeouts"></a>

```go
Timeouts BotChannelsRegistrationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#timeouts BotChannelsRegistration#timeouts}

---

### BotChannelsRegistrationTimeouts <a name="BotChannelsRegistrationTimeouts" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/botchannelsregistration"

&botchannelsregistration.BotChannelsRegistrationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#create BotChannelsRegistration#create}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#delete BotChannelsRegistration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#read BotChannelsRegistration#read}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#update BotChannelsRegistration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#create BotChannelsRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#delete BotChannelsRegistration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#read BotChannelsRegistration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/bot_channels_registration#update BotChannelsRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelsRegistrationTimeoutsOutputReference <a name="BotChannelsRegistrationTimeoutsOutputReference" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/botchannelsregistration"

botchannelsregistration.NewBotChannelsRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BotChannelsRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



