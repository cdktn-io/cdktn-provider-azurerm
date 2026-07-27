# `dataFactoryLinkedServiceSqlManagedInstance` Submodule <a name="`dataFactoryLinkedServiceSqlManagedInstance` Submodule" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceSqlManagedInstance <a name="DataFactoryLinkedServiceSqlManagedInstance" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance azurerm_data_factory_linked_service_sql_managed_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

datafactorylinkedservicesqlmanagedinstance.NewDataFactoryLinkedServiceSqlManagedInstance(scope Construct, id *string, config DataFactoryLinkedServiceSqlManagedInstanceConfig) DataFactoryLinkedServiceSqlManagedInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig">DataFactoryLinkedServiceSqlManagedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig">DataFactoryLinkedServiceSqlManagedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultConnectionString">PutKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultPassword">PutKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetKeyVaultConnectionString">ResetKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetKeyVaultPassword">ResetKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetServicePrincipalId">ResetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetServicePrincipalKey">ResetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetTenant">ResetTenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyVaultConnectionString` <a name="PutKeyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultConnectionString"></a>

```go
func PutKeyVaultConnectionString(value DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultConnectionString.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a>

---

##### `PutKeyVaultPassword` <a name="PutKeyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultPassword"></a>

```go
func PutKeyVaultPassword(value DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putKeyVaultPassword.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryLinkedServiceSqlManagedInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetIntegrationRuntimeName"></a>

```go
func ResetIntegrationRuntimeName()
```

##### `ResetKeyVaultConnectionString` <a name="ResetKeyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetKeyVaultConnectionString"></a>

```go
func ResetKeyVaultConnectionString()
```

##### `ResetKeyVaultPassword` <a name="ResetKeyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetKeyVaultPassword"></a>

```go
func ResetKeyVaultPassword()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetServicePrincipalId` <a name="ResetServicePrincipalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetServicePrincipalId"></a>

```go
func ResetServicePrincipalId()
```

##### `ResetServicePrincipalKey` <a name="ResetServicePrincipalKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetServicePrincipalKey"></a>

```go
func ResetServicePrincipalKey()
```

##### `ResetTenant` <a name="ResetTenant" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetTenant"></a>

```go
func ResetTenant()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryLinkedServiceSqlManagedInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

datafactorylinkedservicesqlmanagedinstance.DataFactoryLinkedServiceSqlManagedInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

datafactorylinkedservicesqlmanagedinstance.DataFactoryLinkedServiceSqlManagedInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

datafactorylinkedservicesqlmanagedinstance.DataFactoryLinkedServiceSqlManagedInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

datafactorylinkedservicesqlmanagedinstance.DataFactoryLinkedServiceSqlManagedInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataFactoryLinkedServiceSqlManagedInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryLinkedServiceSqlManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryLinkedServiceSqlManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceSqlManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultConnectionString">KeyVaultConnectionString</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference">DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultConnectionStringInput">KeyVaultConnectionStringInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultPasswordInput">KeyVaultPasswordInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalKeyInput">ServicePrincipalKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultConnectionString`<sup>Required</sup> <a name="KeyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultConnectionString"></a>

```go
func KeyVaultConnectionString() DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference</a>

---

##### `KeyVaultPassword`<sup>Required</sup> <a name="KeyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultPassword"></a>

```go
func KeyVaultPassword() DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.timeouts"></a>

```go
func Timeouts() DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference">DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.integrationRuntimeNameInput"></a>

```go
func IntegrationRuntimeNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultConnectionStringInput`<sup>Optional</sup> <a name="KeyVaultConnectionStringInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultConnectionStringInput"></a>

```go
func KeyVaultConnectionStringInput() DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a>

---

##### `KeyVaultPasswordInput`<sup>Optional</sup> <a name="KeyVaultPasswordInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.keyVaultPasswordInput"></a>

```go
func KeyVaultPasswordInput() DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalKeyInput`<sup>Optional</sup> <a name="ServicePrincipalKeyInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalKeyInput"></a>

```go
func ServicePrincipalKeyInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.integrationRuntimeName"></a>

```go
func IntegrationRuntimeName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *string
```

- *Type:* *string

---

##### `ServicePrincipalKey`<sup>Required</sup> <a name="ServicePrincipalKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.servicePrincipalKey"></a>

```go
func ServicePrincipalKey() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceSqlManagedInstanceConfig <a name="DataFactoryLinkedServiceSqlManagedInstanceConfig" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

&datafactorylinkedservicesqlmanagedinstance.DataFactoryLinkedServiceSqlManagedInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Name: *string,
	Annotations: *[]*string,
	ConnectionString: *string,
	Description: *string,
	Id: *string,
	IntegrationRuntimeName: *string,
	KeyVaultConnectionString: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString,
	KeyVaultPassword: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword,
	Parameters: *map[string]*string,
	ServicePrincipalId: *string,
	ServicePrincipalKey: *string,
	Tenant: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#data_factory_id DataFactoryLinkedServiceSqlManagedInstance#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#name DataFactoryLinkedServiceSqlManagedInstance#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#annotations DataFactoryLinkedServiceSqlManagedInstance#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#connection_string DataFactoryLinkedServiceSqlManagedInstance#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#description DataFactoryLinkedServiceSqlManagedInstance#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#id DataFactoryLinkedServiceSqlManagedInstance#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#integration_runtime_name DataFactoryLinkedServiceSqlManagedInstance#integration_runtime_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.keyVaultConnectionString">KeyVaultConnectionString</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a></code> | key_vault_connection_string block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#parameters DataFactoryLinkedServiceSqlManagedInstance#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#service_principal_id DataFactoryLinkedServiceSqlManagedInstance#service_principal_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#service_principal_key DataFactoryLinkedServiceSqlManagedInstance#service_principal_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.tenant">Tenant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#tenant DataFactoryLinkedServiceSqlManagedInstance#tenant}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#data_factory_id DataFactoryLinkedServiceSqlManagedInstance#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#name DataFactoryLinkedServiceSqlManagedInstance#name}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#annotations DataFactoryLinkedServiceSqlManagedInstance#annotations}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#connection_string DataFactoryLinkedServiceSqlManagedInstance#connection_string}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#description DataFactoryLinkedServiceSqlManagedInstance#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#id DataFactoryLinkedServiceSqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.integrationRuntimeName"></a>

```go
IntegrationRuntimeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#integration_runtime_name DataFactoryLinkedServiceSqlManagedInstance#integration_runtime_name}.

---

##### `KeyVaultConnectionString`<sup>Optional</sup> <a name="KeyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.keyVaultConnectionString"></a>

```go
KeyVaultConnectionString DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a>

key_vault_connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#key_vault_connection_string DataFactoryLinkedServiceSqlManagedInstance#key_vault_connection_string}

---

##### `KeyVaultPassword`<sup>Optional</sup> <a name="KeyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.keyVaultPassword"></a>

```go
KeyVaultPassword DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#key_vault_password DataFactoryLinkedServiceSqlManagedInstance#key_vault_password}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#parameters DataFactoryLinkedServiceSqlManagedInstance#parameters}.

---

##### `ServicePrincipalId`<sup>Optional</sup> <a name="ServicePrincipalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.servicePrincipalId"></a>

```go
ServicePrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#service_principal_id DataFactoryLinkedServiceSqlManagedInstance#service_principal_id}.

---

##### `ServicePrincipalKey`<sup>Optional</sup> <a name="ServicePrincipalKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.servicePrincipalKey"></a>

```go
ServicePrincipalKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#service_principal_key DataFactoryLinkedServiceSqlManagedInstance#service_principal_key}.

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#tenant DataFactoryLinkedServiceSqlManagedInstance#tenant}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceConfig.property.timeouts"></a>

```go
Timeouts DataFactoryLinkedServiceSqlManagedInstanceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts">DataFactoryLinkedServiceSqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#timeouts DataFactoryLinkedServiceSqlManagedInstance#timeouts}

---

### DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString <a name="DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

&datafactorylinkedservicesqlmanagedinstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString {
	LinkedServiceName: *string,
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#linked_service_name DataFactoryLinkedServiceSqlManagedInstance#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#secret_name DataFactoryLinkedServiceSqlManagedInstance#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#linked_service_name DataFactoryLinkedServiceSqlManagedInstance#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#secret_name DataFactoryLinkedServiceSqlManagedInstance#secret_name}.

---

### DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword <a name="DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

&datafactorylinkedservicesqlmanagedinstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword {
	LinkedServiceName: *string,
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#linked_service_name DataFactoryLinkedServiceSqlManagedInstance#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#secret_name DataFactoryLinkedServiceSqlManagedInstance#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#linked_service_name DataFactoryLinkedServiceSqlManagedInstance#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#secret_name DataFactoryLinkedServiceSqlManagedInstance#secret_name}.

---

### DataFactoryLinkedServiceSqlManagedInstanceTimeouts <a name="DataFactoryLinkedServiceSqlManagedInstanceTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

&datafactorylinkedservicesqlmanagedinstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#create DataFactoryLinkedServiceSqlManagedInstance#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#delete DataFactoryLinkedServiceSqlManagedInstance#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#read DataFactoryLinkedServiceSqlManagedInstance#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#update DataFactoryLinkedServiceSqlManagedInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#create DataFactoryLinkedServiceSqlManagedInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#delete DataFactoryLinkedServiceSqlManagedInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#read DataFactoryLinkedServiceSqlManagedInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/data_factory_linked_service_sql_managed_instance#update DataFactoryLinkedServiceSqlManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference <a name="DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

datafactorylinkedservicesqlmanagedinstance.NewDataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultConnectionString</a>

---


### DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

datafactorylinkedservicesqlmanagedinstance.NewDataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword">DataFactoryLinkedServiceSqlManagedInstanceKeyVaultPassword</a>

---


### DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference <a name="DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactorylinkedservicesqlmanagedinstance"

datafactorylinkedservicesqlmanagedinstance.NewDataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceSqlManagedInstance.DataFactoryLinkedServiceSqlManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



