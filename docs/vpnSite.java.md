# `vpnSite` Submodule <a name="`vpnSite` Submodule" id="@cdktn/provider-azurerm.vpnSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnSite <a name="VpnSite" id="@cdktn/provider-azurerm.vpnSite.VpnSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site azurerm_vpn_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSite;

VpnSite.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .virtualWanId(java.lang.String)
//  .addressCidrs(java.util.List<java.lang.String>)
//  .deviceModel(java.lang.String)
//  .deviceVendor(java.lang.String)
//  .id(java.lang.String)
//  .link(IResolvable|java.util.List<VpnSiteLink>)
//  .o365Policy(VpnSiteO365Policy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpnSiteTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#location VpnSite#location}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#name VpnSite#name}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#resource_group_name VpnSite#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.virtualWanId">virtualWanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#virtual_wan_id VpnSite#virtual_wan_id}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.addressCidrs">addressCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#address_cidrs VpnSite#address_cidrs}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.deviceModel">deviceModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#device_model VpnSite#device_model}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.deviceVendor">deviceVendor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#device_vendor VpnSite#device_vendor}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#id VpnSite#id}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.link">link</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>></code> | link block. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.o365Policy">o365Policy</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a></code> | o365_policy block. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#tags VpnSite#tags}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#location VpnSite#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#name VpnSite#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#resource_group_name VpnSite#resource_group_name}.

---

##### `virtualWanId`<sup>Required</sup> <a name="virtualWanId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.virtualWanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#virtual_wan_id VpnSite#virtual_wan_id}.

---

##### `addressCidrs`<sup>Optional</sup> <a name="addressCidrs" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.addressCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#address_cidrs VpnSite#address_cidrs}.

---

##### `deviceModel`<sup>Optional</sup> <a name="deviceModel" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.deviceModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#device_model VpnSite#device_model}.

---

##### `deviceVendor`<sup>Optional</sup> <a name="deviceVendor" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.deviceVendor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#device_vendor VpnSite#device_vendor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#id VpnSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.link"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>>

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#link VpnSite#link}

---

##### `o365Policy`<sup>Optional</sup> <a name="o365Policy" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.o365Policy"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a>

o365_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#o365_policy VpnSite#o365_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#tags VpnSite#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#timeouts VpnSite#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.putLink">putLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.putO365Policy">putO365Policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.resetAddressCidrs">resetAddressCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.resetDeviceModel">resetDeviceModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.resetDeviceVendor">resetDeviceVendor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.resetO365Policy">resetO365Policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnSite.VpnSite.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.vpnSite.VpnSite.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.vpnSite.VpnSite.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.vpnSite.VpnSite.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.vpnSite.VpnSite.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnSite.VpnSite.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.vpnSite.VpnSite.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.vpnSite.VpnSite.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.vpnSite.VpnSite.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.vpnSite.VpnSite.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vpnSite.VpnSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.vpnSite.VpnSite.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.vpnSite.VpnSite.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnSite.VpnSite.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnSite.VpnSite.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnSite.VpnSite.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.vpnSite.VpnSite.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vpnSite.VpnSite.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.vpnSite.VpnSite.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnSite.VpnSite.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLink` <a name="putLink" id="@cdktn/provider-azurerm.vpnSite.VpnSite.putLink"></a>

```java
public void putLink(IResolvable|java.util.List<VpnSiteLink> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnSite.VpnSite.putLink.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>>

---

##### `putO365Policy` <a name="putO365Policy" id="@cdktn/provider-azurerm.vpnSite.VpnSite.putO365Policy"></a>

```java
public void putO365Policy(VpnSiteO365Policy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnSite.VpnSite.putO365Policy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.vpnSite.VpnSite.putTimeouts"></a>

```java
public void putTimeouts(VpnSiteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnSite.VpnSite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>

---

##### `resetAddressCidrs` <a name="resetAddressCidrs" id="@cdktn/provider-azurerm.vpnSite.VpnSite.resetAddressCidrs"></a>

```java
public void resetAddressCidrs()
```

##### `resetDeviceModel` <a name="resetDeviceModel" id="@cdktn/provider-azurerm.vpnSite.VpnSite.resetDeviceModel"></a>

```java
public void resetDeviceModel()
```

##### `resetDeviceVendor` <a name="resetDeviceVendor" id="@cdktn/provider-azurerm.vpnSite.VpnSite.resetDeviceVendor"></a>

```java
public void resetDeviceVendor()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.resetId"></a>

```java
public void resetId()
```

##### `resetLink` <a name="resetLink" id="@cdktn/provider-azurerm.vpnSite.VpnSite.resetLink"></a>

```java
public void resetLink()
```

##### `resetO365Policy` <a name="resetO365Policy" id="@cdktn/provider-azurerm.vpnSite.VpnSite.resetO365Policy"></a>

```java
public void resetO365Policy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.vpnSite.VpnSite.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.vpnSite.VpnSite.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpnSite resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.vpnSite.VpnSite.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSite;

VpnSite.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vpnSite.VpnSite.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.vpnSite.VpnSite.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSite;

VpnSite.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vpnSite.VpnSite.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.vpnSite.VpnSite.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSite;

VpnSite.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vpnSite.VpnSite.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.vpnSite.VpnSite.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSite;

VpnSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpnSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VpnSite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vpnSite.VpnSite.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpnSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpnSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnSite.VpnSite.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VpnSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.link">link</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList">VpnSiteLinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.o365Policy">o365Policy</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference">VpnSiteO365PolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference">VpnSiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.addressCidrsInput">addressCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.deviceModelInput">deviceModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.deviceVendorInput">deviceVendorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.linkInput">linkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.o365PolicyInput">o365PolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.virtualWanIdInput">virtualWanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.addressCidrs">addressCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.deviceModel">deviceModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.deviceVendor">deviceVendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.virtualWanId">virtualWanId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.link"></a>

```java
public VpnSiteLinkList getLink();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList">VpnSiteLinkList</a>

---

##### `o365Policy`<sup>Required</sup> <a name="o365Policy" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.o365Policy"></a>

```java
public VpnSiteO365PolicyOutputReference getO365Policy();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference">VpnSiteO365PolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.timeouts"></a>

```java
public VpnSiteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference">VpnSiteTimeoutsOutputReference</a>

---

##### `addressCidrsInput`<sup>Optional</sup> <a name="addressCidrsInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.addressCidrsInput"></a>

```java
public java.util.List<java.lang.String> getAddressCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deviceModelInput`<sup>Optional</sup> <a name="deviceModelInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.deviceModelInput"></a>

```java
public java.lang.String getDeviceModelInput();
```

- *Type:* java.lang.String

---

##### `deviceVendorInput`<sup>Optional</sup> <a name="deviceVendorInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.deviceVendorInput"></a>

```java
public java.lang.String getDeviceVendorInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.linkInput"></a>

```java
public IResolvable|java.util.List<VpnSiteLink> getLinkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `o365PolicyInput`<sup>Optional</sup> <a name="o365PolicyInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.o365PolicyInput"></a>

```java
public VpnSiteO365Policy getO365PolicyInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.timeoutsInput"></a>

```java
public IResolvable|VpnSiteTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>

---

##### `virtualWanIdInput`<sup>Optional</sup> <a name="virtualWanIdInput" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.virtualWanIdInput"></a>

```java
public java.lang.String getVirtualWanIdInput();
```

- *Type:* java.lang.String

---

##### `addressCidrs`<sup>Required</sup> <a name="addressCidrs" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.addressCidrs"></a>

```java
public java.util.List<java.lang.String> getAddressCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deviceModel`<sup>Required</sup> <a name="deviceModel" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.deviceModel"></a>

```java
public java.lang.String getDeviceModel();
```

- *Type:* java.lang.String

---

##### `deviceVendor`<sup>Required</sup> <a name="deviceVendor" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.deviceVendor"></a>

```java
public java.lang.String getDeviceVendor();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualWanId`<sup>Required</sup> <a name="virtualWanId" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.virtualWanId"></a>

```java
public java.lang.String getVirtualWanId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSite.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.vpnSite.VpnSite.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpnSiteConfig <a name="VpnSiteConfig" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteConfig;

VpnSiteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .virtualWanId(java.lang.String)
//  .addressCidrs(java.util.List<java.lang.String>)
//  .deviceModel(java.lang.String)
//  .deviceVendor(java.lang.String)
//  .id(java.lang.String)
//  .link(IResolvable|java.util.List<VpnSiteLink>)
//  .o365Policy(VpnSiteO365Policy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpnSiteTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#location VpnSite#location}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#name VpnSite#name}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#resource_group_name VpnSite#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.virtualWanId">virtualWanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#virtual_wan_id VpnSite#virtual_wan_id}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.addressCidrs">addressCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#address_cidrs VpnSite#address_cidrs}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.deviceModel">deviceModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#device_model VpnSite#device_model}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.deviceVendor">deviceVendor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#device_vendor VpnSite#device_vendor}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#id VpnSite#id}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.link">link</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>></code> | link block. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.o365Policy">o365Policy</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a></code> | o365_policy block. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#tags VpnSite#tags}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#location VpnSite#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#name VpnSite#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#resource_group_name VpnSite#resource_group_name}.

---

##### `virtualWanId`<sup>Required</sup> <a name="virtualWanId" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.virtualWanId"></a>

```java
public java.lang.String getVirtualWanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#virtual_wan_id VpnSite#virtual_wan_id}.

---

##### `addressCidrs`<sup>Optional</sup> <a name="addressCidrs" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.addressCidrs"></a>

```java
public java.util.List<java.lang.String> getAddressCidrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#address_cidrs VpnSite#address_cidrs}.

---

##### `deviceModel`<sup>Optional</sup> <a name="deviceModel" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.deviceModel"></a>

```java
public java.lang.String getDeviceModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#device_model VpnSite#device_model}.

---

##### `deviceVendor`<sup>Optional</sup> <a name="deviceVendor" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.deviceVendor"></a>

```java
public java.lang.String getDeviceVendor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#device_vendor VpnSite#device_vendor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#id VpnSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.link"></a>

```java
public IResolvable|java.util.List<VpnSiteLink> getLink();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>>

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#link VpnSite#link}

---

##### `o365Policy`<sup>Optional</sup> <a name="o365Policy" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.o365Policy"></a>

```java
public VpnSiteO365Policy getO365Policy();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a>

o365_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#o365_policy VpnSite#o365_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#tags VpnSite#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.vpnSite.VpnSiteConfig.property.timeouts"></a>

```java
public VpnSiteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#timeouts VpnSite#timeouts}

---

### VpnSiteLink <a name="VpnSiteLink" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLink.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteLink;

VpnSiteLink.builder()
    .name(java.lang.String)
//  .bgp(VpnSiteLinkBgp)
//  .fqdn(java.lang.String)
//  .ipAddress(java.lang.String)
//  .providerName(java.lang.String)
//  .speedInMbps(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#name VpnSite#name}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a></code> | bgp block. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#fqdn VpnSite#fqdn}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#ip_address VpnSite#ip_address}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#provider_name VpnSite#provider_name}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.speedInMbps">speedInMbps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#speed_in_mbps VpnSite#speed_in_mbps}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#name VpnSite#name}.

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.bgp"></a>

```java
public VpnSiteLinkBgp getBgp();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#bgp VpnSite#bgp}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#fqdn VpnSite#fqdn}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#ip_address VpnSite#ip_address}.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#provider_name VpnSite#provider_name}.

---

##### `speedInMbps`<sup>Optional</sup> <a name="speedInMbps" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLink.property.speedInMbps"></a>

```java
public java.lang.Number getSpeedInMbps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#speed_in_mbps VpnSite#speed_in_mbps}.

---

### VpnSiteLinkBgp <a name="VpnSiteLinkBgp" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteLinkBgp;

VpnSiteLinkBgp.builder()
    .asn(java.lang.Number)
    .peeringAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp.property.asn">asn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#asn VpnSite#asn}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp.property.peeringAddress">peeringAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#peering_address VpnSite#peering_address}. |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#asn VpnSite#asn}.

---

##### `peeringAddress`<sup>Required</sup> <a name="peeringAddress" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp.property.peeringAddress"></a>

```java
public java.lang.String getPeeringAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#peering_address VpnSite#peering_address}.

---

### VpnSiteO365Policy <a name="VpnSiteO365Policy" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteO365Policy;

VpnSiteO365Policy.builder()
//  .trafficCategory(VpnSiteO365PolicyTrafficCategory)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy.property.trafficCategory">trafficCategory</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a></code> | traffic_category block. |

---

##### `trafficCategory`<sup>Optional</sup> <a name="trafficCategory" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy.property.trafficCategory"></a>

```java
public VpnSiteO365PolicyTrafficCategory getTrafficCategory();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a>

traffic_category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#traffic_category VpnSite#traffic_category}

---

### VpnSiteO365PolicyTrafficCategory <a name="VpnSiteO365PolicyTrafficCategory" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteO365PolicyTrafficCategory;

VpnSiteO365PolicyTrafficCategory.builder()
//  .allowEndpointEnabled(java.lang.Boolean|IResolvable)
//  .defaultEndpointEnabled(java.lang.Boolean|IResolvable)
//  .optimizeEndpointEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.allowEndpointEnabled">allowEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#allow_endpoint_enabled VpnSite#allow_endpoint_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.defaultEndpointEnabled">defaultEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#default_endpoint_enabled VpnSite#default_endpoint_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.optimizeEndpointEnabled">optimizeEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#optimize_endpoint_enabled VpnSite#optimize_endpoint_enabled}. |

---

##### `allowEndpointEnabled`<sup>Optional</sup> <a name="allowEndpointEnabled" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.allowEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAllowEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#allow_endpoint_enabled VpnSite#allow_endpoint_enabled}.

---

##### `defaultEndpointEnabled`<sup>Optional</sup> <a name="defaultEndpointEnabled" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.defaultEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDefaultEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#default_endpoint_enabled VpnSite#default_endpoint_enabled}.

---

##### `optimizeEndpointEnabled`<sup>Optional</sup> <a name="optimizeEndpointEnabled" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.optimizeEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getOptimizeEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#optimize_endpoint_enabled VpnSite#optimize_endpoint_enabled}.

---

### VpnSiteTimeouts <a name="VpnSiteTimeouts" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteTimeouts;

VpnSiteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#create VpnSite#create}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#delete VpnSite#delete}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#read VpnSite#read}. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#update VpnSite#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#create VpnSite#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#delete VpnSite#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#read VpnSite#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/vpn_site#update VpnSite#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnSiteLinkBgpOutputReference <a name="VpnSiteLinkBgpOutputReference" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteLinkBgpOutputReference;

new VpnSiteLinkBgpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.asnInput">asnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.peeringAddressInput">peeringAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.asn">asn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.peeringAddress">peeringAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.asnInput"></a>

```java
public java.lang.Number getAsnInput();
```

- *Type:* java.lang.Number

---

##### `peeringAddressInput`<sup>Optional</sup> <a name="peeringAddressInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.peeringAddressInput"></a>

```java
public java.lang.String getPeeringAddressInput();
```

- *Type:* java.lang.String

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

---

##### `peeringAddress`<sup>Required</sup> <a name="peeringAddress" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.peeringAddress"></a>

```java
public java.lang.String getPeeringAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.internalValue"></a>

```java
public VpnSiteLinkBgp getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a>

---


### VpnSiteLinkList <a name="VpnSiteLinkList" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteLinkList;

new VpnSiteLinkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.get"></a>

```java
public VpnSiteLinkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VpnSiteLink> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>>

---


### VpnSiteLinkOutputReference <a name="VpnSiteLinkOutputReference" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteLinkOutputReference;

new VpnSiteLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.putBgp">putBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetBgp">resetBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetFqdn">resetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetSpeedInMbps">resetSpeedInMbps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBgp` <a name="putBgp" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.putBgp"></a>

```java
public void putBgp(VpnSiteLinkBgp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a>

---

##### `resetBgp` <a name="resetBgp" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetBgp"></a>

```java
public void resetBgp()
```

##### `resetFqdn` <a name="resetFqdn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetFqdn"></a>

```java
public void resetFqdn()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetProviderName"></a>

```java
public void resetProviderName()
```

##### `resetSpeedInMbps` <a name="resetSpeedInMbps" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetSpeedInMbps"></a>

```java
public void resetSpeedInMbps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference">VpnSiteLinkBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.bgpInput">bgpInput</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.speedInMbpsInput">speedInMbpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.speedInMbps">speedInMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.bgp"></a>

```java
public VpnSiteLinkBgpOutputReference getBgp();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference">VpnSiteLinkBgpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `bgpInput`<sup>Optional</sup> <a name="bgpInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.bgpInput"></a>

```java
public VpnSiteLinkBgp getBgpInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a>

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `speedInMbpsInput`<sup>Optional</sup> <a name="speedInMbpsInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.speedInMbpsInput"></a>

```java
public java.lang.Number getSpeedInMbpsInput();
```

- *Type:* java.lang.Number

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `speedInMbps`<sup>Required</sup> <a name="speedInMbps" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.speedInMbps"></a>

```java
public java.lang.Number getSpeedInMbps();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.internalValue"></a>

```java
public IResolvable|VpnSiteLink getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>

---


### VpnSiteO365PolicyOutputReference <a name="VpnSiteO365PolicyOutputReference" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteO365PolicyOutputReference;

new VpnSiteO365PolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.putTrafficCategory">putTrafficCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resetTrafficCategory">resetTrafficCategory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrafficCategory` <a name="putTrafficCategory" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.putTrafficCategory"></a>

```java
public void putTrafficCategory(VpnSiteO365PolicyTrafficCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.putTrafficCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a>

---

##### `resetTrafficCategory` <a name="resetTrafficCategory" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resetTrafficCategory"></a>

```java
public void resetTrafficCategory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.trafficCategory">trafficCategory</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference">VpnSiteO365PolicyTrafficCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.trafficCategoryInput">trafficCategoryInput</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trafficCategory`<sup>Required</sup> <a name="trafficCategory" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.trafficCategory"></a>

```java
public VpnSiteO365PolicyTrafficCategoryOutputReference getTrafficCategory();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference">VpnSiteO365PolicyTrafficCategoryOutputReference</a>

---

##### `trafficCategoryInput`<sup>Optional</sup> <a name="trafficCategoryInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.trafficCategoryInput"></a>

```java
public VpnSiteO365PolicyTrafficCategory getTrafficCategoryInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.internalValue"></a>

```java
public VpnSiteO365Policy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a>

---


### VpnSiteO365PolicyTrafficCategoryOutputReference <a name="VpnSiteO365PolicyTrafficCategoryOutputReference" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteO365PolicyTrafficCategoryOutputReference;

new VpnSiteO365PolicyTrafficCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetAllowEndpointEnabled">resetAllowEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetDefaultEndpointEnabled">resetDefaultEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetOptimizeEndpointEnabled">resetOptimizeEndpointEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowEndpointEnabled` <a name="resetAllowEndpointEnabled" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetAllowEndpointEnabled"></a>

```java
public void resetAllowEndpointEnabled()
```

##### `resetDefaultEndpointEnabled` <a name="resetDefaultEndpointEnabled" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetDefaultEndpointEnabled"></a>

```java
public void resetDefaultEndpointEnabled()
```

##### `resetOptimizeEndpointEnabled` <a name="resetOptimizeEndpointEnabled" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetOptimizeEndpointEnabled"></a>

```java
public void resetOptimizeEndpointEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.allowEndpointEnabledInput">allowEndpointEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.defaultEndpointEnabledInput">defaultEndpointEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.optimizeEndpointEnabledInput">optimizeEndpointEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.allowEndpointEnabled">allowEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.defaultEndpointEnabled">defaultEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.optimizeEndpointEnabled">optimizeEndpointEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowEndpointEnabledInput`<sup>Optional</sup> <a name="allowEndpointEnabledInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.allowEndpointEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowEndpointEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultEndpointEnabledInput`<sup>Optional</sup> <a name="defaultEndpointEnabledInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.defaultEndpointEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultEndpointEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optimizeEndpointEnabledInput`<sup>Optional</sup> <a name="optimizeEndpointEnabledInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.optimizeEndpointEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getOptimizeEndpointEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowEndpointEnabled`<sup>Required</sup> <a name="allowEndpointEnabled" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.allowEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAllowEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultEndpointEnabled`<sup>Required</sup> <a name="defaultEndpointEnabled" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.defaultEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDefaultEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optimizeEndpointEnabled`<sup>Required</sup> <a name="optimizeEndpointEnabled" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.optimizeEndpointEnabled"></a>

```java
public java.lang.Boolean|IResolvable getOptimizeEndpointEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.internalValue"></a>

```java
public VpnSiteO365PolicyTrafficCategory getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a>

---


### VpnSiteTimeoutsOutputReference <a name="VpnSiteTimeoutsOutputReference" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.vpn_site.VpnSiteTimeoutsOutputReference;

new VpnSiteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpnSiteTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>

---



