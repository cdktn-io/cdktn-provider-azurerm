# `cognitiveAccountConnectionAccountKey` Submodule <a name="`cognitiveAccountConnectionAccountKey` Submodule" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountConnectionAccountKey <a name="CognitiveAccountConnectionAccountKey" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key azurerm_cognitive_account_connection_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cognitiveaccountconnectionaccountkey"

cognitiveaccountconnectionaccountkey.NewCognitiveAccountConnectionAccountKey(scope Construct, id *string, config CognitiveAccountConnectionAccountKeyConfig) CognitiveAccountConnectionAccountKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig">CognitiveAccountConnectionAccountKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig">CognitiveAccountConnectionAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.putTimeouts"></a>

```go
func PutTimeouts(value CognitiveAccountConnectionAccountKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitiveAccountConnectionAccountKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cognitiveaccountconnectionaccountkey"

cognitiveaccountconnectionaccountkey.CognitiveAccountConnectionAccountKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cognitiveaccountconnectionaccountkey"

cognitiveaccountconnectionaccountkey.CognitiveAccountConnectionAccountKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cognitiveaccountconnectionaccountkey"

cognitiveaccountconnectionaccountkey.CognitiveAccountConnectionAccountKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cognitiveaccountconnectionaccountkey"

cognitiveaccountconnectionaccountkey.CognitiveAccountConnectionAccountKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CognitiveAccountConnectionAccountKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CognitiveAccountConnectionAccountKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CognitiveAccountConnectionAccountKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CognitiveAccountConnectionAccountKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference">CognitiveAccountConnectionAccountKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.accountKeyInput">AccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cognitiveAccountIdInput">CognitiveAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.accountKey">AccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.timeouts"></a>

```go
func Timeouts() CognitiveAccountConnectionAccountKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference">CognitiveAccountConnectionAccountKeyTimeoutsOutputReference</a>

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.accountKeyInput"></a>

```go
func AccountKeyInput() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `CognitiveAccountIdInput`<sup>Optional</sup> <a name="CognitiveAccountIdInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cognitiveAccountIdInput"></a>

```go
func CognitiveAccountIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.accountKey"></a>

```go
func AccountKey() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `CognitiveAccountId`<sup>Required</sup> <a name="CognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cognitiveAccountId"></a>

```go
func CognitiveAccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountConnectionAccountKeyConfig <a name="CognitiveAccountConnectionAccountKeyConfig" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cognitiveaccountconnectionaccountkey"

&cognitiveaccountconnectionaccountkey.CognitiveAccountConnectionAccountKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountKey: *string,
	Category: *string,
	CognitiveAccountId: *string,
	Metadata: *map[string]*string,
	Name: *string,
	Target: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.accountKey">AccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#account_key CognitiveAccountConnectionAccountKey#account_key}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#category CognitiveAccountConnectionAccountKey#category}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#cognitive_account_id CognitiveAccountConnectionAccountKey#cognitive_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#metadata CognitiveAccountConnectionAccountKey#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#name CognitiveAccountConnectionAccountKey#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#target CognitiveAccountConnectionAccountKey#target}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#id CognitiveAccountConnectionAccountKey#id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.accountKey"></a>

```go
AccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#account_key CognitiveAccountConnectionAccountKey#account_key}.

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#category CognitiveAccountConnectionAccountKey#category}.

---

##### `CognitiveAccountId`<sup>Required</sup> <a name="CognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.cognitiveAccountId"></a>

```go
CognitiveAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#cognitive_account_id CognitiveAccountConnectionAccountKey#cognitive_account_id}.

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#metadata CognitiveAccountConnectionAccountKey#metadata}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#name CognitiveAccountConnectionAccountKey#name}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#target CognitiveAccountConnectionAccountKey#target}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#id CognitiveAccountConnectionAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.timeouts"></a>

```go
Timeouts CognitiveAccountConnectionAccountKeyTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#timeouts CognitiveAccountConnectionAccountKey#timeouts}

---

### CognitiveAccountConnectionAccountKeyTimeouts <a name="CognitiveAccountConnectionAccountKeyTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cognitiveaccountconnectionaccountkey"

&cognitiveaccountconnectionaccountkey.CognitiveAccountConnectionAccountKeyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#create CognitiveAccountConnectionAccountKey#create}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#delete CognitiveAccountConnectionAccountKey#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#read CognitiveAccountConnectionAccountKey#read}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#update CognitiveAccountConnectionAccountKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#create CognitiveAccountConnectionAccountKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#delete CognitiveAccountConnectionAccountKey#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#read CognitiveAccountConnectionAccountKey#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cognitive_account_connection_account_key#update CognitiveAccountConnectionAccountKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountConnectionAccountKeyTimeoutsOutputReference <a name="CognitiveAccountConnectionAccountKeyTimeoutsOutputReference" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cognitiveaccountconnectionaccountkey"

cognitiveaccountconnectionaccountkey.NewCognitiveAccountConnectionAccountKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitiveAccountConnectionAccountKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



