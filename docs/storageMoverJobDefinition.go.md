# `storageMoverJobDefinition` Submodule <a name="`storageMoverJobDefinition` Submodule" id="@cdktn/provider-azurerm.storageMoverJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageMoverJobDefinition <a name="StorageMoverJobDefinition" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition azurerm_storage_mover_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/storagemoverjobdefinition"

storagemoverjobdefinition.NewStorageMoverJobDefinition(scope Construct, id *string, config StorageMoverJobDefinitionConfig) StorageMoverJobDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig">StorageMoverJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig">StorageMoverJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetAgentName">ResetAgentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetSourceSubPath">ResetSourceSubPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTargetSubPath">ResetTargetSubPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts"></a>

```go
func PutTimeouts(value StorageMoverJobDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

---

##### `ResetAgentName` <a name="ResetAgentName" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetAgentName"></a>

```go
func ResetAgentName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetSourceSubPath` <a name="ResetSourceSubPath" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetSourceSubPath"></a>

```go
func ResetSourceSubPath()
```

##### `ResetTargetSubPath` <a name="ResetTargetSubPath" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTargetSubPath"></a>

```go
func ResetTargetSubPath()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageMoverJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/storagemoverjobdefinition"

storagemoverjobdefinition.StorageMoverJobDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/storagemoverjobdefinition"

storagemoverjobdefinition.StorageMoverJobDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/storagemoverjobdefinition"

storagemoverjobdefinition.StorageMoverJobDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/storagemoverjobdefinition"

storagemoverjobdefinition.StorageMoverJobDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StorageMoverJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageMoverJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageMoverJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StorageMoverJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference">StorageMoverJobDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentNameInput">AgentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyModeInput">CopyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPathInput">SourceSubPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectIdInput">StorageMoverProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetNameInput">TargetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPathInput">TargetSubPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentName">AgentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyMode">CopyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPath">SourceSubPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectId">StorageMoverProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetName">TargetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPath">TargetSubPath</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeouts"></a>

```go
func Timeouts() StorageMoverJobDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference">StorageMoverJobDefinitionTimeoutsOutputReference</a>

---

##### `AgentNameInput`<sup>Optional</sup> <a name="AgentNameInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentNameInput"></a>

```go
func AgentNameInput() *string
```

- *Type:* *string

---

##### `CopyModeInput`<sup>Optional</sup> <a name="CopyModeInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyModeInput"></a>

```go
func CopyModeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `SourceSubPathInput`<sup>Optional</sup> <a name="SourceSubPathInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPathInput"></a>

```go
func SourceSubPathInput() *string
```

- *Type:* *string

---

##### `StorageMoverProjectIdInput`<sup>Optional</sup> <a name="StorageMoverProjectIdInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectIdInput"></a>

```go
func StorageMoverProjectIdInput() *string
```

- *Type:* *string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetNameInput"></a>

```go
func TargetNameInput() *string
```

- *Type:* *string

---

##### `TargetSubPathInput`<sup>Optional</sup> <a name="TargetSubPathInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPathInput"></a>

```go
func TargetSubPathInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentName"></a>

```go
func AgentName() *string
```

- *Type:* *string

---

##### `CopyMode`<sup>Required</sup> <a name="CopyMode" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyMode"></a>

```go
func CopyMode() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceSubPath`<sup>Required</sup> <a name="SourceSubPath" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPath"></a>

```go
func SourceSubPath() *string
```

- *Type:* *string

---

##### `StorageMoverProjectId`<sup>Required</sup> <a name="StorageMoverProjectId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectId"></a>

```go
func StorageMoverProjectId() *string
```

- *Type:* *string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetName"></a>

```go
func TargetName() *string
```

- *Type:* *string

---

##### `TargetSubPath`<sup>Required</sup> <a name="TargetSubPath" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPath"></a>

```go
func TargetSubPath() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageMoverJobDefinitionConfig <a name="StorageMoverJobDefinitionConfig" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/storagemoverjobdefinition"

&storagemoverjobdefinition.StorageMoverJobDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CopyMode: *string,
	Name: *string,
	SourceName: *string,
	StorageMoverProjectId: *string,
	TargetName: *string,
	AgentName: *string,
	Description: *string,
	Id: *string,
	SourceSubPath: *string,
	TargetSubPath: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.copyMode">CopyMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceName">SourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.storageMoverProjectId">StorageMoverProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetName">TargetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.agentName">AgentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceSubPath">SourceSubPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetSubPath">TargetSubPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CopyMode`<sup>Required</sup> <a name="CopyMode" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.copyMode"></a>

```go
CopyMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}.

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}.

---

##### `StorageMoverProjectId`<sup>Required</sup> <a name="StorageMoverProjectId" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.storageMoverProjectId"></a>

```go
StorageMoverProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}.

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetName"></a>

```go
TargetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}.

---

##### `AgentName`<sup>Optional</sup> <a name="AgentName" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.agentName"></a>

```go
AgentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceSubPath`<sup>Optional</sup> <a name="SourceSubPath" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceSubPath"></a>

```go
SourceSubPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}.

---

##### `TargetSubPath`<sup>Optional</sup> <a name="TargetSubPath" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetSubPath"></a>

```go
TargetSubPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.timeouts"></a>

```go
Timeouts StorageMoverJobDefinitionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#timeouts StorageMoverJobDefinition#timeouts}

---

### StorageMoverJobDefinitionTimeouts <a name="StorageMoverJobDefinitionTimeouts" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/storagemoverjobdefinition"

&storagemoverjobdefinition.StorageMoverJobDefinitionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#create StorageMoverJobDefinition#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#delete StorageMoverJobDefinition#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#read StorageMoverJobDefinition#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#update StorageMoverJobDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#create StorageMoverJobDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#delete StorageMoverJobDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#read StorageMoverJobDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/storage_mover_job_definition#update StorageMoverJobDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageMoverJobDefinitionTimeoutsOutputReference <a name="StorageMoverJobDefinitionTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/storagemoverjobdefinition"

storagemoverjobdefinition.NewStorageMoverJobDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageMoverJobDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



