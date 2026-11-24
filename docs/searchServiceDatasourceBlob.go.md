# `searchServiceDatasourceBlob` Submodule <a name="`searchServiceDatasourceBlob` Submodule" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchServiceDatasourceBlob <a name="SearchServiceDatasourceBlob" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob azurerm_search_service_datasource_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

searchservicedatasourceblob.NewSearchServiceDatasourceBlob(scope Construct, id *string, config SearchServiceDatasourceBlobConfig) SearchServiceDatasourceBlob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig">SearchServiceDatasourceBlobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig">SearchServiceDatasourceBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery">ResetContainerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName">ResetSoftDeleteColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue">ResetSoftDeleteMarkerValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey"></a>

```go
func PutEncryptionKey(value SearchServiceDatasourceBlobEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts"></a>

```go
func PutTimeouts(value SearchServiceDatasourceBlobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---

##### `ResetContainerQuery` <a name="ResetContainerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery"></a>

```go
func ResetContainerQuery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId"></a>

```go
func ResetId()
```

##### `ResetSoftDeleteColumnName` <a name="ResetSoftDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName"></a>

```go
func ResetSoftDeleteColumnName()
```

##### `ResetSoftDeleteMarkerValue` <a name="ResetSoftDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue"></a>

```go
func ResetSoftDeleteMarkerValue()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

searchservicedatasourceblob.SearchServiceDatasourceBlob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

searchservicedatasourceblob.SearchServiceDatasourceBlob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

searchservicedatasourceblob.SearchServiceDatasourceBlob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

searchservicedatasourceblob.SearchServiceDatasourceBlob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SearchServiceDatasourceBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SearchServiceDatasourceBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SearchServiceDatasourceBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput">ConnectionStringWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput">ConnectionStringWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput">ContainerQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput">SearchServiceEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput">SoftDeleteColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput">SoftDeleteMarkerValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo">ConnectionStringWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion">ConnectionStringWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery">ContainerQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint">SearchServiceEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName">SoftDeleteColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue">SoftDeleteMarkerValue</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey"></a>

```go
func EncryptionKey() SearchServiceDatasourceBlobEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts"></a>

```go
func Timeouts() SearchServiceDatasourceBlobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a>

---

##### `ConnectionStringWoInput`<sup>Optional</sup> <a name="ConnectionStringWoInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput"></a>

```go
func ConnectionStringWoInput() *string
```

- *Type:* *string

---

##### `ConnectionStringWoVersionInput`<sup>Optional</sup> <a name="ConnectionStringWoVersionInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput"></a>

```go
func ConnectionStringWoVersionInput() *f64
```

- *Type:* *f64

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `ContainerQueryInput`<sup>Optional</sup> <a name="ContainerQueryInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput"></a>

```go
func ContainerQueryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() SearchServiceDatasourceBlobEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SearchServiceEndpointInput`<sup>Optional</sup> <a name="SearchServiceEndpointInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput"></a>

```go
func SearchServiceEndpointInput() *string
```

- *Type:* *string

---

##### `SoftDeleteColumnNameInput`<sup>Optional</sup> <a name="SoftDeleteColumnNameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput"></a>

```go
func SoftDeleteColumnNameInput() *string
```

- *Type:* *string

---

##### `SoftDeleteMarkerValueInput`<sup>Optional</sup> <a name="SoftDeleteMarkerValueInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput"></a>

```go
func SoftDeleteMarkerValueInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### ~~`ConnectionStringWo`~~<sup>Required</sup> <a name="ConnectionStringWo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func ConnectionStringWo() *string
```

- *Type:* *string

---

##### `ConnectionStringWoVersion`<sup>Required</sup> <a name="ConnectionStringWoVersion" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion"></a>

```go
func ConnectionStringWoVersion() *f64
```

- *Type:* *f64

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `ContainerQuery`<sup>Required</sup> <a name="ContainerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery"></a>

```go
func ContainerQuery() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SearchServiceEndpoint`<sup>Required</sup> <a name="SearchServiceEndpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint"></a>

```go
func SearchServiceEndpoint() *string
```

- *Type:* *string

---

##### `SoftDeleteColumnName`<sup>Required</sup> <a name="SoftDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName"></a>

```go
func SoftDeleteColumnName() *string
```

- *Type:* *string

---

##### `SoftDeleteMarkerValue`<sup>Required</sup> <a name="SoftDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue"></a>

```go
func SoftDeleteMarkerValue() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchServiceDatasourceBlobConfig <a name="SearchServiceDatasourceBlobConfig" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

&searchservicedatasourceblob.SearchServiceDatasourceBlobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionStringWo: *string,
	ConnectionStringWoVersion: *f64,
	ContainerName: *string,
	Name: *string,
	SearchServiceEndpoint: *string,
	ContainerQuery: *string,
	Description: *string,
	EncryptionKey: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey,
	Id: *string,
	SoftDeleteColumnName: *string,
	SoftDeleteMarkerValue: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo">ConnectionStringWo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion">ConnectionStringWoVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint">SearchServiceEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery">ContainerQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName">SoftDeleteColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue">SoftDeleteMarkerValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionStringWo`<sup>Required</sup> <a name="ConnectionStringWo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo"></a>

```go
ConnectionStringWo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}.

---

##### `ConnectionStringWoVersion`<sup>Required</sup> <a name="ConnectionStringWoVersion" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion"></a>

```go
ConnectionStringWoVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}.

---

##### `SearchServiceEndpoint`<sup>Required</sup> <a name="SearchServiceEndpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint"></a>

```go
SearchServiceEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}.

---

##### `ContainerQuery`<sup>Optional</sup> <a name="ContainerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery"></a>

```go
ContainerQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}.

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey"></a>

```go
EncryptionKey SearchServiceDatasourceBlobEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#encryption_key SearchServiceDatasourceBlob#encryption_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SoftDeleteColumnName`<sup>Optional</sup> <a name="SoftDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName"></a>

```go
SoftDeleteColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}.

---

##### `SoftDeleteMarkerValue`<sup>Optional</sup> <a name="SoftDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue"></a>

```go
SoftDeleteMarkerValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts"></a>

```go
Timeouts SearchServiceDatasourceBlobTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#timeouts SearchServiceDatasourceBlob#timeouts}

---

### SearchServiceDatasourceBlobEncryptionKey <a name="SearchServiceDatasourceBlobEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

&searchservicedatasourceblob.SearchServiceDatasourceBlobEncryptionKey {
	KeyVaultKeyId: *string,
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}. |

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}.

---

### SearchServiceDatasourceBlobTimeouts <a name="SearchServiceDatasourceBlobTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

&searchservicedatasourceblob.SearchServiceDatasourceBlobTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchServiceDatasourceBlobEncryptionKeyOutputReference <a name="SearchServiceDatasourceBlobEncryptionKeyOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

searchservicedatasourceblob.NewSearchServiceDatasourceBlobEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SearchServiceDatasourceBlobEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() SearchServiceDatasourceBlobEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---


### SearchServiceDatasourceBlobTimeoutsOutputReference <a name="SearchServiceDatasourceBlobTimeoutsOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/searchservicedatasourceblob"

searchservicedatasourceblob.NewSearchServiceDatasourceBlobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SearchServiceDatasourceBlobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



