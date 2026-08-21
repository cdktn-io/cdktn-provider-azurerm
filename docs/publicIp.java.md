# `publicIp` Submodule <a name="`publicIp` Submodule" id="@cdktn/provider-azurerm.publicIp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PublicIp <a name="PublicIp" id="@cdktn/provider-azurerm.publicIp.PublicIp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip azurerm_public_ip}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer"></a>

```java
import io.cdktn.providers.azurerm.public_ip.PublicIp;

PublicIp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allocationMethod(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .ddosProtectionMode(java.lang.String)
//  .ddosProtectionPlanId(java.lang.String)
//  .domainNameLabel(java.lang.String)
//  .domainNameLabelScope(java.lang.String)
//  .edgeZone(java.lang.String)
//  .id(java.lang.String)
//  .idleTimeoutInMinutes(java.lang.Number)
//  .ipTags(java.util.Map<java.lang.String, java.lang.String>)
//  .ipVersion(java.lang.String)
//  .publicIpPrefixId(java.lang.String)
//  .reverseFqdn(java.lang.String)
//  .sku(java.lang.String)
//  .skuTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PublicIpTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.allocationMethod">allocationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#allocation_method PublicIp#allocation_method}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#location PublicIp#location}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#name PublicIp#name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#resource_group_name PublicIp#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.ddosProtectionMode">ddosProtectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ddos_protection_mode PublicIp#ddos_protection_mode}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.ddosProtectionPlanId">ddosProtectionPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ddos_protection_plan_id PublicIp#ddos_protection_plan_id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.domainNameLabel">domainNameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#domain_name_label PublicIp#domain_name_label}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.domainNameLabelScope">domainNameLabelScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#domain_name_label_scope PublicIp#domain_name_label_scope}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#edge_zone PublicIp#edge_zone}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#id PublicIp#id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#idle_timeout_in_minutes PublicIp#idle_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.ipTags">ipTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ip_tags PublicIp#ip_tags}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ip_version PublicIp#ip_version}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.publicIpPrefixId">publicIpPrefixId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#public_ip_prefix_id PublicIp#public_ip_prefix_id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.reverseFqdn">reverseFqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#reverse_fqdn PublicIp#reverse_fqdn}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#sku PublicIp#sku}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.skuTier">skuTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#sku_tier PublicIp#sku_tier}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#tags PublicIp#tags}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#zones PublicIp#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocationMethod`<sup>Required</sup> <a name="allocationMethod" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.allocationMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#allocation_method PublicIp#allocation_method}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#location PublicIp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#name PublicIp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#resource_group_name PublicIp#resource_group_name}.

---

##### `ddosProtectionMode`<sup>Optional</sup> <a name="ddosProtectionMode" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.ddosProtectionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ddos_protection_mode PublicIp#ddos_protection_mode}.

---

##### `ddosProtectionPlanId`<sup>Optional</sup> <a name="ddosProtectionPlanId" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.ddosProtectionPlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ddos_protection_plan_id PublicIp#ddos_protection_plan_id}.

---

##### `domainNameLabel`<sup>Optional</sup> <a name="domainNameLabel" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.domainNameLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#domain_name_label PublicIp#domain_name_label}.

---

##### `domainNameLabelScope`<sup>Optional</sup> <a name="domainNameLabelScope" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.domainNameLabelScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#domain_name_label_scope PublicIp#domain_name_label_scope}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.edgeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#edge_zone PublicIp#edge_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#id PublicIp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.idleTimeoutInMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#idle_timeout_in_minutes PublicIp#idle_timeout_in_minutes}.

---

##### `ipTags`<sup>Optional</sup> <a name="ipTags" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.ipTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ip_tags PublicIp#ip_tags}.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ip_version PublicIp#ip_version}.

---

##### `publicIpPrefixId`<sup>Optional</sup> <a name="publicIpPrefixId" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.publicIpPrefixId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#public_ip_prefix_id PublicIp#public_ip_prefix_id}.

---

##### `reverseFqdn`<sup>Optional</sup> <a name="reverseFqdn" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.reverseFqdn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#reverse_fqdn PublicIp#reverse_fqdn}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#sku PublicIp#sku}.

---

##### `skuTier`<sup>Optional</sup> <a name="skuTier" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.skuTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#sku_tier PublicIp#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#tags PublicIp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#timeouts PublicIp#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktn/provider-azurerm.publicIp.PublicIp.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#zones PublicIp#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetDdosProtectionMode">resetDdosProtectionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetDdosProtectionPlanId">resetDdosProtectionPlanId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetDomainNameLabel">resetDomainNameLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetDomainNameLabelScope">resetDomainNameLabelScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetIpTags">resetIpTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetPublicIpPrefixId">resetPublicIpPrefixId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetReverseFqdn">resetReverseFqdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetSkuTier">resetSkuTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.publicIp.PublicIp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.publicIp.PublicIp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.publicIp.PublicIp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.publicIp.PublicIp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.publicIp.PublicIp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.publicIp.PublicIp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.publicIp.PublicIp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.publicIp.PublicIp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.publicIp.PublicIp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.publicIp.PublicIp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.publicIp.PublicIp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.publicIp.PublicIp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.publicIp.PublicIp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.publicIp.PublicIp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.publicIp.PublicIp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIp.PublicIp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIp.PublicIp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.publicIp.PublicIp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIp.PublicIp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.publicIp.PublicIp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.publicIp.PublicIp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.publicIp.PublicIp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.publicIp.PublicIp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIp.PublicIp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.publicIp.PublicIp.putTimeouts"></a>

```java
public void putTimeouts(PublicIpTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.publicIp.PublicIp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a>

---

##### `resetDdosProtectionMode` <a name="resetDdosProtectionMode" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetDdosProtectionMode"></a>

```java
public void resetDdosProtectionMode()
```

##### `resetDdosProtectionPlanId` <a name="resetDdosProtectionPlanId" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetDdosProtectionPlanId"></a>

```java
public void resetDdosProtectionPlanId()
```

##### `resetDomainNameLabel` <a name="resetDomainNameLabel" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetDomainNameLabel"></a>

```java
public void resetDomainNameLabel()
```

##### `resetDomainNameLabelScope` <a name="resetDomainNameLabelScope" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetDomainNameLabelScope"></a>

```java
public void resetDomainNameLabelScope()
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetEdgeZone"></a>

```java
public void resetEdgeZone()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetId"></a>

```java
public void resetId()
```

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetIdleTimeoutInMinutes"></a>

```java
public void resetIdleTimeoutInMinutes()
```

##### `resetIpTags` <a name="resetIpTags" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetIpTags"></a>

```java
public void resetIpTags()
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetPublicIpPrefixId` <a name="resetPublicIpPrefixId" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetPublicIpPrefixId"></a>

```java
public void resetPublicIpPrefixId()
```

##### `resetReverseFqdn` <a name="resetReverseFqdn" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetReverseFqdn"></a>

```java
public void resetReverseFqdn()
```

##### `resetSku` <a name="resetSku" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetSku"></a>

```java
public void resetSku()
```

##### `resetSkuTier` <a name="resetSkuTier" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetSkuTier"></a>

```java
public void resetSkuTier()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZones` <a name="resetZones" id="@cdktn/provider-azurerm.publicIp.PublicIp.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PublicIp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.publicIp.PublicIp.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.public_ip.PublicIp;

PublicIp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.publicIp.PublicIp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.publicIp.PublicIp.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.public_ip.PublicIp;

PublicIp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.publicIp.PublicIp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.publicIp.PublicIp.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.public_ip.PublicIp;

PublicIp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.publicIp.PublicIp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.publicIp.PublicIp.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.public_ip.PublicIp;

PublicIp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PublicIp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PublicIp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.publicIp.PublicIp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.publicIp.PublicIp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PublicIp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.publicIp.PublicIp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PublicIp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIp.PublicIp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PublicIp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference">PublicIpTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.allocationMethodInput">allocationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.ddosProtectionModeInput">ddosProtectionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.ddosProtectionPlanIdInput">ddosProtectionPlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.domainNameLabelInput">domainNameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.domainNameLabelScopeInput">domainNameLabelScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.edgeZoneInput">edgeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.ipTagsInput">ipTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.publicIpPrefixIdInput">publicIpPrefixIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.reverseFqdnInput">reverseFqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.skuTierInput">skuTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.allocationMethod">allocationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.ddosProtectionMode">ddosProtectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.ddosProtectionPlanId">ddosProtectionPlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.domainNameLabel">domainNameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.domainNameLabelScope">domainNameLabelScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.ipTags">ipTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.publicIpPrefixId">publicIpPrefixId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.reverseFqdn">reverseFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.skuTier">skuTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.timeouts"></a>

```java
public PublicIpTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference">PublicIpTimeoutsOutputReference</a>

---

##### `allocationMethodInput`<sup>Optional</sup> <a name="allocationMethodInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.allocationMethodInput"></a>

```java
public java.lang.String getAllocationMethodInput();
```

- *Type:* java.lang.String

---

##### `ddosProtectionModeInput`<sup>Optional</sup> <a name="ddosProtectionModeInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.ddosProtectionModeInput"></a>

```java
public java.lang.String getDdosProtectionModeInput();
```

- *Type:* java.lang.String

---

##### `ddosProtectionPlanIdInput`<sup>Optional</sup> <a name="ddosProtectionPlanIdInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.ddosProtectionPlanIdInput"></a>

```java
public java.lang.String getDdosProtectionPlanIdInput();
```

- *Type:* java.lang.String

---

##### `domainNameLabelInput`<sup>Optional</sup> <a name="domainNameLabelInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.domainNameLabelInput"></a>

```java
public java.lang.String getDomainNameLabelInput();
```

- *Type:* java.lang.String

---

##### `domainNameLabelScopeInput`<sup>Optional</sup> <a name="domainNameLabelScopeInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.domainNameLabelScopeInput"></a>

```java
public java.lang.String getDomainNameLabelScopeInput();
```

- *Type:* java.lang.String

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.edgeZoneInput"></a>

```java
public java.lang.String getEdgeZoneInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.idleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `ipTagsInput`<sup>Optional</sup> <a name="ipTagsInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.ipTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIpTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.ipVersionInput"></a>

```java
public java.lang.String getIpVersionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicIpPrefixIdInput`<sup>Optional</sup> <a name="publicIpPrefixIdInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.publicIpPrefixIdInput"></a>

```java
public java.lang.String getPublicIpPrefixIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `reverseFqdnInput`<sup>Optional</sup> <a name="reverseFqdnInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.reverseFqdnInput"></a>

```java
public java.lang.String getReverseFqdnInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `skuTierInput`<sup>Optional</sup> <a name="skuTierInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.skuTierInput"></a>

```java
public java.lang.String getSkuTierInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.timeoutsInput"></a>

```java
public IResolvable|PublicIpTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocationMethod`<sup>Required</sup> <a name="allocationMethod" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.allocationMethod"></a>

```java
public java.lang.String getAllocationMethod();
```

- *Type:* java.lang.String

---

##### `ddosProtectionMode`<sup>Required</sup> <a name="ddosProtectionMode" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.ddosProtectionMode"></a>

```java
public java.lang.String getDdosProtectionMode();
```

- *Type:* java.lang.String

---

##### `ddosProtectionPlanId`<sup>Required</sup> <a name="ddosProtectionPlanId" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.ddosProtectionPlanId"></a>

```java
public java.lang.String getDdosProtectionPlanId();
```

- *Type:* java.lang.String

---

##### `domainNameLabel`<sup>Required</sup> <a name="domainNameLabel" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.domainNameLabel"></a>

```java
public java.lang.String getDomainNameLabel();
```

- *Type:* java.lang.String

---

##### `domainNameLabelScope`<sup>Required</sup> <a name="domainNameLabelScope" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.domainNameLabelScope"></a>

```java
public java.lang.String getDomainNameLabelScope();
```

- *Type:* java.lang.String

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `ipTags`<sup>Required</sup> <a name="ipTags" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.ipTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIpTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicIpPrefixId`<sup>Required</sup> <a name="publicIpPrefixId" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.publicIpPrefixId"></a>

```java
public java.lang.String getPublicIpPrefixId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `reverseFqdn`<sup>Required</sup> <a name="reverseFqdn" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.reverseFqdn"></a>

```java
public java.lang.String getReverseFqdn();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `skuTier`<sup>Required</sup> <a name="skuTier" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.skuTier"></a>

```java
public java.lang.String getSkuTier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.publicIp.PublicIp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PublicIpConfig <a name="PublicIpConfig" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.public_ip.PublicIpConfig;

PublicIpConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allocationMethod(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .ddosProtectionMode(java.lang.String)
//  .ddosProtectionPlanId(java.lang.String)
//  .domainNameLabel(java.lang.String)
//  .domainNameLabelScope(java.lang.String)
//  .edgeZone(java.lang.String)
//  .id(java.lang.String)
//  .idleTimeoutInMinutes(java.lang.Number)
//  .ipTags(java.util.Map<java.lang.String, java.lang.String>)
//  .ipVersion(java.lang.String)
//  .publicIpPrefixId(java.lang.String)
//  .reverseFqdn(java.lang.String)
//  .sku(java.lang.String)
//  .skuTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PublicIpTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.allocationMethod">allocationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#allocation_method PublicIp#allocation_method}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#location PublicIp#location}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#name PublicIp#name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#resource_group_name PublicIp#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.ddosProtectionMode">ddosProtectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ddos_protection_mode PublicIp#ddos_protection_mode}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.ddosProtectionPlanId">ddosProtectionPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ddos_protection_plan_id PublicIp#ddos_protection_plan_id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.domainNameLabel">domainNameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#domain_name_label PublicIp#domain_name_label}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.domainNameLabelScope">domainNameLabelScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#domain_name_label_scope PublicIp#domain_name_label_scope}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#edge_zone PublicIp#edge_zone}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#id PublicIp#id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#idle_timeout_in_minutes PublicIp#idle_timeout_in_minutes}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.ipTags">ipTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ip_tags PublicIp#ip_tags}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ip_version PublicIp#ip_version}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.publicIpPrefixId">publicIpPrefixId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#public_ip_prefix_id PublicIp#public_ip_prefix_id}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.reverseFqdn">reverseFqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#reverse_fqdn PublicIp#reverse_fqdn}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#sku PublicIp#sku}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.skuTier">skuTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#sku_tier PublicIp#sku_tier}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#tags PublicIp#tags}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#zones PublicIp#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocationMethod`<sup>Required</sup> <a name="allocationMethod" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.allocationMethod"></a>

```java
public java.lang.String getAllocationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#allocation_method PublicIp#allocation_method}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#location PublicIp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#name PublicIp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#resource_group_name PublicIp#resource_group_name}.

---

##### `ddosProtectionMode`<sup>Optional</sup> <a name="ddosProtectionMode" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.ddosProtectionMode"></a>

```java
public java.lang.String getDdosProtectionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ddos_protection_mode PublicIp#ddos_protection_mode}.

---

##### `ddosProtectionPlanId`<sup>Optional</sup> <a name="ddosProtectionPlanId" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.ddosProtectionPlanId"></a>

```java
public java.lang.String getDdosProtectionPlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ddos_protection_plan_id PublicIp#ddos_protection_plan_id}.

---

##### `domainNameLabel`<sup>Optional</sup> <a name="domainNameLabel" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.domainNameLabel"></a>

```java
public java.lang.String getDomainNameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#domain_name_label PublicIp#domain_name_label}.

---

##### `domainNameLabelScope`<sup>Optional</sup> <a name="domainNameLabelScope" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.domainNameLabelScope"></a>

```java
public java.lang.String getDomainNameLabelScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#domain_name_label_scope PublicIp#domain_name_label_scope}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#edge_zone PublicIp#edge_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#id PublicIp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#idle_timeout_in_minutes PublicIp#idle_timeout_in_minutes}.

---

##### `ipTags`<sup>Optional</sup> <a name="ipTags" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.ipTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIpTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ip_tags PublicIp#ip_tags}.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#ip_version PublicIp#ip_version}.

---

##### `publicIpPrefixId`<sup>Optional</sup> <a name="publicIpPrefixId" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.publicIpPrefixId"></a>

```java
public java.lang.String getPublicIpPrefixId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#public_ip_prefix_id PublicIp#public_ip_prefix_id}.

---

##### `reverseFqdn`<sup>Optional</sup> <a name="reverseFqdn" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.reverseFqdn"></a>

```java
public java.lang.String getReverseFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#reverse_fqdn PublicIp#reverse_fqdn}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#sku PublicIp#sku}.

---

##### `skuTier`<sup>Optional</sup> <a name="skuTier" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.skuTier"></a>

```java
public java.lang.String getSkuTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#sku_tier PublicIp#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#tags PublicIp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.timeouts"></a>

```java
public PublicIpTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#timeouts PublicIp#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktn/provider-azurerm.publicIp.PublicIpConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#zones PublicIp#zones}.

---

### PublicIpTimeouts <a name="PublicIpTimeouts" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.public_ip.PublicIpTimeouts;

PublicIpTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#create PublicIp#create}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#delete PublicIp#delete}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#read PublicIp#read}. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#update PublicIp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#create PublicIp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#delete PublicIp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#read PublicIp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/public_ip#update PublicIp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PublicIpTimeoutsOutputReference <a name="PublicIpTimeoutsOutputReference" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.public_ip.PublicIpTimeoutsOutputReference;

new PublicIpTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PublicIpTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a>

---



