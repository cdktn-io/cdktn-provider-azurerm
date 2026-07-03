# `botWebApp` Submodule <a name="`botWebApp` Submodule" id="@cdktn/provider-azurerm.botWebApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotWebApp <a name="BotWebApp" id="@cdktn/provider-azurerm.botWebApp.BotWebApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app azurerm_bot_web_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/botwebapp"

botwebapp.NewBotWebApp(scope Construct, id *string, config BotWebAppConfig) BotWebApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig">BotWebAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig">BotWebAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetDeveloperAppInsightsApiKey">ResetDeveloperAppInsightsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetDeveloperAppInsightsApplicationId">ResetDeveloperAppInsightsApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetDeveloperAppInsightsKey">ResetDeveloperAppInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetLuisAppIds">ResetLuisAppIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetLuisKey">ResetLuisKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetMicrosoftAppTenantId">ResetMicrosoftAppTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetMicrosoftAppType">ResetMicrosoftAppType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetMicrosoftAppUserAssignedIdentityId">ResetMicrosoftAppUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.putTimeouts"></a>

```go
func PutTimeouts(value BotWebAppTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts">BotWebAppTimeouts</a>

---

##### `ResetDeveloperAppInsightsApiKey` <a name="ResetDeveloperAppInsightsApiKey" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetDeveloperAppInsightsApiKey"></a>

```go
func ResetDeveloperAppInsightsApiKey()
```

##### `ResetDeveloperAppInsightsApplicationId` <a name="ResetDeveloperAppInsightsApplicationId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetDeveloperAppInsightsApplicationId"></a>

```go
func ResetDeveloperAppInsightsApplicationId()
```

##### `ResetDeveloperAppInsightsKey` <a name="ResetDeveloperAppInsightsKey" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetDeveloperAppInsightsKey"></a>

```go
func ResetDeveloperAppInsightsKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetId"></a>

```go
func ResetId()
```

##### `ResetLuisAppIds` <a name="ResetLuisAppIds" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetLuisAppIds"></a>

```go
func ResetLuisAppIds()
```

##### `ResetLuisKey` <a name="ResetLuisKey" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetLuisKey"></a>

```go
func ResetLuisKey()
```

##### `ResetMicrosoftAppTenantId` <a name="ResetMicrosoftAppTenantId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetMicrosoftAppTenantId"></a>

```go
func ResetMicrosoftAppTenantId()
```

##### `ResetMicrosoftAppType` <a name="ResetMicrosoftAppType" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetMicrosoftAppType"></a>

```go
func ResetMicrosoftAppType()
```

##### `ResetMicrosoftAppUserAssignedIdentityId` <a name="ResetMicrosoftAppUserAssignedIdentityId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetMicrosoftAppUserAssignedIdentityId"></a>

```go
func ResetMicrosoftAppUserAssignedIdentityId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BotWebApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/botwebapp"

botwebapp.BotWebApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/botwebapp"

botwebapp.BotWebApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/botwebapp"

botwebapp.BotWebApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/botwebapp"

botwebapp.BotWebApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BotWebApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BotWebApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BotWebApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BotWebApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference">BotWebAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsApiKeyInput">DeveloperAppInsightsApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsApplicationIdInput">DeveloperAppInsightsApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsKeyInput">DeveloperAppInsightsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.luisAppIdsInput">LuisAppIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.luisKeyInput">LuisKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppIdInput">MicrosoftAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppTenantIdInput">MicrosoftAppTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppTypeInput">MicrosoftAppTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppUserAssignedIdentityIdInput">MicrosoftAppUserAssignedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.luisAppIds">LuisAppIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.luisKey">LuisKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppId">MicrosoftAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppTenantId">MicrosoftAppTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppType">MicrosoftAppType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppUserAssignedIdentityId">MicrosoftAppUserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.timeouts"></a>

```go
func Timeouts() BotWebAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference">BotWebAppTimeoutsOutputReference</a>

---

##### `DeveloperAppInsightsApiKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKeyInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsApiKeyInput"></a>

```go
func DeveloperAppInsightsApiKeyInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApplicationIdInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationIdInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsApplicationIdInput"></a>

```go
func DeveloperAppInsightsApplicationIdInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsKeyInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsKeyInput"></a>

```go
func DeveloperAppInsightsKeyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LuisAppIdsInput`<sup>Optional</sup> <a name="LuisAppIdsInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.luisAppIdsInput"></a>

```go
func LuisAppIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LuisKeyInput`<sup>Optional</sup> <a name="LuisKeyInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.luisKeyInput"></a>

```go
func LuisKeyInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppIdInput`<sup>Optional</sup> <a name="MicrosoftAppIdInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppIdInput"></a>

```go
func MicrosoftAppIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppTenantIdInput`<sup>Optional</sup> <a name="MicrosoftAppTenantIdInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppTenantIdInput"></a>

```go
func MicrosoftAppTenantIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppTypeInput`<sup>Optional</sup> <a name="MicrosoftAppTypeInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppTypeInput"></a>

```go
func MicrosoftAppTypeInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="MicrosoftAppUserAssignedIdentityIdInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppUserAssignedIdentityIdInput"></a>

```go
func MicrosoftAppUserAssignedIdentityIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeveloperAppInsightsApiKey`<sup>Required</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsApiKey"></a>

```go
func DeveloperAppInsightsApiKey() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApplicationId`<sup>Required</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsApplicationId"></a>

```go
func DeveloperAppInsightsApplicationId() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsKey`<sup>Required</sup> <a name="DeveloperAppInsightsKey" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.developerAppInsightsKey"></a>

```go
func DeveloperAppInsightsKey() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LuisAppIds`<sup>Required</sup> <a name="LuisAppIds" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.luisAppIds"></a>

```go
func LuisAppIds() *[]*string
```

- *Type:* *[]*string

---

##### `LuisKey`<sup>Required</sup> <a name="LuisKey" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.luisKey"></a>

```go
func LuisKey() *string
```

- *Type:* *string

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppId"></a>

```go
func MicrosoftAppId() *string
```

- *Type:* *string

---

##### `MicrosoftAppTenantId`<sup>Required</sup> <a name="MicrosoftAppTenantId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppTenantId"></a>

```go
func MicrosoftAppTenantId() *string
```

- *Type:* *string

---

##### `MicrosoftAppType`<sup>Required</sup> <a name="MicrosoftAppType" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppType"></a>

```go
func MicrosoftAppType() *string
```

- *Type:* *string

---

##### `MicrosoftAppUserAssignedIdentityId`<sup>Required</sup> <a name="MicrosoftAppUserAssignedIdentityId" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.microsoftAppUserAssignedIdentityId"></a>

```go
func MicrosoftAppUserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.botWebApp.BotWebApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BotWebAppConfig <a name="BotWebAppConfig" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/botwebapp"

&botwebapp.BotWebAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MicrosoftAppId: *string,
	Name: *string,
	ResourceGroupName: *string,
	Sku: *string,
	DeveloperAppInsightsApiKey: *string,
	DeveloperAppInsightsApplicationId: *string,
	DeveloperAppInsightsKey: *string,
	DisplayName: *string,
	Endpoint: *string,
	Id: *string,
	LuisAppIds: *[]*string,
	LuisKey: *string,
	MicrosoftAppTenantId: *string,
	MicrosoftAppType: *string,
	MicrosoftAppUserAssignedIdentityId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.botWebApp.BotWebAppTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#location BotWebApp#location}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.microsoftAppId">MicrosoftAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#microsoft_app_id BotWebApp#microsoft_app_id}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#name BotWebApp#name}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#resource_group_name BotWebApp#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#sku BotWebApp#sku}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#developer_app_insights_api_key BotWebApp#developer_app_insights_api_key}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#developer_app_insights_application_id BotWebApp#developer_app_insights_application_id}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#developer_app_insights_key BotWebApp#developer_app_insights_key}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#display_name BotWebApp#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#endpoint BotWebApp#endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#id BotWebApp#id}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.luisAppIds">LuisAppIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#luis_app_ids BotWebApp#luis_app_ids}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.luisKey">LuisKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#luis_key BotWebApp#luis_key}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.microsoftAppTenantId">MicrosoftAppTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#microsoft_app_tenant_id BotWebApp#microsoft_app_tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.microsoftAppType">MicrosoftAppType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#microsoft_app_type BotWebApp#microsoft_app_type}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.microsoftAppUserAssignedIdentityId">MicrosoftAppUserAssignedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#microsoft_app_user_assigned_identity_id BotWebApp#microsoft_app_user_assigned_identity_id}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#tags BotWebApp#tags}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts">BotWebAppTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#location BotWebApp#location}.

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.microsoftAppId"></a>

```go
MicrosoftAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#microsoft_app_id BotWebApp#microsoft_app_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#name BotWebApp#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#resource_group_name BotWebApp#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#sku BotWebApp#sku}.

---

##### `DeveloperAppInsightsApiKey`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.developerAppInsightsApiKey"></a>

```go
DeveloperAppInsightsApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#developer_app_insights_api_key BotWebApp#developer_app_insights_api_key}.

---

##### `DeveloperAppInsightsApplicationId`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.developerAppInsightsApplicationId"></a>

```go
DeveloperAppInsightsApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#developer_app_insights_application_id BotWebApp#developer_app_insights_application_id}.

---

##### `DeveloperAppInsightsKey`<sup>Optional</sup> <a name="DeveloperAppInsightsKey" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.developerAppInsightsKey"></a>

```go
DeveloperAppInsightsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#developer_app_insights_key BotWebApp#developer_app_insights_key}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#display_name BotWebApp#display_name}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#endpoint BotWebApp#endpoint}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#id BotWebApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LuisAppIds`<sup>Optional</sup> <a name="LuisAppIds" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.luisAppIds"></a>

```go
LuisAppIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#luis_app_ids BotWebApp#luis_app_ids}.

---

##### `LuisKey`<sup>Optional</sup> <a name="LuisKey" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.luisKey"></a>

```go
LuisKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#luis_key BotWebApp#luis_key}.

---

##### `MicrosoftAppTenantId`<sup>Optional</sup> <a name="MicrosoftAppTenantId" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.microsoftAppTenantId"></a>

```go
MicrosoftAppTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#microsoft_app_tenant_id BotWebApp#microsoft_app_tenant_id}.

---

##### `MicrosoftAppType`<sup>Optional</sup> <a name="MicrosoftAppType" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.microsoftAppType"></a>

```go
MicrosoftAppType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#microsoft_app_type BotWebApp#microsoft_app_type}.

---

##### `MicrosoftAppUserAssignedIdentityId`<sup>Optional</sup> <a name="MicrosoftAppUserAssignedIdentityId" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.microsoftAppUserAssignedIdentityId"></a>

```go
MicrosoftAppUserAssignedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#microsoft_app_user_assigned_identity_id BotWebApp#microsoft_app_user_assigned_identity_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#tags BotWebApp#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.botWebApp.BotWebAppConfig.property.timeouts"></a>

```go
Timeouts BotWebAppTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts">BotWebAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#timeouts BotWebApp#timeouts}

---

### BotWebAppTimeouts <a name="BotWebAppTimeouts" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/botwebapp"

&botwebapp.BotWebAppTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#create BotWebApp#create}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#delete BotWebApp#delete}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#read BotWebApp#read}. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#update BotWebApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#create BotWebApp#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#delete BotWebApp#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#read BotWebApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/bot_web_app#update BotWebApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotWebAppTimeoutsOutputReference <a name="BotWebAppTimeoutsOutputReference" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/botwebapp"

botwebapp.NewBotWebAppTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BotWebAppTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.botWebApp.BotWebAppTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



