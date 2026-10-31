# `dataAzurermRelayNamespace` Submodule <a name="`dataAzurermRelayNamespace` Submodule" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermRelayNamespace <a name="DataAzurermRelayNamespace" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace azurerm_relay_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataazurermrelaynamespace"

dataazurermrelaynamespace.NewDataAzurermRelayNamespace(scope Construct, id *string, config DataAzurermRelayNamespaceConfig) DataAzurermRelayNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig">DataAzurermRelayNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig">DataAzurermRelayNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermRelayNamespaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermRelayNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataazurermrelaynamespace"

dataazurermrelaynamespace.DataAzurermRelayNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataazurermrelaynamespace"

dataazurermrelaynamespace.DataAzurermRelayNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataazurermrelaynamespace"

dataazurermrelaynamespace.DataAzurermRelayNamespace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataazurermrelaynamespace"

dataazurermrelaynamespace.DataAzurermRelayNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermRelayNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermRelayNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermRelayNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermRelayNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.metricId">MetricId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryKey">SecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference">DataAzurermRelayNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MetricId`<sup>Required</sup> <a name="MetricId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.metricId"></a>

```go
func MetricId() *string
```

- *Type:* *string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryKey"></a>

```go
func SecondaryKey() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeouts"></a>

```go
func Timeouts() DataAzurermRelayNamespaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference">DataAzurermRelayNamespaceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermRelayNamespaceConfig <a name="DataAzurermRelayNamespaceConfig" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataazurermrelaynamespace"

&dataazurermrelaynamespace.DataAzurermRelayNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#name DataAzurermRelayNamespace#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#resource_group_name DataAzurermRelayNamespace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#id DataAzurermRelayNamespace#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#name DataAzurermRelayNamespace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#resource_group_name DataAzurermRelayNamespace#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#id DataAzurermRelayNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.timeouts"></a>

```go
Timeouts DataAzurermRelayNamespaceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#timeouts DataAzurermRelayNamespace#timeouts}

---

### DataAzurermRelayNamespaceTimeouts <a name="DataAzurermRelayNamespaceTimeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataazurermrelaynamespace"

&dataazurermrelaynamespace.DataAzurermRelayNamespaceTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#read DataAzurermRelayNamespace#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#read DataAzurermRelayNamespace#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermRelayNamespaceTimeoutsOutputReference <a name="DataAzurermRelayNamespaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataazurermrelaynamespace"

dataazurermrelaynamespace.NewDataAzurermRelayNamespaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermRelayNamespaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



