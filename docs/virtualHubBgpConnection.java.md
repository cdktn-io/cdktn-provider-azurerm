# `virtualHubBgpConnection` Submodule <a name="`virtualHubBgpConnection` Submodule" id="@cdktn/provider-azurerm.virtualHubBgpConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubBgpConnection <a name="VirtualHubBgpConnection" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection azurerm_virtual_hub_bgp_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_bgp_connection.VirtualHubBgpConnection;

VirtualHubBgpConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .peerAsn(java.lang.Number)
    .peerIp(java.lang.String)
    .virtualHubId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VirtualHubBgpConnectionTimeouts)
//  .virtualNetworkConnectionId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#name VirtualHubBgpConnection#name}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#peer_asn VirtualHubBgpConnection#peer_asn}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.peerIp">peerIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#peer_ip VirtualHubBgpConnection#peer_ip}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.virtualHubId">virtualHubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#virtual_hub_id VirtualHubBgpConnection#virtual_hub_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#id VirtualHubBgpConnection#id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts">VirtualHubBgpConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.virtualNetworkConnectionId">virtualNetworkConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#virtual_network_connection_id VirtualHubBgpConnection#virtual_network_connection_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#name VirtualHubBgpConnection#name}.

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.peerAsn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#peer_asn VirtualHubBgpConnection#peer_asn}.

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.peerIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#peer_ip VirtualHubBgpConnection#peer_ip}.

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.virtualHubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#virtual_hub_id VirtualHubBgpConnection#virtual_hub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#id VirtualHubBgpConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts">VirtualHubBgpConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#timeouts VirtualHubBgpConnection#timeouts}

---

##### `virtualNetworkConnectionId`<sup>Optional</sup> <a name="virtualNetworkConnectionId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.Initializer.parameter.virtualNetworkConnectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#virtual_network_connection_id VirtualHubBgpConnection#virtual_network_connection_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.resetVirtualNetworkConnectionId">resetVirtualNetworkConnectionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.putTimeouts"></a>

```java
public void putTimeouts(VirtualHubBgpConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts">VirtualHubBgpConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualNetworkConnectionId` <a name="resetVirtualNetworkConnectionId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.resetVirtualNetworkConnectionId"></a>

```java
public void resetVirtualNetworkConnectionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VirtualHubBgpConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_bgp_connection.VirtualHubBgpConnection;

VirtualHubBgpConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_bgp_connection.VirtualHubBgpConnection;

VirtualHubBgpConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_bgp_connection.VirtualHubBgpConnection;

VirtualHubBgpConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_bgp_connection.VirtualHubBgpConnection;

VirtualHubBgpConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualHubBgpConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VirtualHubBgpConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualHubBgpConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualHubBgpConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VirtualHubBgpConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference">VirtualHubBgpConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.peerAsnInput">peerAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.peerIpInput">peerIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts">VirtualHubBgpConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.virtualHubIdInput">virtualHubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.virtualNetworkConnectionIdInput">virtualNetworkConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.peerIp">peerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.virtualHubId">virtualHubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.virtualNetworkConnectionId">virtualNetworkConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.timeouts"></a>

```java
public VirtualHubBgpConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference">VirtualHubBgpConnectionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.peerAsnInput"></a>

```java
public java.lang.Number getPeerAsnInput();
```

- *Type:* java.lang.Number

---

##### `peerIpInput`<sup>Optional</sup> <a name="peerIpInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.peerIpInput"></a>

```java
public java.lang.String getPeerIpInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.timeoutsInput"></a>

```java
public IResolvable|VirtualHubBgpConnectionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts">VirtualHubBgpConnectionTimeouts</a>

---

##### `virtualHubIdInput`<sup>Optional</sup> <a name="virtualHubIdInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.virtualHubIdInput"></a>

```java
public java.lang.String getVirtualHubIdInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkConnectionIdInput`<sup>Optional</sup> <a name="virtualNetworkConnectionIdInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.virtualNetworkConnectionIdInput"></a>

```java
public java.lang.String getVirtualNetworkConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.peerIp"></a>

```java
public java.lang.String getPeerIp();
```

- *Type:* java.lang.String

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.virtualHubId"></a>

```java
public java.lang.String getVirtualHubId();
```

- *Type:* java.lang.String

---

##### `virtualNetworkConnectionId`<sup>Required</sup> <a name="virtualNetworkConnectionId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.virtualNetworkConnectionId"></a>

```java
public java.lang.String getVirtualNetworkConnectionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubBgpConnectionConfig <a name="VirtualHubBgpConnectionConfig" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_bgp_connection.VirtualHubBgpConnectionConfig;

VirtualHubBgpConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .peerAsn(java.lang.Number)
    .peerIp(java.lang.String)
    .virtualHubId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VirtualHubBgpConnectionTimeouts)
//  .virtualNetworkConnectionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#name VirtualHubBgpConnection#name}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#peer_asn VirtualHubBgpConnection#peer_asn}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.peerIp">peerIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#peer_ip VirtualHubBgpConnection#peer_ip}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.virtualHubId">virtualHubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#virtual_hub_id VirtualHubBgpConnection#virtual_hub_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#id VirtualHubBgpConnection#id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts">VirtualHubBgpConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.virtualNetworkConnectionId">virtualNetworkConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#virtual_network_connection_id VirtualHubBgpConnection#virtual_network_connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#name VirtualHubBgpConnection#name}.

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#peer_asn VirtualHubBgpConnection#peer_asn}.

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.peerIp"></a>

```java
public java.lang.String getPeerIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#peer_ip VirtualHubBgpConnection#peer_ip}.

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.virtualHubId"></a>

```java
public java.lang.String getVirtualHubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#virtual_hub_id VirtualHubBgpConnection#virtual_hub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#id VirtualHubBgpConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.timeouts"></a>

```java
public VirtualHubBgpConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts">VirtualHubBgpConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#timeouts VirtualHubBgpConnection#timeouts}

---

##### `virtualNetworkConnectionId`<sup>Optional</sup> <a name="virtualNetworkConnectionId" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionConfig.property.virtualNetworkConnectionId"></a>

```java
public java.lang.String getVirtualNetworkConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#virtual_network_connection_id VirtualHubBgpConnection#virtual_network_connection_id}.

---

### VirtualHubBgpConnectionTimeouts <a name="VirtualHubBgpConnectionTimeouts" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_bgp_connection.VirtualHubBgpConnectionTimeouts;

VirtualHubBgpConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#create VirtualHubBgpConnection#create}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#delete VirtualHubBgpConnection#delete}. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#read VirtualHubBgpConnection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#create VirtualHubBgpConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#delete VirtualHubBgpConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/virtual_hub_bgp_connection#read VirtualHubBgpConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubBgpConnectionTimeoutsOutputReference <a name="VirtualHubBgpConnectionTimeoutsOutputReference" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_hub_bgp_connection.VirtualHubBgpConnectionTimeoutsOutputReference;

new VirtualHubBgpConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts">VirtualHubBgpConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VirtualHubBgpConnectionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualHubBgpConnection.VirtualHubBgpConnectionTimeouts">VirtualHubBgpConnectionTimeouts</a>

---



