# `privateDnsPtrRecord` Submodule <a name="`privateDnsPtrRecord` Submodule" id="@cdktn/provider-azurerm.privateDnsPtrRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsPtrRecord <a name="PrivateDnsPtrRecord" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record azurerm_private_dns_ptr_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/privatednsptrrecord"

privatednsptrrecord.NewPrivateDnsPtrRecord(scope Construct, id *string, config PrivateDnsPtrRecordConfig) PrivateDnsPtrRecord
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig">PrivateDnsPtrRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig">PrivateDnsPtrRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.putTimeouts"></a>

```go
func PutTimeouts(value PrivateDnsPtrRecordTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts">PrivateDnsPtrRecordTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PrivateDnsPtrRecord resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/privatednsptrrecord"

privatednsptrrecord.PrivateDnsPtrRecord_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/privatednsptrrecord"

privatednsptrrecord.PrivateDnsPtrRecord_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/privatednsptrrecord"

privatednsptrrecord.PrivateDnsPtrRecord_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/privatednsptrrecord"

privatednsptrrecord.PrivateDnsPtrRecord_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PrivateDnsPtrRecord resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivateDnsPtrRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivateDnsPtrRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PrivateDnsPtrRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference">PrivateDnsPtrRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.recordsInput">RecordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.zoneNameInput">ZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.records">Records</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.timeouts"></a>

```go
func Timeouts() PrivateDnsPtrRecordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference">PrivateDnsPtrRecordTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecordsInput`<sup>Optional</sup> <a name="RecordsInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.recordsInput"></a>

```go
func RecordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.zoneNameInput"></a>

```go
func ZoneNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.records"></a>

```go
func Records() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecord.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsPtrRecordConfig <a name="PrivateDnsPtrRecordConfig" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/privatednsptrrecord"

&privatednsptrrecord.PrivateDnsPtrRecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Records: *[]*string,
	ResourceGroupName: *string,
	Ttl: *f64,
	ZoneName: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#name PrivateDnsPtrRecord#name}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.records">Records</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#records PrivateDnsPtrRecord#records}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#resource_group_name PrivateDnsPtrRecord#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#ttl PrivateDnsPtrRecord#ttl}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.zoneName">ZoneName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#zone_name PrivateDnsPtrRecord#zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#id PrivateDnsPtrRecord#id}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#tags PrivateDnsPtrRecord#tags}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts">PrivateDnsPtrRecordTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#name PrivateDnsPtrRecord#name}.

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.records"></a>

```go
Records *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#records PrivateDnsPtrRecord#records}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#resource_group_name PrivateDnsPtrRecord#resource_group_name}.

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#ttl PrivateDnsPtrRecord#ttl}.

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.zoneName"></a>

```go
ZoneName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#zone_name PrivateDnsPtrRecord#zone_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#id PrivateDnsPtrRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#tags PrivateDnsPtrRecord#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordConfig.property.timeouts"></a>

```go
Timeouts PrivateDnsPtrRecordTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts">PrivateDnsPtrRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#timeouts PrivateDnsPtrRecord#timeouts}

---

### PrivateDnsPtrRecordTimeouts <a name="PrivateDnsPtrRecordTimeouts" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/privatednsptrrecord"

&privatednsptrrecord.PrivateDnsPtrRecordTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#create PrivateDnsPtrRecord#create}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#delete PrivateDnsPtrRecord#delete}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#read PrivateDnsPtrRecord#read}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#update PrivateDnsPtrRecord#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#create PrivateDnsPtrRecord#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#delete PrivateDnsPtrRecord#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#read PrivateDnsPtrRecord#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/private_dns_ptr_record#update PrivateDnsPtrRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsPtrRecordTimeoutsOutputReference <a name="PrivateDnsPtrRecordTimeoutsOutputReference" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/privatednsptrrecord"

privatednsptrrecord.NewPrivateDnsPtrRecordTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateDnsPtrRecordTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.privateDnsPtrRecord.PrivateDnsPtrRecordTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



