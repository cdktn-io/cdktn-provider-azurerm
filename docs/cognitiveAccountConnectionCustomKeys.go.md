# `cognitiveAccountConnectionCustomKeys` Submodule <a name="`cognitiveAccountConnectionCustomKeys` Submodule" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountConnectionCustomKeys <a name="CognitiveAccountConnectionCustomKeys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys azurerm_cognitive_account_connection_custom_keys}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cognitiveaccountconnectioncustomkeys"

cognitiveaccountconnectioncustomkeys.NewCognitiveAccountConnectionCustomKeys(scope Construct, id *string, config CognitiveAccountConnectionCustomKeysConfig) CognitiveAccountConnectionCustomKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig">CognitiveAccountConnectionCustomKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig">CognitiveAccountConnectionCustomKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts"></a>

```go
func PutTimeouts(value CognitiveAccountConnectionCustomKeysTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitiveAccountConnectionCustomKeys resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cognitiveaccountconnectioncustomkeys"

cognitiveaccountconnectioncustomkeys.CognitiveAccountConnectionCustomKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cognitiveaccountconnectioncustomkeys"

cognitiveaccountconnectioncustomkeys.CognitiveAccountConnectionCustomKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cognitiveaccountconnectioncustomkeys"

cognitiveaccountconnectioncustomkeys.CognitiveAccountConnectionCustomKeys_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cognitiveaccountconnectioncustomkeys"

cognitiveaccountconnectioncustomkeys.CognitiveAccountConnectionCustomKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CognitiveAccountConnectionCustomKeys resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CognitiveAccountConnectionCustomKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CognitiveAccountConnectionCustomKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CognitiveAccountConnectionCustomKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference">CognitiveAccountConnectionCustomKeysTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountIdInput">CognitiveAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeysInput">CustomKeysInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeys">CustomKeys</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeouts"></a>

```go
func Timeouts() CognitiveAccountConnectionCustomKeysTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference">CognitiveAccountConnectionCustomKeysTimeoutsOutputReference</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `CognitiveAccountIdInput`<sup>Optional</sup> <a name="CognitiveAccountIdInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountIdInput"></a>

```go
func CognitiveAccountIdInput() *string
```

- *Type:* *string

---

##### `CustomKeysInput`<sup>Optional</sup> <a name="CustomKeysInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeysInput"></a>

```go
func CustomKeysInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `CognitiveAccountId`<sup>Required</sup> <a name="CognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountId"></a>

```go
func CognitiveAccountId() *string
```

- *Type:* *string

---

##### `CustomKeys`<sup>Required</sup> <a name="CustomKeys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeys"></a>

```go
func CustomKeys() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountConnectionCustomKeysConfig <a name="CognitiveAccountConnectionCustomKeysConfig" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cognitiveaccountconnectioncustomkeys"

&cognitiveaccountconnectioncustomkeys.CognitiveAccountConnectionCustomKeysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Category: *string,
	CognitiveAccountId: *string,
	CustomKeys: *map[string]*string,
	Name: *string,
	Target: *string,
	Id: *string,
	Metadata: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#category CognitiveAccountConnectionCustomKeys#category}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#cognitive_account_id CognitiveAccountConnectionCustomKeys#cognitive_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.customKeys">CustomKeys</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#custom_keys CognitiveAccountConnectionCustomKeys#custom_keys}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#name CognitiveAccountConnectionCustomKeys#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#target CognitiveAccountConnectionCustomKeys#target}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#id CognitiveAccountConnectionCustomKeys#id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#metadata CognitiveAccountConnectionCustomKeys#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#category CognitiveAccountConnectionCustomKeys#category}.

---

##### `CognitiveAccountId`<sup>Required</sup> <a name="CognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.cognitiveAccountId"></a>

```go
CognitiveAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#cognitive_account_id CognitiveAccountConnectionCustomKeys#cognitive_account_id}.

---

##### `CustomKeys`<sup>Required</sup> <a name="CustomKeys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.customKeys"></a>

```go
CustomKeys *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#custom_keys CognitiveAccountConnectionCustomKeys#custom_keys}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#name CognitiveAccountConnectionCustomKeys#name}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#target CognitiveAccountConnectionCustomKeys#target}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#id CognitiveAccountConnectionCustomKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#metadata CognitiveAccountConnectionCustomKeys#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.timeouts"></a>

```go
Timeouts CognitiveAccountConnectionCustomKeysTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#timeouts CognitiveAccountConnectionCustomKeys#timeouts}

---

### CognitiveAccountConnectionCustomKeysTimeouts <a name="CognitiveAccountConnectionCustomKeysTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cognitiveaccountconnectioncustomkeys"

&cognitiveaccountconnectioncustomkeys.CognitiveAccountConnectionCustomKeysTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#create CognitiveAccountConnectionCustomKeys#create}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#delete CognitiveAccountConnectionCustomKeys#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#read CognitiveAccountConnectionCustomKeys#read}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#update CognitiveAccountConnectionCustomKeys#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#create CognitiveAccountConnectionCustomKeys#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#delete CognitiveAccountConnectionCustomKeys#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#read CognitiveAccountConnectionCustomKeys#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#update CognitiveAccountConnectionCustomKeys#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountConnectionCustomKeysTimeoutsOutputReference <a name="CognitiveAccountConnectionCustomKeysTimeoutsOutputReference" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cognitiveaccountconnectioncustomkeys"

cognitiveaccountconnectioncustomkeys.NewCognitiveAccountConnectionCustomKeysTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitiveAccountConnectionCustomKeysTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



