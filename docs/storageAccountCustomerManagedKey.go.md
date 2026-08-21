# `storageAccountCustomerManagedKey` Submodule <a name="`storageAccountCustomerManagedKey` Submodule" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountCustomerManagedKeyA <a name="StorageAccountCustomerManagedKeyA" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key azurerm_storage_account_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountcustomermanagedkey"

storageaccountcustomermanagedkey.NewStorageAccountCustomerManagedKeyA(scope Construct, id *string, config StorageAccountCustomerManagedKeyAConfig) StorageAccountCustomerManagedKeyA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig">StorageAccountCustomerManagedKeyAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig">StorageAccountCustomerManagedKeyAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetFederatedIdentityClientId">ResetFederatedIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.putTimeouts"></a>

```go
func PutTimeouts(value StorageAccountCustomerManagedKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

---

##### `ResetFederatedIdentityClientId` <a name="ResetFederatedIdentityClientId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetFederatedIdentityClientId"></a>

```go
func ResetFederatedIdentityClientId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetUserAssignedIdentityId"></a>

```go
func ResetUserAssignedIdentityId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageAccountCustomerManagedKeyA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountcustomermanagedkey"

storageaccountcustomermanagedkey.StorageAccountCustomerManagedKeyA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountcustomermanagedkey"

storageaccountcustomermanagedkey.StorageAccountCustomerManagedKeyA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountcustomermanagedkey"

storageaccountcustomermanagedkey.StorageAccountCustomerManagedKeyA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountcustomermanagedkey"

storageaccountcustomermanagedkey.StorageAccountCustomerManagedKeyA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StorageAccountCustomerManagedKeyA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageAccountCustomerManagedKeyA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageAccountCustomerManagedKeyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StorageAccountCustomerManagedKeyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference">StorageAccountCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientIdInput">FederatedIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientId">FederatedIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeouts"></a>

```go
func Timeouts() StorageAccountCustomerManagedKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference">StorageAccountCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `FederatedIdentityClientIdInput`<sup>Optional</sup> <a name="FederatedIdentityClientIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientIdInput"></a>

```go
func FederatedIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityIdInput"></a>

```go
func UserAssignedIdentityIdInput() *string
```

- *Type:* *string

---

##### `FederatedIdentityClientId`<sup>Required</sup> <a name="FederatedIdentityClientId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientId"></a>

```go
func FederatedIdentityClientId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountCustomerManagedKeyAConfig <a name="StorageAccountCustomerManagedKeyAConfig" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountcustomermanagedkey"

&storageaccountcustomermanagedkey.StorageAccountCustomerManagedKeyAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KeyVaultKeyId: *string,
	StorageAccountId: *string,
	FederatedIdentityClientId: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts,
	UserAssignedIdentityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#key_vault_key_id StorageAccountCustomerManagedKeyA#key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#storage_account_id StorageAccountCustomerManagedKeyA#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.federatedIdentityClientId">FederatedIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#federated_identity_client_id StorageAccountCustomerManagedKeyA#federated_identity_client_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#id StorageAccountCustomerManagedKeyA#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#user_assigned_identity_id StorageAccountCustomerManagedKeyA#user_assigned_identity_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#key_vault_key_id StorageAccountCustomerManagedKeyA#key_vault_key_id}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#storage_account_id StorageAccountCustomerManagedKeyA#storage_account_id}.

---

##### `FederatedIdentityClientId`<sup>Optional</sup> <a name="FederatedIdentityClientId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.federatedIdentityClientId"></a>

```go
FederatedIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#federated_identity_client_id StorageAccountCustomerManagedKeyA#federated_identity_client_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#id StorageAccountCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.timeouts"></a>

```go
Timeouts StorageAccountCustomerManagedKeyTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#timeouts StorageAccountCustomerManagedKeyA#timeouts}

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.userAssignedIdentityId"></a>

```go
UserAssignedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#user_assigned_identity_id StorageAccountCustomerManagedKeyA#user_assigned_identity_id}.

---

### StorageAccountCustomerManagedKeyTimeouts <a name="StorageAccountCustomerManagedKeyTimeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountcustomermanagedkey"

&storageaccountcustomermanagedkey.StorageAccountCustomerManagedKeyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#create StorageAccountCustomerManagedKeyA#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#delete StorageAccountCustomerManagedKeyA#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#read StorageAccountCustomerManagedKeyA#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#update StorageAccountCustomerManagedKeyA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#create StorageAccountCustomerManagedKeyA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#delete StorageAccountCustomerManagedKeyA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#read StorageAccountCustomerManagedKeyA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_customer_managed_key#update StorageAccountCustomerManagedKeyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountCustomerManagedKeyTimeoutsOutputReference <a name="StorageAccountCustomerManagedKeyTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountcustomermanagedkey"

storageaccountcustomermanagedkey.NewStorageAccountCustomerManagedKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountCustomerManagedKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



