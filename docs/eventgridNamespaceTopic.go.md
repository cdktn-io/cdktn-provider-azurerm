# `eventgridNamespaceTopic` Submodule <a name="`eventgridNamespaceTopic` Submodule" id="@cdktn/provider-azurerm.eventgridNamespaceTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridNamespaceTopic <a name="EventgridNamespaceTopic" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic azurerm_eventgrid_namespace_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/eventgridnamespacetopic"

eventgridnamespacetopic.NewEventgridNamespaceTopic(scope Construct, id *string, config EventgridNamespaceTopicConfig) EventgridNamespaceTopic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig">EventgridNamespaceTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig">EventgridNamespaceTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetEventRetentionInDays">ResetEventRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.putTimeouts"></a>

```go
func PutTimeouts(value EventgridNamespaceTopicTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a>

---

##### `ResetEventRetentionInDays` <a name="ResetEventRetentionInDays" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetEventRetentionInDays"></a>

```go
func ResetEventRetentionInDays()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EventgridNamespaceTopic resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/eventgridnamespacetopic"

eventgridnamespacetopic.EventgridNamespaceTopic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/eventgridnamespacetopic"

eventgridnamespacetopic.EventgridNamespaceTopic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/eventgridnamespacetopic"

eventgridnamespacetopic.EventgridNamespaceTopic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/eventgridnamespacetopic"

eventgridnamespacetopic.EventgridNamespaceTopic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EventgridNamespaceTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EventgridNamespaceTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EventgridNamespaceTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EventgridNamespaceTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference">EventgridNamespaceTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventgridNamespaceIdInput">EventgridNamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventRetentionInDaysInput">EventRetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventgridNamespaceId">EventgridNamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventRetentionInDays">EventRetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.timeouts"></a>

```go
func Timeouts() EventgridNamespaceTopicTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference">EventgridNamespaceTopicTimeoutsOutputReference</a>

---

##### `EventgridNamespaceIdInput`<sup>Optional</sup> <a name="EventgridNamespaceIdInput" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventgridNamespaceIdInput"></a>

```go
func EventgridNamespaceIdInput() *string
```

- *Type:* *string

---

##### `EventRetentionInDaysInput`<sup>Optional</sup> <a name="EventRetentionInDaysInput" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventRetentionInDaysInput"></a>

```go
func EventRetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EventgridNamespaceId`<sup>Required</sup> <a name="EventgridNamespaceId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventgridNamespaceId"></a>

```go
func EventgridNamespaceId() *string
```

- *Type:* *string

---

##### `EventRetentionInDays`<sup>Required</sup> <a name="EventRetentionInDays" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.eventRetentionInDays"></a>

```go
func EventRetentionInDays() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridNamespaceTopicConfig <a name="EventgridNamespaceTopicConfig" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/eventgridnamespacetopic"

&eventgridnamespacetopic.EventgridNamespaceTopicConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EventgridNamespaceId: *string,
	Name: *string,
	EventRetentionInDays: *f64,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.eventgridNamespaceId">EventgridNamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#eventgrid_namespace_id EventgridNamespaceTopic#eventgrid_namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#name EventgridNamespaceTopic#name}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.eventRetentionInDays">EventRetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#event_retention_in_days EventgridNamespaceTopic#event_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#id EventgridNamespaceTopic#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventgridNamespaceId`<sup>Required</sup> <a name="EventgridNamespaceId" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.eventgridNamespaceId"></a>

```go
EventgridNamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#eventgrid_namespace_id EventgridNamespaceTopic#eventgrid_namespace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#name EventgridNamespaceTopic#name}.

---

##### `EventRetentionInDays`<sup>Optional</sup> <a name="EventRetentionInDays" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.eventRetentionInDays"></a>

```go
EventRetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#event_retention_in_days EventgridNamespaceTopic#event_retention_in_days}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#id EventgridNamespaceTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicConfig.property.timeouts"></a>

```go
Timeouts EventgridNamespaceTopicTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts">EventgridNamespaceTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#timeouts EventgridNamespaceTopic#timeouts}

---

### EventgridNamespaceTopicTimeouts <a name="EventgridNamespaceTopicTimeouts" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/eventgridnamespacetopic"

&eventgridnamespacetopic.EventgridNamespaceTopicTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#create EventgridNamespaceTopic#create}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#delete EventgridNamespaceTopic#delete}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#read EventgridNamespaceTopic#read}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#update EventgridNamespaceTopic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#create EventgridNamespaceTopic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#delete EventgridNamespaceTopic#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#read EventgridNamespaceTopic#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/eventgrid_namespace_topic#update EventgridNamespaceTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridNamespaceTopicTimeoutsOutputReference <a name="EventgridNamespaceTopicTimeoutsOutputReference" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/eventgridnamespacetopic"

eventgridnamespacetopic.NewEventgridNamespaceTopicTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridNamespaceTopicTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventgridNamespaceTopic.EventgridNamespaceTopicTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



