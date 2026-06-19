# `cdnFrontdoorCustomDomain` Submodule <a name="`cdnFrontdoorCustomDomain` Submodule" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorCustomDomain <a name="CdnFrontdoorCustomDomain" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain azurerm_cdn_frontdoor_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cdnFrontdoorProfileId(java.lang.String)
    .hostName(java.lang.String)
    .name(java.lang.String)
    .tls(CdnFrontdoorCustomDomainTls)
//  .dnsZoneId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorCustomDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.tls">tls</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | tls block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.dnsZoneId">dnsZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.cdnFrontdoorProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.hostName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}.

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.tls"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#tls CdnFrontdoorCustomDomain#tls}

---

##### `dnsZoneId`<sup>Optional</sup> <a name="dnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.dnsZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#timeouts CdnFrontdoorCustomDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetDnsZoneId">resetDnsZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts"></a>

```java
public void putTimeouts(CdnFrontdoorCustomDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---

##### `putTls` <a name="putTls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls"></a>

```java
public void putTls(CdnFrontdoorCustomDomainTls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---

##### `resetDnsZoneId` <a name="resetDnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetDnsZoneId"></a>

```java
public void resetDnsZoneId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CdnFrontdoorCustomDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnFrontdoorCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CdnFrontdoorCustomDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnFrontdoorCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnFrontdoorCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference">CdnFrontdoorCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tls">tls</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference">CdnFrontdoorCustomDomainTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.validationToken">validationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileIdInput">cdnFrontdoorProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneIdInput">dnsZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tlsInput">tlsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneId">dnsZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeouts"></a>

```java
public CdnFrontdoorCustomDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference">CdnFrontdoorCustomDomainTimeoutsOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tls"></a>

```java
public CdnFrontdoorCustomDomainTlsOutputReference getTls();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference">CdnFrontdoorCustomDomainTlsOutputReference</a>

---

##### `validationToken`<sup>Required</sup> <a name="validationToken" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.validationToken"></a>

```java
public java.lang.String getValidationToken();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="cdnFrontdoorProfileIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileIdInput"></a>

```java
public java.lang.String getCdnFrontdoorProfileIdInput();
```

- *Type:* java.lang.String

---

##### `dnsZoneIdInput`<sup>Optional</sup> <a name="dnsZoneIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneIdInput"></a>

```java
public java.lang.String getDnsZoneIdInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeoutsInput"></a>

```java
public IResolvable|CdnFrontdoorCustomDomainTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tlsInput"></a>

```java
public CdnFrontdoorCustomDomainTls getTlsInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

---

##### `dnsZoneId`<sup>Required</sup> <a name="dnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneId"></a>

```java
public java.lang.String getDnsZoneId();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorCustomDomainConfig <a name="CdnFrontdoorCustomDomainConfig" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainConfig;

CdnFrontdoorCustomDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cdnFrontdoorProfileId(java.lang.String)
    .hostName(java.lang.String)
    .name(java.lang.String)
    .tls(CdnFrontdoorCustomDomainTls)
//  .dnsZoneId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorCustomDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.tls">tls</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | tls block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dnsZoneId">dnsZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}.

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.tls"></a>

```java
public CdnFrontdoorCustomDomainTls getTls();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#tls CdnFrontdoorCustomDomain#tls}

---

##### `dnsZoneId`<sup>Optional</sup> <a name="dnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dnsZoneId"></a>

```java
public java.lang.String getDnsZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.timeouts"></a>

```java
public CdnFrontdoorCustomDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#timeouts CdnFrontdoorCustomDomain#timeouts}

---

### CdnFrontdoorCustomDomainTimeouts <a name="CdnFrontdoorCustomDomainTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTimeouts;

CdnFrontdoorCustomDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#create CdnFrontdoorCustomDomain#create}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#delete CdnFrontdoorCustomDomain#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#read CdnFrontdoorCustomDomain#read}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#update CdnFrontdoorCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#create CdnFrontdoorCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#delete CdnFrontdoorCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#read CdnFrontdoorCustomDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#update CdnFrontdoorCustomDomain#update}.

---

### CdnFrontdoorCustomDomainTls <a name="CdnFrontdoorCustomDomainTls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTls;

CdnFrontdoorCustomDomainTls.builder()
//  .cdnFrontdoorSecretId(java.lang.String)
//  .certificateType(java.lang.String)
//  .cipherSuite(CdnFrontdoorCustomDomainTlsCipherSuite)
//  .minimumTlsVersion(java.lang.String)
//  .minimumVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cdnFrontdoorSecretId">cdnFrontdoorSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_secret_id CdnFrontdoorCustomDomain#cdn_frontdoor_secret_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.certificateType">certificateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#certificate_type CdnFrontdoorCustomDomain#certificate_type}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#minimum_tls_version CdnFrontdoorCustomDomain#minimum_tls_version}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumVersion">minimumVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#minimum_version CdnFrontdoorCustomDomain#minimum_version}. |

---

##### `cdnFrontdoorSecretId`<sup>Optional</sup> <a name="cdnFrontdoorSecretId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cdnFrontdoorSecretId"></a>

```java
public java.lang.String getCdnFrontdoorSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_secret_id CdnFrontdoorCustomDomain#cdn_frontdoor_secret_id}.

---

##### `certificateType`<sup>Optional</sup> <a name="certificateType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.certificateType"></a>

```java
public java.lang.String getCertificateType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#certificate_type CdnFrontdoorCustomDomain#certificate_type}.

---

##### `cipherSuite`<sup>Optional</sup> <a name="cipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cipherSuite"></a>

```java
public CdnFrontdoorCustomDomainTlsCipherSuite getCipherSuite();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#cipher_suite CdnFrontdoorCustomDomain#cipher_suite}

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#minimum_tls_version CdnFrontdoorCustomDomain#minimum_tls_version}.

---

##### `minimumVersion`<sup>Optional</sup> <a name="minimumVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumVersion"></a>

```java
public java.lang.String getMinimumVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#minimum_version CdnFrontdoorCustomDomain#minimum_version}.

---

### CdnFrontdoorCustomDomainTlsCipherSuite <a name="CdnFrontdoorCustomDomainTlsCipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTlsCipherSuite;

CdnFrontdoorCustomDomainTlsCipherSuite.builder()
    .type(java.lang.String)
//  .customCiphers(CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#type CdnFrontdoorCustomDomain#type}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.property.customCiphers">customCiphers</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a></code> | custom_ciphers block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#type CdnFrontdoorCustomDomain#type}.

---

##### `customCiphers`<sup>Optional</sup> <a name="customCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.property.customCiphers"></a>

```java
public CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers getCustomCiphers();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a>

custom_ciphers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#custom_ciphers CdnFrontdoorCustomDomain#custom_ciphers}

---

### CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers <a name="CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers;

CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.builder()
//  .tls12(java.util.List<java.lang.String>)
//  .tls13(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.property.tls12">tls12</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#tls12 CdnFrontdoorCustomDomain#tls12}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.property.tls13">tls13</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#tls13 CdnFrontdoorCustomDomain#tls13}. |

---

##### `tls12`<sup>Optional</sup> <a name="tls12" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.property.tls12"></a>

```java
public java.util.List<java.lang.String> getTls12();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#tls12 CdnFrontdoorCustomDomain#tls12}.

---

##### `tls13`<sup>Optional</sup> <a name="tls13" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.property.tls13"></a>

```java
public java.util.List<java.lang.String> getTls13();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/cdn_frontdoor_custom_domain#tls13 CdnFrontdoorCustomDomain#tls13}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorCustomDomainTimeoutsOutputReference <a name="CdnFrontdoorCustomDomainTimeoutsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTimeoutsOutputReference;

new CdnFrontdoorCustomDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CdnFrontdoorCustomDomainTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---


### CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference <a name="CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference;

new CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resetTls12">resetTls12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resetTls13">resetTls13</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTls12` <a name="resetTls12" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resetTls12"></a>

```java
public void resetTls12()
```

##### `resetTls13` <a name="resetTls13" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resetTls13"></a>

```java
public void resetTls13()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12Input">tls12Input</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13Input">tls13Input</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12">tls12</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13">tls13</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tls12Input`<sup>Optional</sup> <a name="tls12Input" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12Input"></a>

```java
public java.util.List<java.lang.String> getTls12Input();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tls13Input`<sup>Optional</sup> <a name="tls13Input" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13Input"></a>

```java
public java.util.List<java.lang.String> getTls13Input();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tls12`<sup>Required</sup> <a name="tls12" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12"></a>

```java
public java.util.List<java.lang.String> getTls12();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13"></a>

```java
public java.util.List<java.lang.String> getTls13();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a>

---


### CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference <a name="CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference;

new CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.putCustomCiphers">putCustomCiphers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resetCustomCiphers">resetCustomCiphers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomCiphers` <a name="putCustomCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.putCustomCiphers"></a>

```java
public void putCustomCiphers(CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.putCustomCiphers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a>

---

##### `resetCustomCiphers` <a name="resetCustomCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resetCustomCiphers"></a>

```java
public void resetCustomCiphers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphers">customCiphers</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphersInput">customCiphersInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customCiphers`<sup>Required</sup> <a name="customCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphers"></a>

```java
public CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference getCustomCiphers();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference</a>

---

##### `customCiphersInput`<sup>Optional</sup> <a name="customCiphersInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphersInput"></a>

```java
public CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers getCustomCiphersInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorCustomDomainTlsCipherSuite getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a>

---


### CdnFrontdoorCustomDomainTlsOutputReference <a name="CdnFrontdoorCustomDomainTlsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTlsOutputReference;

new CdnFrontdoorCustomDomainTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.putCipherSuite">putCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCdnFrontdoorSecretId">resetCdnFrontdoorSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCertificateType">resetCertificateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCipherSuite">resetCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumVersion">resetMinimumVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCipherSuite` <a name="putCipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.putCipherSuite"></a>

```java
public void putCipherSuite(CdnFrontdoorCustomDomainTlsCipherSuite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.putCipherSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a>

---

##### `resetCdnFrontdoorSecretId` <a name="resetCdnFrontdoorSecretId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCdnFrontdoorSecretId"></a>

```java
public void resetCdnFrontdoorSecretId()
```

##### `resetCertificateType` <a name="resetCertificateType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCertificateType"></a>

```java
public void resetCertificateType()
```

##### `resetCipherSuite` <a name="resetCipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCipherSuite"></a>

```java
public void resetCipherSuite()
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumTlsVersion"></a>

```java
public void resetMinimumTlsVersion()
```

##### `resetMinimumVersion` <a name="resetMinimumVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumVersion"></a>

```java
public void resetMinimumVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference">CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretIdInput">cdnFrontdoorSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateTypeInput">certificateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuiteInput">cipherSuiteInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersionInput">minimumVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId">cdnFrontdoorSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateType">certificateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersion">minimumVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cipherSuite`<sup>Required</sup> <a name="cipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuite"></a>

```java
public CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference getCipherSuite();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference">CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference</a>

---

##### `cdnFrontdoorSecretIdInput`<sup>Optional</sup> <a name="cdnFrontdoorSecretIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretIdInput"></a>

```java
public java.lang.String getCdnFrontdoorSecretIdInput();
```

- *Type:* java.lang.String

---

##### `certificateTypeInput`<sup>Optional</sup> <a name="certificateTypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateTypeInput"></a>

```java
public java.lang.String getCertificateTypeInput();
```

- *Type:* java.lang.String

---

##### `cipherSuiteInput`<sup>Optional</sup> <a name="cipherSuiteInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuiteInput"></a>

```java
public CdnFrontdoorCustomDomainTlsCipherSuite getCipherSuiteInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a>

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersionInput"></a>

```java
public java.lang.String getMinimumTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `minimumVersionInput`<sup>Optional</sup> <a name="minimumVersionInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersionInput"></a>

```java
public java.lang.String getMinimumVersionInput();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorSecretId`<sup>Required</sup> <a name="cdnFrontdoorSecretId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId"></a>

```java
public java.lang.String getCdnFrontdoorSecretId();
```

- *Type:* java.lang.String

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateType"></a>

```java
public java.lang.String getCertificateType();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `minimumVersion`<sup>Required</sup> <a name="minimumVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersion"></a>

```java
public java.lang.String getMinimumVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorCustomDomainTls getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---



