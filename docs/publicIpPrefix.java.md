# `publicIpPrefix` Submodule <a name="`publicIpPrefix` Submodule" id="@cdktn/provider-azurerm.publicIpPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PublicIpPrefix <a name="PublicIpPrefix" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix azurerm_public_ip_prefix}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer"></a>

```java
import io.cdktn.providers.azurerm.public_ip_prefix.PublicIpPrefix;

PublicIpPrefix.Builder.create(Construct scope, java.lang.String id)
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
//  .customIpPrefixId(java.lang.String)
//  .id(java.lang.String)
//  .ipVersion(java.lang.String)
//  .prefixLength(java.lang.Number)
//  .sku(java.lang.String)
//  .skuTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PublicIpPrefixTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.customIpPrefixId">customIpPrefixId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#custom_ip_prefix_id PublicIpPrefix#custom_ip_prefix_id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.skuTier">skuTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku_tier PublicIpPrefix#sku_tier}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}.

---

##### `customIpPrefixId`<sup>Optional</sup> <a name="customIpPrefixId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.customIpPrefixId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#custom_ip_prefix_id PublicIpPrefix#custom_ip_prefix_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}.

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.prefixLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}.

---

##### `skuTier`<sup>Optional</sup> <a name="skuTier" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.skuTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku_tier PublicIpPrefix#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#timeouts PublicIpPrefix#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetCustomIpPrefixId">resetCustomIpPrefixId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetPrefixLength">resetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSkuTier">resetSkuTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts"></a>

```java
public void putTimeouts(PublicIpPrefixTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

---

##### `resetCustomIpPrefixId` <a name="resetCustomIpPrefixId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetCustomIpPrefixId"></a>

```java
public void resetCustomIpPrefixId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetId"></a>

```java
public void resetId()
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetPrefixLength` <a name="resetPrefixLength" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetPrefixLength"></a>

```java
public void resetPrefixLength()
```

##### `resetSku` <a name="resetSku" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSku"></a>

```java
public void resetSku()
```

##### `resetSkuTier` <a name="resetSkuTier" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSkuTier"></a>

```java
public void resetSkuTier()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZones` <a name="resetZones" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PublicIpPrefix resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.public_ip_prefix.PublicIpPrefix;

PublicIpPrefix.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.public_ip_prefix.PublicIpPrefix;

PublicIpPrefix.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.public_ip_prefix.PublicIpPrefix;

PublicIpPrefix.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.public_ip_prefix.PublicIpPrefix;

PublicIpPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PublicIpPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PublicIpPrefix resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PublicIpPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PublicIpPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PublicIpPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipPrefix">ipPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference">PublicIpPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.customIpPrefixIdInput">customIpPrefixIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLengthInput">prefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuTierInput">skuTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.customIpPrefixId">customIpPrefixId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuTier">skuTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipPrefix`<sup>Required</sup> <a name="ipPrefix" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipPrefix"></a>

```java
public java.lang.String getIpPrefix();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeouts"></a>

```java
public PublicIpPrefixTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference">PublicIpPrefixTimeoutsOutputReference</a>

---

##### `customIpPrefixIdInput`<sup>Optional</sup> <a name="customIpPrefixIdInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.customIpPrefixIdInput"></a>

```java
public java.lang.String getCustomIpPrefixIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersionInput"></a>

```java
public java.lang.String getIpVersionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `prefixLengthInput`<sup>Optional</sup> <a name="prefixLengthInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLengthInput"></a>

```java
public java.lang.Number getPrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `skuTierInput`<sup>Optional</sup> <a name="skuTierInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuTierInput"></a>

```java
public java.lang.String getSkuTierInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeoutsInput"></a>

```java
public IResolvable|PublicIpPrefixTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customIpPrefixId`<sup>Required</sup> <a name="customIpPrefixId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.customIpPrefixId"></a>

```java
public java.lang.String getCustomIpPrefixId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLength"></a>

```java
public java.lang.Number getPrefixLength();
```

- *Type:* java.lang.Number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `skuTier`<sup>Required</sup> <a name="skuTier" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuTier"></a>

```java
public java.lang.String getSkuTier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PublicIpPrefixConfig <a name="PublicIpPrefixConfig" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.public_ip_prefix.PublicIpPrefixConfig;

PublicIpPrefixConfig.builder()
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
//  .customIpPrefixId(java.lang.String)
//  .id(java.lang.String)
//  .ipVersion(java.lang.String)
//  .prefixLength(java.lang.Number)
//  .sku(java.lang.String)
//  .skuTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PublicIpPrefixTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.customIpPrefixId">customIpPrefixId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#custom_ip_prefix_id PublicIpPrefix#custom_ip_prefix_id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.skuTier">skuTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku_tier PublicIpPrefix#sku_tier}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}.

---

##### `customIpPrefixId`<sup>Optional</sup> <a name="customIpPrefixId" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.customIpPrefixId"></a>

```java
public java.lang.String getCustomIpPrefixId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#custom_ip_prefix_id PublicIpPrefix#custom_ip_prefix_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}.

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.prefixLength"></a>

```java
public java.lang.Number getPrefixLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}.

---

##### `skuTier`<sup>Optional</sup> <a name="skuTier" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.skuTier"></a>

```java
public java.lang.String getSkuTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#sku_tier PublicIpPrefix#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.timeouts"></a>

```java
public PublicIpPrefixTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#timeouts PublicIpPrefix#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}.

---

### PublicIpPrefixTimeouts <a name="PublicIpPrefixTimeouts" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.public_ip_prefix.PublicIpPrefixTimeouts;

PublicIpPrefixTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#create PublicIpPrefix#create}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#delete PublicIpPrefix#delete}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#read PublicIpPrefix#read}. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#update PublicIpPrefix#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#create PublicIpPrefix#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#delete PublicIpPrefix#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#read PublicIpPrefix#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/public_ip_prefix#update PublicIpPrefix#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PublicIpPrefixTimeoutsOutputReference <a name="PublicIpPrefixTimeoutsOutputReference" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.public_ip_prefix.PublicIpPrefixTimeoutsOutputReference;

new PublicIpPrefixTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PublicIpPrefixTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

---



