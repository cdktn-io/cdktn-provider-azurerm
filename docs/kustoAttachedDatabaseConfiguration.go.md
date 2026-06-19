# `kustoAttachedDatabaseConfiguration` Submodule <a name="`kustoAttachedDatabaseConfiguration` Submodule" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoAttachedDatabaseConfiguration <a name="KustoAttachedDatabaseConfiguration" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration azurerm_kusto_attached_database_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

kustoattacheddatabaseconfiguration.NewKustoAttachedDatabaseConfiguration(scope Construct, id *string, config KustoAttachedDatabaseConfigurationConfig) KustoAttachedDatabaseConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig">KustoAttachedDatabaseConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig">KustoAttachedDatabaseConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putSharing">PutSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetClusterResourceId">ResetClusterResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDatabaseNameOverride">ResetDatabaseNameOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDatabaseNamePrefix">ResetDatabaseNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDefaultPrincipalModificationKind">ResetDefaultPrincipalModificationKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetSharing">ResetSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSharing` <a name="PutSharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putSharing"></a>

```go
func PutSharing(value KustoAttachedDatabaseConfigurationSharing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putSharing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value KustoAttachedDatabaseConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a>

---

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetClusterResourceId` <a name="ResetClusterResourceId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetClusterResourceId"></a>

```go
func ResetClusterResourceId()
```

##### `ResetDatabaseNameOverride` <a name="ResetDatabaseNameOverride" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDatabaseNameOverride"></a>

```go
func ResetDatabaseNameOverride()
```

##### `ResetDatabaseNamePrefix` <a name="ResetDatabaseNamePrefix" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDatabaseNamePrefix"></a>

```go
func ResetDatabaseNamePrefix()
```

##### `ResetDefaultPrincipalModificationKind` <a name="ResetDefaultPrincipalModificationKind" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDefaultPrincipalModificationKind"></a>

```go
func ResetDefaultPrincipalModificationKind()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetSharing` <a name="ResetSharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetSharing"></a>

```go
func ResetSharing()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KustoAttachedDatabaseConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

kustoattacheddatabaseconfiguration.KustoAttachedDatabaseConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

kustoattacheddatabaseconfiguration.KustoAttachedDatabaseConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

kustoattacheddatabaseconfiguration.KustoAttachedDatabaseConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

kustoattacheddatabaseconfiguration.KustoAttachedDatabaseConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KustoAttachedDatabaseConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KustoAttachedDatabaseConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KustoAttachedDatabaseConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KustoAttachedDatabaseConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.attachedDatabaseNames">AttachedDatabaseNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharing">Sharing</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference">KustoAttachedDatabaseConfigurationSharingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference">KustoAttachedDatabaseConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterResourceIdInput">ClusterResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameOverrideInput">DatabaseNameOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNamePrefixInput">DatabaseNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKindInput">DefaultPrincipalModificationKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharingInput">SharingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterResourceId">ClusterResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameOverride">DatabaseNameOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNamePrefix">DatabaseNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKind">DefaultPrincipalModificationKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachedDatabaseNames`<sup>Required</sup> <a name="AttachedDatabaseNames" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.attachedDatabaseNames"></a>

```go
func AttachedDatabaseNames() *[]*string
```

- *Type:* *[]*string

---

##### `Sharing`<sup>Required</sup> <a name="Sharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharing"></a>

```go
func Sharing() KustoAttachedDatabaseConfigurationSharingOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference">KustoAttachedDatabaseConfigurationSharingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeouts"></a>

```go
func Timeouts() KustoAttachedDatabaseConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference">KustoAttachedDatabaseConfigurationTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ClusterResourceIdInput`<sup>Optional</sup> <a name="ClusterResourceIdInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterResourceIdInput"></a>

```go
func ClusterResourceIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameOverrideInput`<sup>Optional</sup> <a name="DatabaseNameOverrideInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameOverrideInput"></a>

```go
func DatabaseNameOverrideInput() *string
```

- *Type:* *string

---

##### `DatabaseNamePrefixInput`<sup>Optional</sup> <a name="DatabaseNamePrefixInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNamePrefixInput"></a>

```go
func DatabaseNamePrefixInput() *string
```

- *Type:* *string

---

##### `DefaultPrincipalModificationKindInput`<sup>Optional</sup> <a name="DefaultPrincipalModificationKindInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKindInput"></a>

```go
func DefaultPrincipalModificationKindInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SharingInput`<sup>Optional</sup> <a name="SharingInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharingInput"></a>

```go
func SharingInput() KustoAttachedDatabaseConfigurationSharing
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ClusterResourceId`<sup>Required</sup> <a name="ClusterResourceId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterResourceId"></a>

```go
func ClusterResourceId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabaseNameOverride`<sup>Required</sup> <a name="DatabaseNameOverride" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameOverride"></a>

```go
func DatabaseNameOverride() *string
```

- *Type:* *string

---

##### `DatabaseNamePrefix`<sup>Required</sup> <a name="DatabaseNamePrefix" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNamePrefix"></a>

```go
func DatabaseNamePrefix() *string
```

- *Type:* *string

---

##### `DefaultPrincipalModificationKind`<sup>Required</sup> <a name="DefaultPrincipalModificationKind" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKind"></a>

```go
func DefaultPrincipalModificationKind() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoAttachedDatabaseConfigurationConfig <a name="KustoAttachedDatabaseConfigurationConfig" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

&kustoattacheddatabaseconfiguration.KustoAttachedDatabaseConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	DatabaseName: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	ClusterId: *string,
	ClusterResourceId: *string,
	DatabaseNameOverride: *string,
	DatabaseNamePrefix: *string,
	DefaultPrincipalModificationKind: *string,
	Id: *string,
	Sharing: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#cluster_name KustoAttachedDatabaseConfiguration#cluster_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#database_name KustoAttachedDatabaseConfiguration#database_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#location KustoAttachedDatabaseConfiguration#location}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#name KustoAttachedDatabaseConfiguration#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#resource_group_name KustoAttachedDatabaseConfiguration#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#cluster_id KustoAttachedDatabaseConfiguration#cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterResourceId">ClusterResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#cluster_resource_id KustoAttachedDatabaseConfiguration#cluster_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseNameOverride">DatabaseNameOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#database_name_override KustoAttachedDatabaseConfiguration#database_name_override}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseNamePrefix">DatabaseNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#database_name_prefix KustoAttachedDatabaseConfiguration#database_name_prefix}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.defaultPrincipalModificationKind">DefaultPrincipalModificationKind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#default_principal_modification_kind KustoAttachedDatabaseConfiguration#default_principal_modification_kind}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#id KustoAttachedDatabaseConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.sharing">Sharing</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a></code> | sharing block. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#cluster_name KustoAttachedDatabaseConfiguration#cluster_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#database_name KustoAttachedDatabaseConfiguration#database_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#location KustoAttachedDatabaseConfiguration#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#name KustoAttachedDatabaseConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#resource_group_name KustoAttachedDatabaseConfiguration#resource_group_name}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#cluster_id KustoAttachedDatabaseConfiguration#cluster_id}.

---

##### `ClusterResourceId`<sup>Optional</sup> <a name="ClusterResourceId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterResourceId"></a>

```go
ClusterResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#cluster_resource_id KustoAttachedDatabaseConfiguration#cluster_resource_id}.

---

##### `DatabaseNameOverride`<sup>Optional</sup> <a name="DatabaseNameOverride" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseNameOverride"></a>

```go
DatabaseNameOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#database_name_override KustoAttachedDatabaseConfiguration#database_name_override}.

---

##### `DatabaseNamePrefix`<sup>Optional</sup> <a name="DatabaseNamePrefix" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseNamePrefix"></a>

```go
DatabaseNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#database_name_prefix KustoAttachedDatabaseConfiguration#database_name_prefix}.

---

##### `DefaultPrincipalModificationKind`<sup>Optional</sup> <a name="DefaultPrincipalModificationKind" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.defaultPrincipalModificationKind"></a>

```go
DefaultPrincipalModificationKind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#default_principal_modification_kind KustoAttachedDatabaseConfiguration#default_principal_modification_kind}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#id KustoAttachedDatabaseConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sharing`<sup>Optional</sup> <a name="Sharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.sharing"></a>

```go
Sharing KustoAttachedDatabaseConfigurationSharing
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

sharing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#sharing KustoAttachedDatabaseConfiguration#sharing}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.timeouts"></a>

```go
Timeouts KustoAttachedDatabaseConfigurationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#timeouts KustoAttachedDatabaseConfiguration#timeouts}

---

### KustoAttachedDatabaseConfigurationSharing <a name="KustoAttachedDatabaseConfigurationSharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

&kustoattacheddatabaseconfiguration.KustoAttachedDatabaseConfigurationSharing {
	ExternalTablesToExclude: *[]*string,
	ExternalTablesToInclude: *[]*string,
	FunctionsToExclude: *[]*string,
	FunctionsToInclude: *[]*string,
	MaterializedViewsToExclude: *[]*string,
	MaterializedViewsToInclude: *[]*string,
	TablesToExclude: *[]*string,
	TablesToInclude: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToExclude">ExternalTablesToExclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#external_tables_to_exclude KustoAttachedDatabaseConfiguration#external_tables_to_exclude}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToInclude">ExternalTablesToInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#external_tables_to_include KustoAttachedDatabaseConfiguration#external_tables_to_include}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.functionsToExclude">FunctionsToExclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#functions_to_exclude KustoAttachedDatabaseConfiguration#functions_to_exclude}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.functionsToInclude">FunctionsToInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#functions_to_include KustoAttachedDatabaseConfiguration#functions_to_include}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToExclude">MaterializedViewsToExclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_exclude KustoAttachedDatabaseConfiguration#materialized_views_to_exclude}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToInclude">MaterializedViewsToInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_include KustoAttachedDatabaseConfiguration#materialized_views_to_include}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToExclude">TablesToExclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#tables_to_exclude KustoAttachedDatabaseConfiguration#tables_to_exclude}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToInclude">TablesToInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#tables_to_include KustoAttachedDatabaseConfiguration#tables_to_include}. |

---

##### `ExternalTablesToExclude`<sup>Optional</sup> <a name="ExternalTablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToExclude"></a>

```go
ExternalTablesToExclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#external_tables_to_exclude KustoAttachedDatabaseConfiguration#external_tables_to_exclude}.

---

##### `ExternalTablesToInclude`<sup>Optional</sup> <a name="ExternalTablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToInclude"></a>

```go
ExternalTablesToInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#external_tables_to_include KustoAttachedDatabaseConfiguration#external_tables_to_include}.

---

##### `FunctionsToExclude`<sup>Optional</sup> <a name="FunctionsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.functionsToExclude"></a>

```go
FunctionsToExclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#functions_to_exclude KustoAttachedDatabaseConfiguration#functions_to_exclude}.

---

##### `FunctionsToInclude`<sup>Optional</sup> <a name="FunctionsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.functionsToInclude"></a>

```go
FunctionsToInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#functions_to_include KustoAttachedDatabaseConfiguration#functions_to_include}.

---

##### `MaterializedViewsToExclude`<sup>Optional</sup> <a name="MaterializedViewsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToExclude"></a>

```go
MaterializedViewsToExclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_exclude KustoAttachedDatabaseConfiguration#materialized_views_to_exclude}.

---

##### `MaterializedViewsToInclude`<sup>Optional</sup> <a name="MaterializedViewsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToInclude"></a>

```go
MaterializedViewsToInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_include KustoAttachedDatabaseConfiguration#materialized_views_to_include}.

---

##### `TablesToExclude`<sup>Optional</sup> <a name="TablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToExclude"></a>

```go
TablesToExclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#tables_to_exclude KustoAttachedDatabaseConfiguration#tables_to_exclude}.

---

##### `TablesToInclude`<sup>Optional</sup> <a name="TablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToInclude"></a>

```go
TablesToInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#tables_to_include KustoAttachedDatabaseConfiguration#tables_to_include}.

---

### KustoAttachedDatabaseConfigurationTimeouts <a name="KustoAttachedDatabaseConfigurationTimeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

&kustoattacheddatabaseconfiguration.KustoAttachedDatabaseConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#create KustoAttachedDatabaseConfiguration#create}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#delete KustoAttachedDatabaseConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#read KustoAttachedDatabaseConfiguration#read}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#update KustoAttachedDatabaseConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#create KustoAttachedDatabaseConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#delete KustoAttachedDatabaseConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#read KustoAttachedDatabaseConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_attached_database_configuration#update KustoAttachedDatabaseConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoAttachedDatabaseConfigurationSharingOutputReference <a name="KustoAttachedDatabaseConfigurationSharingOutputReference" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

kustoattacheddatabaseconfiguration.NewKustoAttachedDatabaseConfigurationSharingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KustoAttachedDatabaseConfigurationSharingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToExclude">ResetExternalTablesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToInclude">ResetExternalTablesToInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetFunctionsToExclude">ResetFunctionsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetFunctionsToInclude">ResetFunctionsToInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToExclude">ResetMaterializedViewsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToInclude">ResetMaterializedViewsToInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToExclude">ResetTablesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToInclude">ResetTablesToInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalTablesToExclude` <a name="ResetExternalTablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToExclude"></a>

```go
func ResetExternalTablesToExclude()
```

##### `ResetExternalTablesToInclude` <a name="ResetExternalTablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToInclude"></a>

```go
func ResetExternalTablesToInclude()
```

##### `ResetFunctionsToExclude` <a name="ResetFunctionsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetFunctionsToExclude"></a>

```go
func ResetFunctionsToExclude()
```

##### `ResetFunctionsToInclude` <a name="ResetFunctionsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetFunctionsToInclude"></a>

```go
func ResetFunctionsToInclude()
```

##### `ResetMaterializedViewsToExclude` <a name="ResetMaterializedViewsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToExclude"></a>

```go
func ResetMaterializedViewsToExclude()
```

##### `ResetMaterializedViewsToInclude` <a name="ResetMaterializedViewsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToInclude"></a>

```go
func ResetMaterializedViewsToInclude()
```

##### `ResetTablesToExclude` <a name="ResetTablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToExclude"></a>

```go
func ResetTablesToExclude()
```

##### `ResetTablesToInclude` <a name="ResetTablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToInclude"></a>

```go
func ResetTablesToInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExcludeInput">ExternalTablesToExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToIncludeInput">ExternalTablesToIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToExcludeInput">FunctionsToExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToIncludeInput">FunctionsToIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExcludeInput">MaterializedViewsToExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToIncludeInput">MaterializedViewsToIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExcludeInput">TablesToExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToIncludeInput">TablesToIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExclude">ExternalTablesToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToInclude">ExternalTablesToInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToExclude">FunctionsToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToInclude">FunctionsToInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExclude">MaterializedViewsToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToInclude">MaterializedViewsToInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExclude">TablesToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToInclude">TablesToInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalTablesToExcludeInput`<sup>Optional</sup> <a name="ExternalTablesToExcludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExcludeInput"></a>

```go
func ExternalTablesToExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalTablesToIncludeInput`<sup>Optional</sup> <a name="ExternalTablesToIncludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToIncludeInput"></a>

```go
func ExternalTablesToIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionsToExcludeInput`<sup>Optional</sup> <a name="FunctionsToExcludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToExcludeInput"></a>

```go
func FunctionsToExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionsToIncludeInput`<sup>Optional</sup> <a name="FunctionsToIncludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToIncludeInput"></a>

```go
func FunctionsToIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaterializedViewsToExcludeInput`<sup>Optional</sup> <a name="MaterializedViewsToExcludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExcludeInput"></a>

```go
func MaterializedViewsToExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaterializedViewsToIncludeInput`<sup>Optional</sup> <a name="MaterializedViewsToIncludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToIncludeInput"></a>

```go
func MaterializedViewsToIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `TablesToExcludeInput`<sup>Optional</sup> <a name="TablesToExcludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExcludeInput"></a>

```go
func TablesToExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `TablesToIncludeInput`<sup>Optional</sup> <a name="TablesToIncludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToIncludeInput"></a>

```go
func TablesToIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalTablesToExclude`<sup>Required</sup> <a name="ExternalTablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExclude"></a>

```go
func ExternalTablesToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalTablesToInclude`<sup>Required</sup> <a name="ExternalTablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToInclude"></a>

```go
func ExternalTablesToInclude() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionsToExclude`<sup>Required</sup> <a name="FunctionsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToExclude"></a>

```go
func FunctionsToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionsToInclude`<sup>Required</sup> <a name="FunctionsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToInclude"></a>

```go
func FunctionsToInclude() *[]*string
```

- *Type:* *[]*string

---

##### `MaterializedViewsToExclude`<sup>Required</sup> <a name="MaterializedViewsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExclude"></a>

```go
func MaterializedViewsToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `MaterializedViewsToInclude`<sup>Required</sup> <a name="MaterializedViewsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToInclude"></a>

```go
func MaterializedViewsToInclude() *[]*string
```

- *Type:* *[]*string

---

##### `TablesToExclude`<sup>Required</sup> <a name="TablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExclude"></a>

```go
func TablesToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `TablesToInclude`<sup>Required</sup> <a name="TablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToInclude"></a>

```go
func TablesToInclude() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.internalValue"></a>

```go
func InternalValue() KustoAttachedDatabaseConfigurationSharing
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

---


### KustoAttachedDatabaseConfigurationTimeoutsOutputReference <a name="KustoAttachedDatabaseConfigurationTimeoutsOutputReference" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/kustoattacheddatabaseconfiguration"

kustoattacheddatabaseconfiguration.NewKustoAttachedDatabaseConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KustoAttachedDatabaseConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



