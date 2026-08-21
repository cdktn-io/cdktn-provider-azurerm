# `mssqlServerSecurityAlertPolicy` Submodule <a name="`mssqlServerSecurityAlertPolicy` Submodule" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerSecurityAlertPolicy <a name="MssqlServerSecurityAlertPolicy" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy azurerm_mssql_server_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/mssqlserversecurityalertpolicy"

mssqlserversecurityalertpolicy.NewMssqlServerSecurityAlertPolicy(scope Construct, id *string, config MssqlServerSecurityAlertPolicyConfig) MssqlServerSecurityAlertPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig">MssqlServerSecurityAlertPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig">MssqlServerSecurityAlertPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetDisabledAlerts">ResetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAccountAdminsEnabled">ResetEmailAccountAdminsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.putTimeouts"></a>

```go
func PutTimeouts(value MssqlServerSecurityAlertPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

---

##### `ResetDisabledAlerts` <a name="ResetDisabledAlerts" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetDisabledAlerts"></a>

```go
func ResetDisabledAlerts()
```

##### `ResetEmailAccountAdminsEnabled` <a name="ResetEmailAccountAdminsEnabled" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAccountAdminsEnabled"></a>

```go
func ResetEmailAccountAdminsEnabled()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```go
func ResetStorageAccountAccessKey()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetStorageEndpoint"></a>

```go
func ResetStorageEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MssqlServerSecurityAlertPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/mssqlserversecurityalertpolicy"

mssqlserversecurityalertpolicy.MssqlServerSecurityAlertPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/mssqlserversecurityalertpolicy"

mssqlserversecurityalertpolicy.MssqlServerSecurityAlertPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/mssqlserversecurityalertpolicy"

mssqlserversecurityalertpolicy.MssqlServerSecurityAlertPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/mssqlserversecurityalertpolicy"

mssqlserversecurityalertpolicy.MssqlServerSecurityAlertPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MssqlServerSecurityAlertPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlServerSecurityAlertPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlServerSecurityAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MssqlServerSecurityAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference">MssqlServerSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlertsInput">DisabledAlertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdminsEnabledInput">EmailAccountAdminsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlerts">DisabledAlerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdminsEnabled">EmailAccountAdminsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeouts"></a>

```go
func Timeouts() MssqlServerSecurityAlertPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference">MssqlServerSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `DisabledAlertsInput`<sup>Optional</sup> <a name="DisabledAlertsInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlertsInput"></a>

```go
func DisabledAlertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAccountAdminsEnabledInput`<sup>Optional</sup> <a name="EmailAccountAdminsEnabledInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdminsEnabledInput"></a>

```go
func EmailAccountAdminsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```go
func StorageAccountAccessKeyInput() *string
```

- *Type:* *string

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpointInput"></a>

```go
func StorageEndpointInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledAlerts`<sup>Required</sup> <a name="DisabledAlerts" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.disabledAlerts"></a>

```go
func DisabledAlerts() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAccountAdminsEnabled`<sup>Required</sup> <a name="EmailAccountAdminsEnabled" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAccountAdminsEnabled"></a>

```go
func EmailAccountAdminsEnabled() interface{}
```

- *Type:* interface{}

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageEndpoint`<sup>Required</sup> <a name="StorageEndpoint" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.storageEndpoint"></a>

```go
func StorageEndpoint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerSecurityAlertPolicyConfig <a name="MssqlServerSecurityAlertPolicyConfig" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/mssqlserversecurityalertpolicy"

&mssqlserversecurityalertpolicy.MssqlServerSecurityAlertPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceGroupName: *string,
	ServerName: *string,
	State: *string,
	DisabledAlerts: *[]*string,
	EmailAccountAdminsEnabled: interface{},
	EmailAddresses: *[]*string,
	Id: *string,
	RetentionDays: *f64,
	StorageAccountAccessKey: *string,
	StorageEndpoint: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#resource_group_name MssqlServerSecurityAlertPolicy#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#server_name MssqlServerSecurityAlertPolicy#server_name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#state MssqlServerSecurityAlertPolicy#state}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.disabledAlerts">DisabledAlerts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#disabled_alerts MssqlServerSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled">EmailAccountAdminsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#email_account_admins_enabled MssqlServerSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#email_addresses MssqlServerSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#id MssqlServerSecurityAlertPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#retention_days MssqlServerSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#storage_account_access_key MssqlServerSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#storage_endpoint MssqlServerSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#resource_group_name MssqlServerSecurityAlertPolicy#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#server_name MssqlServerSecurityAlertPolicy#server_name}.

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#state MssqlServerSecurityAlertPolicy#state}.

---

##### `DisabledAlerts`<sup>Optional</sup> <a name="DisabledAlerts" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```go
DisabledAlerts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#disabled_alerts MssqlServerSecurityAlertPolicy#disabled_alerts}.

---

##### `EmailAccountAdminsEnabled`<sup>Optional</sup> <a name="EmailAccountAdminsEnabled" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled"></a>

```go
EmailAccountAdminsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#email_account_admins_enabled MssqlServerSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#email_addresses MssqlServerSecurityAlertPolicy#email_addresses}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#id MssqlServerSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#retention_days MssqlServerSecurityAlertPolicy#retention_days}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```go
StorageAccountAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#storage_account_access_key MssqlServerSecurityAlertPolicy#storage_account_access_key}.

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```go
StorageEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#storage_endpoint MssqlServerSecurityAlertPolicy#storage_endpoint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyConfig.property.timeouts"></a>

```go
Timeouts MssqlServerSecurityAlertPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts">MssqlServerSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#timeouts MssqlServerSecurityAlertPolicy#timeouts}

---

### MssqlServerSecurityAlertPolicyTimeouts <a name="MssqlServerSecurityAlertPolicyTimeouts" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/mssqlserversecurityalertpolicy"

&mssqlserversecurityalertpolicy.MssqlServerSecurityAlertPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#create MssqlServerSecurityAlertPolicy#create}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#delete MssqlServerSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#read MssqlServerSecurityAlertPolicy#read}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#update MssqlServerSecurityAlertPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#create MssqlServerSecurityAlertPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#delete MssqlServerSecurityAlertPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#read MssqlServerSecurityAlertPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_server_security_alert_policy#update MssqlServerSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerSecurityAlertPolicyTimeoutsOutputReference <a name="MssqlServerSecurityAlertPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/mssqlserversecurityalertpolicy"

mssqlserversecurityalertpolicy.NewMssqlServerSecurityAlertPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlServerSecurityAlertPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlServerSecurityAlertPolicy.MssqlServerSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



