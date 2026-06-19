# `dataFactoryIntegrationRuntimeAzure` Submodule <a name="`dataFactoryIntegrationRuntimeAzure` Submodule" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeAzure <a name="DataFactoryIntegrationRuntimeAzure" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure azurerm_data_factory_integration_runtime_azure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.NewDataFactoryIntegrationRuntimeAzure(scope Construct, id *string, config DataFactoryIntegrationRuntimeAzureConfig) DataFactoryIntegrationRuntimeAzure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig">DataFactoryIntegrationRuntimeAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig">DataFactoryIntegrationRuntimeAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCleanupEnabled">ResetCleanupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetComputeType">ResetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetInteractiveAuthoringTimeToLiveInMinutes">ResetInteractiveAuthoringTimeToLiveInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeToLiveMin">ResetTimeToLiveMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetVirtualNetworkEnabled">ResetVirtualNetworkEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryIntegrationRuntimeAzureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

---

##### `ResetCleanupEnabled` <a name="ResetCleanupEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCleanupEnabled"></a>

```go
func ResetCleanupEnabled()
```

##### `ResetComputeType` <a name="ResetComputeType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetComputeType"></a>

```go
func ResetComputeType()
```

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCoreCount"></a>

```go
func ResetCoreCount()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetId"></a>

```go
func ResetId()
```

##### `ResetInteractiveAuthoringTimeToLiveInMinutes` <a name="ResetInteractiveAuthoringTimeToLiveInMinutes" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetInteractiveAuthoringTimeToLiveInMinutes"></a>

```go
func ResetInteractiveAuthoringTimeToLiveInMinutes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeToLiveMin` <a name="ResetTimeToLiveMin" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeToLiveMin"></a>

```go
func ResetTimeToLiveMin()
```

##### `ResetVirtualNetworkEnabled` <a name="ResetVirtualNetworkEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetVirtualNetworkEnabled"></a>

```go
func ResetVirtualNetworkEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryIntegrationRuntimeAzure resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataFactoryIntegrationRuntimeAzure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryIntegrationRuntimeAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryIntegrationRuntimeAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryIntegrationRuntimeAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabledInput">CleanupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeTypeInput">ComputeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCountInput">CoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutesInput">InteractiveAuthoringTimeToLiveInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMinInput">TimeToLiveMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabledInput">VirtualNetworkEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabled">CleanupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeType">ComputeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutes">InteractiveAuthoringTimeToLiveInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMin">TimeToLiveMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabled">VirtualNetworkEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeouts"></a>

```go
func Timeouts() DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference</a>

---

##### `CleanupEnabledInput`<sup>Optional</sup> <a name="CleanupEnabledInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabledInput"></a>

```go
func CleanupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeTypeInput"></a>

```go
func ComputeTypeInput() *string
```

- *Type:* *string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCountInput"></a>

```go
func CoreCountInput() *f64
```

- *Type:* *f64

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InteractiveAuthoringTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="InteractiveAuthoringTimeToLiveInMinutesInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutesInput"></a>

```go
func InteractiveAuthoringTimeToLiveInMinutesInput() *f64
```

- *Type:* *f64

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeToLiveMinInput`<sup>Optional</sup> <a name="TimeToLiveMinInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMinInput"></a>

```go
func TimeToLiveMinInput() *f64
```

- *Type:* *f64

---

##### `VirtualNetworkEnabledInput`<sup>Optional</sup> <a name="VirtualNetworkEnabledInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabledInput"></a>

```go
func VirtualNetworkEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CleanupEnabled`<sup>Required</sup> <a name="CleanupEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabled"></a>

```go
func CleanupEnabled() interface{}
```

- *Type:* interface{}

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeType"></a>

```go
func ComputeType() *string
```

- *Type:* *string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InteractiveAuthoringTimeToLiveInMinutes`<sup>Required</sup> <a name="InteractiveAuthoringTimeToLiveInMinutes" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutes"></a>

```go
func InteractiveAuthoringTimeToLiveInMinutes() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeToLiveMin`<sup>Required</sup> <a name="TimeToLiveMin" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMin"></a>

```go
func TimeToLiveMin() *f64
```

- *Type:* *f64

---

##### `VirtualNetworkEnabled`<sup>Required</sup> <a name="VirtualNetworkEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabled"></a>

```go
func VirtualNetworkEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeAzureConfig <a name="DataFactoryIntegrationRuntimeAzureConfig" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactoryintegrationruntimeazure"

&datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Location: *string,
	Name: *string,
	CleanupEnabled: interface{},
	ComputeType: *string,
	CoreCount: *f64,
	Description: *string,
	Id: *string,
	InteractiveAuthoringTimeToLiveInMinutes: *f64,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts,
	TimeToLiveMin: *f64,
	VirtualNetworkEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#data_factory_id DataFactoryIntegrationRuntimeAzure#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#location DataFactoryIntegrationRuntimeAzure#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#name DataFactoryIntegrationRuntimeAzure#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.cleanupEnabled">CleanupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.computeType">ComputeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.coreCount">CoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#core_count DataFactoryIntegrationRuntimeAzure#core_count}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#description DataFactoryIntegrationRuntimeAzure#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#id DataFactoryIntegrationRuntimeAzure#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.interactiveAuthoringTimeToLiveInMinutes">InteractiveAuthoringTimeToLiveInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#interactive_authoring_time_to_live_in_minutes DataFactoryIntegrationRuntimeAzure#interactive_authoring_time_to_live_in_minutes}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeToLiveMin">TimeToLiveMin</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.virtualNetworkEnabled">VirtualNetworkEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#data_factory_id DataFactoryIntegrationRuntimeAzure#data_factory_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#location DataFactoryIntegrationRuntimeAzure#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#name DataFactoryIntegrationRuntimeAzure#name}.

---

##### `CleanupEnabled`<sup>Optional</sup> <a name="CleanupEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.cleanupEnabled"></a>

```go
CleanupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}.

---

##### `ComputeType`<sup>Optional</sup> <a name="ComputeType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.computeType"></a>

```go
ComputeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}.

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.coreCount"></a>

```go
CoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#core_count DataFactoryIntegrationRuntimeAzure#core_count}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#description DataFactoryIntegrationRuntimeAzure#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#id DataFactoryIntegrationRuntimeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InteractiveAuthoringTimeToLiveInMinutes`<sup>Optional</sup> <a name="InteractiveAuthoringTimeToLiveInMinutes" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.interactiveAuthoringTimeToLiveInMinutes"></a>

```go
InteractiveAuthoringTimeToLiveInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#interactive_authoring_time_to_live_in_minutes DataFactoryIntegrationRuntimeAzure#interactive_authoring_time_to_live_in_minutes}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeouts"></a>

```go
Timeouts DataFactoryIntegrationRuntimeAzureTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#timeouts DataFactoryIntegrationRuntimeAzure#timeouts}

---

##### `TimeToLiveMin`<sup>Optional</sup> <a name="TimeToLiveMin" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeToLiveMin"></a>

```go
TimeToLiveMin *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}.

---

##### `VirtualNetworkEnabled`<sup>Optional</sup> <a name="VirtualNetworkEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.virtualNetworkEnabled"></a>

```go
VirtualNetworkEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}.

---

### DataFactoryIntegrationRuntimeAzureTimeouts <a name="DataFactoryIntegrationRuntimeAzureTimeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactoryintegrationruntimeazure"

&datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzureTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#create DataFactoryIntegrationRuntimeAzure#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#delete DataFactoryIntegrationRuntimeAzure#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#read DataFactoryIntegrationRuntimeAzure#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#update DataFactoryIntegrationRuntimeAzure#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#create DataFactoryIntegrationRuntimeAzure#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#delete DataFactoryIntegrationRuntimeAzure#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#read DataFactoryIntegrationRuntimeAzure#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_integration_runtime_azure#update DataFactoryIntegrationRuntimeAzure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.NewDataFactoryIntegrationRuntimeAzureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



