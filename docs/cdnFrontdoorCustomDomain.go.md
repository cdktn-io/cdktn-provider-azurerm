# `cdnFrontdoorCustomDomain` Submodule <a name="`cdnFrontdoorCustomDomain` Submodule" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorCustomDomain <a name="CdnFrontdoorCustomDomain" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain azurerm_cdn_frontdoor_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

cdnfrontdoorcustomdomain.NewCdnFrontdoorCustomDomain(scope Construct, id *string, config CdnFrontdoorCustomDomainConfig) CdnFrontdoorCustomDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig">CdnFrontdoorCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig">CdnFrontdoorCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetDnsZoneId">ResetDnsZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts"></a>

```go
func PutTimeouts(value CdnFrontdoorCustomDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---

##### `PutTls` <a name="PutTls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls"></a>

```go
func PutTls(value CdnFrontdoorCustomDomainTls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---

##### `ResetDnsZoneId` <a name="ResetDnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetDnsZoneId"></a>

```go
func ResetDnsZoneId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CdnFrontdoorCustomDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

cdnfrontdoorcustomdomain.CdnFrontdoorCustomDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

cdnfrontdoorcustomdomain.CdnFrontdoorCustomDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

cdnfrontdoorcustomdomain.CdnFrontdoorCustomDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

cdnfrontdoorcustomdomain.CdnFrontdoorCustomDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CdnFrontdoorCustomDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CdnFrontdoorCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CdnFrontdoorCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference">CdnFrontdoorCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference">CdnFrontdoorCustomDomainTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.validationToken">ValidationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileIdInput">CdnFrontdoorProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneIdInput">DnsZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tlsInput">TlsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId">CdnFrontdoorProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneId">DnsZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeouts"></a>

```go
func Timeouts() CdnFrontdoorCustomDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference">CdnFrontdoorCustomDomainTimeoutsOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tls"></a>

```go
func Tls() CdnFrontdoorCustomDomainTlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference">CdnFrontdoorCustomDomainTlsOutputReference</a>

---

##### `ValidationToken`<sup>Required</sup> <a name="ValidationToken" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.validationToken"></a>

```go
func ValidationToken() *string
```

- *Type:* *string

---

##### `CdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="CdnFrontdoorProfileIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileIdInput"></a>

```go
func CdnFrontdoorProfileIdInput() *string
```

- *Type:* *string

---

##### `DnsZoneIdInput`<sup>Optional</sup> <a name="DnsZoneIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneIdInput"></a>

```go
func DnsZoneIdInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tlsInput"></a>

```go
func TlsInput() CdnFrontdoorCustomDomainTls
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---

##### `CdnFrontdoorProfileId`<sup>Required</sup> <a name="CdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId"></a>

```go
func CdnFrontdoorProfileId() *string
```

- *Type:* *string

---

##### `DnsZoneId`<sup>Required</sup> <a name="DnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneId"></a>

```go
func DnsZoneId() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorCustomDomainConfig <a name="CdnFrontdoorCustomDomainConfig" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

&cdnfrontdoorcustomdomain.CdnFrontdoorCustomDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CdnFrontdoorProfileId: *string,
	HostName: *string,
	Name: *string,
	Tls: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls,
	DnsZoneId: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.cdnFrontdoorProfileId">CdnFrontdoorProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | tls block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dnsZoneId">DnsZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CdnFrontdoorProfileId`<sup>Required</sup> <a name="CdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.cdnFrontdoorProfileId"></a>

```go
CdnFrontdoorProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}.

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}.

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.tls"></a>

```go
Tls CdnFrontdoorCustomDomainTls
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#tls CdnFrontdoorCustomDomain#tls}

---

##### `DnsZoneId`<sup>Optional</sup> <a name="DnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dnsZoneId"></a>

```go
DnsZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.timeouts"></a>

```go
Timeouts CdnFrontdoorCustomDomainTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#timeouts CdnFrontdoorCustomDomain#timeouts}

---

### CdnFrontdoorCustomDomainTimeouts <a name="CdnFrontdoorCustomDomainTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

&cdnfrontdoorcustomdomain.CdnFrontdoorCustomDomainTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#create CdnFrontdoorCustomDomain#create}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#delete CdnFrontdoorCustomDomain#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#read CdnFrontdoorCustomDomain#read}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#update CdnFrontdoorCustomDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#create CdnFrontdoorCustomDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#delete CdnFrontdoorCustomDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#read CdnFrontdoorCustomDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#update CdnFrontdoorCustomDomain#update}.

---

### CdnFrontdoorCustomDomainTls <a name="CdnFrontdoorCustomDomainTls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

&cdnfrontdoorcustomdomain.CdnFrontdoorCustomDomainTls {
	CdnFrontdoorSecretId: *string,
	CertificateType: *string,
	MinimumTlsVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cdnFrontdoorSecretId">CdnFrontdoorSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_secret_id CdnFrontdoorCustomDomain#cdn_frontdoor_secret_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.certificateType">CertificateType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#certificate_type CdnFrontdoorCustomDomain#certificate_type}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#minimum_tls_version CdnFrontdoorCustomDomain#minimum_tls_version}. |

---

##### `CdnFrontdoorSecretId`<sup>Optional</sup> <a name="CdnFrontdoorSecretId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cdnFrontdoorSecretId"></a>

```go
CdnFrontdoorSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_secret_id CdnFrontdoorCustomDomain#cdn_frontdoor_secret_id}.

---

##### `CertificateType`<sup>Optional</sup> <a name="CertificateType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.certificateType"></a>

```go
CertificateType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#certificate_type CdnFrontdoorCustomDomain#certificate_type}.

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumTlsVersion"></a>

```go
MinimumTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.61.0/docs/resources/cdn_frontdoor_custom_domain#minimum_tls_version CdnFrontdoorCustomDomain#minimum_tls_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorCustomDomainTimeoutsOutputReference <a name="CdnFrontdoorCustomDomainTimeoutsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

cdnfrontdoorcustomdomain.NewCdnFrontdoorCustomDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorCustomDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorCustomDomainTlsOutputReference <a name="CdnFrontdoorCustomDomainTlsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v15/cdnfrontdoorcustomdomain"

cdnfrontdoorcustomdomain.NewCdnFrontdoorCustomDomainTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorCustomDomainTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCdnFrontdoorSecretId">ResetCdnFrontdoorSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCertificateType">ResetCertificateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCdnFrontdoorSecretId` <a name="ResetCdnFrontdoorSecretId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCdnFrontdoorSecretId"></a>

```go
func ResetCdnFrontdoorSecretId()
```

##### `ResetCertificateType` <a name="ResetCertificateType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCertificateType"></a>

```go
func ResetCertificateType()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumTlsVersion"></a>

```go
func ResetMinimumTlsVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretIdInput">CdnFrontdoorSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateTypeInput">CertificateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId">CdnFrontdoorSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateType">CertificateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CdnFrontdoorSecretIdInput`<sup>Optional</sup> <a name="CdnFrontdoorSecretIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretIdInput"></a>

```go
func CdnFrontdoorSecretIdInput() *string
```

- *Type:* *string

---

##### `CertificateTypeInput`<sup>Optional</sup> <a name="CertificateTypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateTypeInput"></a>

```go
func CertificateTypeInput() *string
```

- *Type:* *string

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersionInput"></a>

```go
func MinimumTlsVersionInput() *string
```

- *Type:* *string

---

##### `CdnFrontdoorSecretId`<sup>Required</sup> <a name="CdnFrontdoorSecretId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId"></a>

```go
func CdnFrontdoorSecretId() *string
```

- *Type:* *string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateType"></a>

```go
func CertificateType() *string
```

- *Type:* *string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersion"></a>

```go
func MinimumTlsVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorCustomDomainTls
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---



