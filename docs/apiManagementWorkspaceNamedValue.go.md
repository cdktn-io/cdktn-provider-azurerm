# `apiManagementWorkspaceNamedValue` Submodule <a name="`apiManagementWorkspaceNamedValue` Submodule" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementWorkspaceNamedValue <a name="ApiManagementWorkspaceNamedValue" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value azurerm_api_management_workspace_named_value}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

apimanagementworkspacenamedvalue.NewApiManagementWorkspaceNamedValue(scope Construct, id *string, config ApiManagementWorkspaceNamedValueConfig) ApiManagementWorkspaceNamedValue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig">ApiManagementWorkspaceNamedValueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig">ApiManagementWorkspaceNamedValueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putValueFromKeyVault">PutValueFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetValueFromKeyVault">ResetValueFromKeyVault</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementWorkspaceNamedValueTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a>

---

##### `PutValueFromKeyVault` <a name="PutValueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putValueFromKeyVault"></a>

```go
func PutValueFromKeyVault(value ApiManagementWorkspaceNamedValueValueFromKeyVault)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putValueFromKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetId"></a>

```go
func ResetId()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueFromKeyVault` <a name="ResetValueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetValueFromKeyVault"></a>

```go
func ResetValueFromKeyVault()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiManagementWorkspaceNamedValue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

apimanagementworkspacenamedvalue.ApiManagementWorkspaceNamedValue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

apimanagementworkspacenamedvalue.ApiManagementWorkspaceNamedValue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

apimanagementworkspacenamedvalue.ApiManagementWorkspaceNamedValue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

apimanagementworkspacenamedvalue.ApiManagementWorkspaceNamedValue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiManagementWorkspaceNamedValue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiManagementWorkspaceNamedValue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiManagementWorkspaceNamedValue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiManagementWorkspaceNamedValue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference">ApiManagementWorkspaceNamedValueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueFromKeyVault">ValueFromKeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference">ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.apiManagementWorkspaceIdInput">ApiManagementWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueFromKeyVaultInput">ValueFromKeyVaultInput</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.apiManagementWorkspaceId">ApiManagementWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.secret">Secret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.timeouts"></a>

```go
func Timeouts() ApiManagementWorkspaceNamedValueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference">ApiManagementWorkspaceNamedValueTimeoutsOutputReference</a>

---

##### `ValueFromKeyVault`<sup>Required</sup> <a name="ValueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueFromKeyVault"></a>

```go
func ValueFromKeyVault() ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference">ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference</a>

---

##### `ApiManagementWorkspaceIdInput`<sup>Optional</sup> <a name="ApiManagementWorkspaceIdInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.apiManagementWorkspaceIdInput"></a>

```go
func ApiManagementWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueFromKeyVaultInput`<sup>Optional</sup> <a name="ValueFromKeyVaultInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueFromKeyVaultInput"></a>

```go
func ValueFromKeyVaultInput() ApiManagementWorkspaceNamedValueValueFromKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ApiManagementWorkspaceId`<sup>Required</sup> <a name="ApiManagementWorkspaceId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.apiManagementWorkspaceId"></a>

```go
func ApiManagementWorkspaceId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.secret"></a>

```go
func Secret() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementWorkspaceNamedValueConfig <a name="ApiManagementWorkspaceNamedValueConfig" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

&apimanagementworkspacenamedvalue.ApiManagementWorkspaceNamedValueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementWorkspaceId: *string,
	DisplayName: *string,
	Name: *string,
	Id: *string,
	Secret: interface{},
	Tags: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts,
	Value: *string,
	ValueFromKeyVault: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.apiManagementWorkspaceId">ApiManagementWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#api_management_workspace_id ApiManagementWorkspaceNamedValue#api_management_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#display_name ApiManagementWorkspaceNamedValue#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#name ApiManagementWorkspaceNamedValue#name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#id ApiManagementWorkspaceNamedValue#id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.secret">Secret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#secret ApiManagementWorkspaceNamedValue#secret}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#tags ApiManagementWorkspaceNamedValue#tags}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#value ApiManagementWorkspaceNamedValue#value}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.valueFromKeyVault">ValueFromKeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a></code> | value_from_key_vault block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementWorkspaceId`<sup>Required</sup> <a name="ApiManagementWorkspaceId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.apiManagementWorkspaceId"></a>

```go
ApiManagementWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#api_management_workspace_id ApiManagementWorkspaceNamedValue#api_management_workspace_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#display_name ApiManagementWorkspaceNamedValue#display_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#name ApiManagementWorkspaceNamedValue#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#id ApiManagementWorkspaceNamedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#secret ApiManagementWorkspaceNamedValue#secret}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#tags ApiManagementWorkspaceNamedValue#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.timeouts"></a>

```go
Timeouts ApiManagementWorkspaceNamedValueTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#timeouts ApiManagementWorkspaceNamedValue#timeouts}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#value ApiManagementWorkspaceNamedValue#value}.

---

##### `ValueFromKeyVault`<sup>Optional</sup> <a name="ValueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.valueFromKeyVault"></a>

```go
ValueFromKeyVault ApiManagementWorkspaceNamedValueValueFromKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a>

value_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#value_from_key_vault ApiManagementWorkspaceNamedValue#value_from_key_vault}

---

### ApiManagementWorkspaceNamedValueTimeouts <a name="ApiManagementWorkspaceNamedValueTimeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

&apimanagementworkspacenamedvalue.ApiManagementWorkspaceNamedValueTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#create ApiManagementWorkspaceNamedValue#create}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#delete ApiManagementWorkspaceNamedValue#delete}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#read ApiManagementWorkspaceNamedValue#read}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#update ApiManagementWorkspaceNamedValue#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#create ApiManagementWorkspaceNamedValue#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#delete ApiManagementWorkspaceNamedValue#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#read ApiManagementWorkspaceNamedValue#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#update ApiManagementWorkspaceNamedValue#update}.

---

### ApiManagementWorkspaceNamedValueValueFromKeyVault <a name="ApiManagementWorkspaceNamedValueValueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

&apimanagementworkspacenamedvalue.ApiManagementWorkspaceNamedValueValueFromKeyVault {
	SecretId: *string,
	IdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#secret_id ApiManagementWorkspaceNamedValue#secret_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.property.identityClientId">IdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#identity_client_id ApiManagementWorkspaceNamedValue#identity_client_id}. |

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#secret_id ApiManagementWorkspaceNamedValue#secret_id}.

---

##### `IdentityClientId`<sup>Optional</sup> <a name="IdentityClientId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.property.identityClientId"></a>

```go
IdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/api_management_workspace_named_value#identity_client_id ApiManagementWorkspaceNamedValue#identity_client_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementWorkspaceNamedValueTimeoutsOutputReference <a name="ApiManagementWorkspaceNamedValueTimeoutsOutputReference" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

apimanagementworkspacenamedvalue.NewApiManagementWorkspaceNamedValueTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementWorkspaceNamedValueTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference <a name="ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/apimanagementworkspacenamedvalue"

apimanagementworkspacenamedvalue.NewApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resetIdentityClientId">ResetIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityClientId` <a name="ResetIdentityClientId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resetIdentityClientId"></a>

```go
func ResetIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.identityClientIdInput">IdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.identityClientId">IdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityClientIdInput`<sup>Optional</sup> <a name="IdentityClientIdInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.identityClientIdInput"></a>

```go
func IdentityClientIdInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `IdentityClientId`<sup>Required</sup> <a name="IdentityClientId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.identityClientId"></a>

```go
func IdentityClientId() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementWorkspaceNamedValueValueFromKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a>

---



