# `analysisServicesServer` Submodule <a name="`analysisServicesServer` Submodule" id="@cdktn/provider-azurerm.analysisServicesServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnalysisServicesServer <a name="AnalysisServicesServer" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server azurerm_analysis_services_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

analysisservicesserver.NewAnalysisServicesServer(scope Construct, id *string, config AnalysisServicesServerConfig) AnalysisServicesServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig">AnalysisServicesServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig">AnalysisServicesServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putIpv4FirewallRule">PutIpv4FirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetAdminUsers">ResetAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetBackupBlobContainerUri">ResetBackupBlobContainerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetIpv4FirewallRule">ResetIpv4FirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetPowerBiServiceEnabled">ResetPowerBiServiceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetQuerypoolConnectionMode">ResetQuerypoolConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpv4FirewallRule` <a name="PutIpv4FirewallRule" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putIpv4FirewallRule"></a>

```go
func PutIpv4FirewallRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putIpv4FirewallRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts"></a>

```go
func PutTimeouts(value AnalysisServicesServerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>

---

##### `ResetAdminUsers` <a name="ResetAdminUsers" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetAdminUsers"></a>

```go
func ResetAdminUsers()
```

##### `ResetBackupBlobContainerUri` <a name="ResetBackupBlobContainerUri" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetBackupBlobContainerUri"></a>

```go
func ResetBackupBlobContainerUri()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv4FirewallRule` <a name="ResetIpv4FirewallRule" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetIpv4FirewallRule"></a>

```go
func ResetIpv4FirewallRule()
```

##### `ResetPowerBiServiceEnabled` <a name="ResetPowerBiServiceEnabled" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetPowerBiServiceEnabled"></a>

```go
func ResetPowerBiServiceEnabled()
```

##### `ResetQuerypoolConnectionMode` <a name="ResetQuerypoolConnectionMode" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetQuerypoolConnectionMode"></a>

```go
func ResetQuerypoolConnectionMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AnalysisServicesServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

analysisservicesserver.AnalysisServicesServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

analysisservicesserver.AnalysisServicesServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

analysisservicesserver.AnalysisServicesServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

analysisservicesserver.AnalysisServicesServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AnalysisServicesServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AnalysisServicesServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AnalysisServicesServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AnalysisServicesServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRule">Ipv4FirewallRule</a></code> | <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList">AnalysisServicesServerIpv4FirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.serverFullName">ServerFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference">AnalysisServicesServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsersInput">AdminUsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUriInput">BackupBlobContainerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRuleInput">Ipv4FirewallRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.powerBiServiceEnabledInput">PowerBiServiceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionModeInput">QuerypoolConnectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsers">AdminUsers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUri">BackupBlobContainerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.powerBiServiceEnabled">PowerBiServiceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionMode">QuerypoolConnectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ipv4FirewallRule`<sup>Required</sup> <a name="Ipv4FirewallRule" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRule"></a>

```go
func Ipv4FirewallRule() AnalysisServicesServerIpv4FirewallRuleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList">AnalysisServicesServerIpv4FirewallRuleList</a>

---

##### `ServerFullName`<sup>Required</sup> <a name="ServerFullName" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.serverFullName"></a>

```go
func ServerFullName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeouts"></a>

```go
func Timeouts() AnalysisServicesServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference">AnalysisServicesServerTimeoutsOutputReference</a>

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsersInput"></a>

```go
func AdminUsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackupBlobContainerUriInput`<sup>Optional</sup> <a name="BackupBlobContainerUriInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUriInput"></a>

```go
func BackupBlobContainerUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv4FirewallRuleInput`<sup>Optional</sup> <a name="Ipv4FirewallRuleInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRuleInput"></a>

```go
func Ipv4FirewallRuleInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PowerBiServiceEnabledInput`<sup>Optional</sup> <a name="PowerBiServiceEnabledInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.powerBiServiceEnabledInput"></a>

```go
func PowerBiServiceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `QuerypoolConnectionModeInput`<sup>Optional</sup> <a name="QuerypoolConnectionModeInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionModeInput"></a>

```go
func QuerypoolConnectionModeInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsers"></a>

```go
func AdminUsers() *[]*string
```

- *Type:* *[]*string

---

##### `BackupBlobContainerUri`<sup>Required</sup> <a name="BackupBlobContainerUri" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUri"></a>

```go
func BackupBlobContainerUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PowerBiServiceEnabled`<sup>Required</sup> <a name="PowerBiServiceEnabled" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.powerBiServiceEnabled"></a>

```go
func PowerBiServiceEnabled() interface{}
```

- *Type:* interface{}

---

##### `QuerypoolConnectionMode`<sup>Required</sup> <a name="QuerypoolConnectionMode" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionMode"></a>

```go
func QuerypoolConnectionMode() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AnalysisServicesServerConfig <a name="AnalysisServicesServerConfig" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

&analysisservicesserver.AnalysisServicesServerConfig {
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
	AdminUsers: *[]*string,
	BackupBlobContainerUri: *string,
	Id: *string,
	Ipv4FirewallRule: interface{},
	PowerBiServiceEnabled: interface{},
	QuerypoolConnectionMode: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.analysisServicesServer.AnalysisServicesServerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.adminUsers">AdminUsers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.backupBlobContainerUri">BackupBlobContainerUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.ipv4FirewallRule">Ipv4FirewallRule</a></code> | <code>interface{}</code> | ipv4_firewall_rule block. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.powerBiServiceEnabled">PowerBiServiceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#power_bi_service_enabled AnalysisServicesServer#power_bi_service_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.querypoolConnectionMode">QuerypoolConnectionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}.

---

##### `AdminUsers`<sup>Optional</sup> <a name="AdminUsers" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.adminUsers"></a>

```go
AdminUsers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}.

---

##### `BackupBlobContainerUri`<sup>Optional</sup> <a name="BackupBlobContainerUri" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.backupBlobContainerUri"></a>

```go
BackupBlobContainerUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv4FirewallRule`<sup>Optional</sup> <a name="Ipv4FirewallRule" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.ipv4FirewallRule"></a>

```go
Ipv4FirewallRule interface{}
```

- *Type:* interface{}

ipv4_firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#ipv4_firewall_rule AnalysisServicesServer#ipv4_firewall_rule}

---

##### `PowerBiServiceEnabled`<sup>Optional</sup> <a name="PowerBiServiceEnabled" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.powerBiServiceEnabled"></a>

```go
PowerBiServiceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#power_bi_service_enabled AnalysisServicesServer#power_bi_service_enabled}.

---

##### `QuerypoolConnectionMode`<sup>Optional</sup> <a name="QuerypoolConnectionMode" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.querypoolConnectionMode"></a>

```go
QuerypoolConnectionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.timeouts"></a>

```go
Timeouts AnalysisServicesServerTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#timeouts AnalysisServicesServer#timeouts}

---

### AnalysisServicesServerIpv4FirewallRule <a name="AnalysisServicesServerIpv4FirewallRule" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

&analysisservicesserver.AnalysisServicesServerIpv4FirewallRule {
	Name: *string,
	RangeEnd: *string,
	RangeStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeEnd">RangeEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#range_end AnalysisServicesServer#range_end}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeStart">RangeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#range_start AnalysisServicesServer#range_start}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}.

---

##### `RangeEnd`<sup>Required</sup> <a name="RangeEnd" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeEnd"></a>

```go
RangeEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#range_end AnalysisServicesServer#range_end}.

---

##### `RangeStart`<sup>Required</sup> <a name="RangeStart" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeStart"></a>

```go
RangeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#range_start AnalysisServicesServer#range_start}.

---

### AnalysisServicesServerTimeouts <a name="AnalysisServicesServerTimeouts" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

&analysisservicesserver.AnalysisServicesServerTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#create AnalysisServicesServer#create}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#delete AnalysisServicesServer#delete}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#read AnalysisServicesServer#read}. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#update AnalysisServicesServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#create AnalysisServicesServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#delete AnalysisServicesServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#read AnalysisServicesServer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/analysis_services_server#update AnalysisServicesServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnalysisServicesServerIpv4FirewallRuleList <a name="AnalysisServicesServerIpv4FirewallRuleList" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

analysisservicesserver.NewAnalysisServicesServerIpv4FirewallRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AnalysisServicesServerIpv4FirewallRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.get"></a>

```go
func Get(index *f64) AnalysisServicesServerIpv4FirewallRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AnalysisServicesServerIpv4FirewallRuleOutputReference <a name="AnalysisServicesServerIpv4FirewallRuleOutputReference" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

analysisservicesserver.NewAnalysisServicesServerIpv4FirewallRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AnalysisServicesServerIpv4FirewallRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEndInput">RangeEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStartInput">RangeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEnd">RangeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStart">RangeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RangeEndInput`<sup>Optional</sup> <a name="RangeEndInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEndInput"></a>

```go
func RangeEndInput() *string
```

- *Type:* *string

---

##### `RangeStartInput`<sup>Optional</sup> <a name="RangeStartInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStartInput"></a>

```go
func RangeStartInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RangeEnd`<sup>Required</sup> <a name="RangeEnd" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEnd"></a>

```go
func RangeEnd() *string
```

- *Type:* *string

---

##### `RangeStart`<sup>Required</sup> <a name="RangeStart" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStart"></a>

```go
func RangeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AnalysisServicesServerTimeoutsOutputReference <a name="AnalysisServicesServerTimeoutsOutputReference" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/analysisservicesserver"

analysisservicesserver.NewAnalysisServicesServerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AnalysisServicesServerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



