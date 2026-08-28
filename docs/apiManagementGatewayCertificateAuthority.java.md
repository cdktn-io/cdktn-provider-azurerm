# `apiManagementGatewayCertificateAuthority` Submodule <a name="`apiManagementGatewayCertificateAuthority` Submodule" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementGatewayCertificateAuthority <a name="ApiManagementGatewayCertificateAuthority" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority azurerm_api_management_gateway_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer"></a>

```java
import io.cdktn.providers.azurerm.api_management_gateway_certificate_authority.ApiManagementGatewayCertificateAuthority;

ApiManagementGatewayCertificateAuthority.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiManagementId(java.lang.String)
    .certificateName(java.lang.String)
    .gatewayName(java.lang.String)
//  .id(java.lang.String)
//  .isTrusted(java.lang.Boolean|IResolvable)
//  .timeouts(ApiManagementGatewayCertificateAuthorityTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.apiManagementId">apiManagementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#api_management_id ApiManagementGatewayCertificateAuthority#api_management_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.certificateName">certificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#certificate_name ApiManagementGatewayCertificateAuthority#certificate_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#gateway_name ApiManagementGatewayCertificateAuthority#gateway_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#id ApiManagementGatewayCertificateAuthority#id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.isTrusted">isTrusted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#is_trusted ApiManagementGatewayCertificateAuthority#is_trusted}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.apiManagementId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#api_management_id ApiManagementGatewayCertificateAuthority#api_management_id}.

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.certificateName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#certificate_name ApiManagementGatewayCertificateAuthority#certificate_name}.

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.gatewayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#gateway_name ApiManagementGatewayCertificateAuthority#gateway_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#id ApiManagementGatewayCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTrusted`<sup>Optional</sup> <a name="isTrusted" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.isTrusted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#is_trusted ApiManagementGatewayCertificateAuthority#is_trusted}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#timeouts ApiManagementGatewayCertificateAuthority#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetIsTrusted">resetIsTrusted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementGatewayCertificateAuthorityTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetId"></a>

```java
public void resetId()
```

##### `resetIsTrusted` <a name="resetIsTrusted" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetIsTrusted"></a>

```java
public void resetIsTrusted()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiManagementGatewayCertificateAuthority resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.api_management_gateway_certificate_authority.ApiManagementGatewayCertificateAuthority;

ApiManagementGatewayCertificateAuthority.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.api_management_gateway_certificate_authority.ApiManagementGatewayCertificateAuthority;

ApiManagementGatewayCertificateAuthority.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.api_management_gateway_certificate_authority.ApiManagementGatewayCertificateAuthority;

ApiManagementGatewayCertificateAuthority.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.api_management_gateway_certificate_authority.ApiManagementGatewayCertificateAuthority;

ApiManagementGatewayCertificateAuthority.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagementGatewayCertificateAuthority.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiManagementGatewayCertificateAuthority resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagementGatewayCertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagementGatewayCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiManagementGatewayCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference">ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementIdInput">apiManagementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayNameInput">gatewayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrustedInput">isTrustedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementId">apiManagementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrusted">isTrusted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeouts"></a>

```java
public ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference">ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference</a>

---

##### `apiManagementIdInput`<sup>Optional</sup> <a name="apiManagementIdInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementIdInput"></a>

```java
public java.lang.String getApiManagementIdInput();
```

- *Type:* java.lang.String

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayNameInput`<sup>Optional</sup> <a name="gatewayNameInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayNameInput"></a>

```java
public java.lang.String getGatewayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isTrustedInput`<sup>Optional</sup> <a name="isTrustedInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrustedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsTrustedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.timeoutsInput"></a>

```java
public IResolvable|ApiManagementGatewayCertificateAuthorityTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.apiManagementId"></a>

```java
public java.lang.String getApiManagementId();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.gatewayName"></a>

```java
public java.lang.String getGatewayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isTrusted`<sup>Required</sup> <a name="isTrusted" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.isTrusted"></a>

```java
public java.lang.Boolean|IResolvable getIsTrusted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthority.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementGatewayCertificateAuthorityConfig <a name="ApiManagementGatewayCertificateAuthorityConfig" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.api_management_gateway_certificate_authority.ApiManagementGatewayCertificateAuthorityConfig;

ApiManagementGatewayCertificateAuthorityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiManagementId(java.lang.String)
    .certificateName(java.lang.String)
    .gatewayName(java.lang.String)
//  .id(java.lang.String)
//  .isTrusted(java.lang.Boolean|IResolvable)
//  .timeouts(ApiManagementGatewayCertificateAuthorityTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.apiManagementId">apiManagementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#api_management_id ApiManagementGatewayCertificateAuthority#api_management_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#certificate_name ApiManagementGatewayCertificateAuthority#certificate_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#gateway_name ApiManagementGatewayCertificateAuthority#gateway_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#id ApiManagementGatewayCertificateAuthority#id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.isTrusted">isTrusted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#is_trusted ApiManagementGatewayCertificateAuthority#is_trusted}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.apiManagementId"></a>

```java
public java.lang.String getApiManagementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#api_management_id ApiManagementGatewayCertificateAuthority#api_management_id}.

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#certificate_name ApiManagementGatewayCertificateAuthority#certificate_name}.

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.gatewayName"></a>

```java
public java.lang.String getGatewayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#gateway_name ApiManagementGatewayCertificateAuthority#gateway_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#id ApiManagementGatewayCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTrusted`<sup>Optional</sup> <a name="isTrusted" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.isTrusted"></a>

```java
public java.lang.Boolean|IResolvable getIsTrusted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#is_trusted ApiManagementGatewayCertificateAuthority#is_trusted}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityConfig.property.timeouts"></a>

```java
public ApiManagementGatewayCertificateAuthorityTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#timeouts ApiManagementGatewayCertificateAuthority#timeouts}

---

### ApiManagementGatewayCertificateAuthorityTimeouts <a name="ApiManagementGatewayCertificateAuthorityTimeouts" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.api_management_gateway_certificate_authority.ApiManagementGatewayCertificateAuthorityTimeouts;

ApiManagementGatewayCertificateAuthorityTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#create ApiManagementGatewayCertificateAuthority#create}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#delete ApiManagementGatewayCertificateAuthority#delete}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#read ApiManagementGatewayCertificateAuthority#read}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#update ApiManagementGatewayCertificateAuthority#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#create ApiManagementGatewayCertificateAuthority#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#delete ApiManagementGatewayCertificateAuthority#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#read ApiManagementGatewayCertificateAuthority#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/api_management_gateway_certificate_authority#update ApiManagementGatewayCertificateAuthority#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference <a name="ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.api_management_gateway_certificate_authority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference;

new ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiManagementGatewayCertificateAuthorityTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.apiManagementGatewayCertificateAuthority.ApiManagementGatewayCertificateAuthorityTimeouts">ApiManagementGatewayCertificateAuthorityTimeouts</a>

---



