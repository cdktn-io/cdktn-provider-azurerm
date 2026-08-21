# `resourceProviderFeatureRegistration` Submodule <a name="`resourceProviderFeatureRegistration` Submodule" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceProviderFeatureRegistration <a name="ResourceProviderFeatureRegistration" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration azurerm_resource_provider_feature_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/resourceproviderfeatureregistration"

resourceproviderfeatureregistration.NewResourceProviderFeatureRegistration(scope Construct, id *string, config ResourceProviderFeatureRegistrationConfig) ResourceProviderFeatureRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig">ResourceProviderFeatureRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig">ResourceProviderFeatureRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts"></a>

```go
func PutTimeouts(value ResourceProviderFeatureRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceProviderFeatureRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/resourceproviderfeatureregistration"

resourceproviderfeatureregistration.ResourceProviderFeatureRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/resourceproviderfeatureregistration"

resourceproviderfeatureregistration.ResourceProviderFeatureRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/resourceproviderfeatureregistration"

resourceproviderfeatureregistration.ResourceProviderFeatureRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/resourceproviderfeatureregistration"

resourceproviderfeatureregistration.ResourceProviderFeatureRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ResourceProviderFeatureRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceProviderFeatureRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceProviderFeatureRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ResourceProviderFeatureRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference">ResourceProviderFeatureRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeouts"></a>

```go
func Timeouts() ResourceProviderFeatureRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference">ResourceProviderFeatureRegistrationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceProviderFeatureRegistrationConfig <a name="ResourceProviderFeatureRegistrationConfig" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/resourceproviderfeatureregistration"

&resourceproviderfeatureregistration.ResourceProviderFeatureRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}.

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.timeouts"></a>

```go
Timeouts ResourceProviderFeatureRegistrationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#timeouts ResourceProviderFeatureRegistration#timeouts}

---

### ResourceProviderFeatureRegistrationTimeouts <a name="ResourceProviderFeatureRegistrationTimeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/resourceproviderfeatureregistration"

&resourceproviderfeatureregistration.ResourceProviderFeatureRegistrationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#create ResourceProviderFeatureRegistration#create}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#delete ResourceProviderFeatureRegistration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#read ResourceProviderFeatureRegistration#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#create ResourceProviderFeatureRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#delete ResourceProviderFeatureRegistration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_provider_feature_registration#read ResourceProviderFeatureRegistration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceProviderFeatureRegistrationTimeoutsOutputReference <a name="ResourceProviderFeatureRegistrationTimeoutsOutputReference" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/resourceproviderfeatureregistration"

resourceproviderfeatureregistration.NewResourceProviderFeatureRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceProviderFeatureRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



