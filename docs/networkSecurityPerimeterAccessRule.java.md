# `networkSecurityPerimeterAccessRule` Submodule <a name="`networkSecurityPerimeterAccessRule` Submodule" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityPerimeterAccessRule <a name="NetworkSecurityPerimeterAccessRule" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule azurerm_network_security_perimeter_access_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_access_rule.NetworkSecurityPerimeterAccessRule;

NetworkSecurityPerimeterAccessRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .direction(java.lang.String)
    .name(java.lang.String)
    .networkSecurityPerimeterProfileId(java.lang.String)
//  .addressPrefixes(java.util.List<java.lang.String>)
//  .fqdns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .serviceTags(java.util.List<java.lang.String>)
//  .subscriptionIds(java.util.List<java.lang.String>)
//  .timeouts(NetworkSecurityPerimeterAccessRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#direction NetworkSecurityPerimeterAccessRule#direction}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#name NetworkSecurityPerimeterAccessRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.networkSecurityPerimeterProfileId">networkSecurityPerimeterProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#network_security_perimeter_profile_id NetworkSecurityPerimeterAccessRule#network_security_perimeter_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.addressPrefixes">addressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#address_prefixes NetworkSecurityPerimeterAccessRule#address_prefixes}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.fqdns">fqdns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#fqdns NetworkSecurityPerimeterAccessRule#fqdns}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#id NetworkSecurityPerimeterAccessRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.serviceTags">serviceTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#service_tags NetworkSecurityPerimeterAccessRule#service_tags}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.subscriptionIds">subscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#subscription_ids NetworkSecurityPerimeterAccessRule#subscription_ids}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#direction NetworkSecurityPerimeterAccessRule#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#name NetworkSecurityPerimeterAccessRule#name}.

---

##### `networkSecurityPerimeterProfileId`<sup>Required</sup> <a name="networkSecurityPerimeterProfileId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.networkSecurityPerimeterProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#network_security_perimeter_profile_id NetworkSecurityPerimeterAccessRule#network_security_perimeter_profile_id}.

---

##### `addressPrefixes`<sup>Optional</sup> <a name="addressPrefixes" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.addressPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#address_prefixes NetworkSecurityPerimeterAccessRule#address_prefixes}.

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.fqdns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#fqdns NetworkSecurityPerimeterAccessRule#fqdns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#id NetworkSecurityPerimeterAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceTags`<sup>Optional</sup> <a name="serviceTags" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.serviceTags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#service_tags NetworkSecurityPerimeterAccessRule#service_tags}.

---

##### `subscriptionIds`<sup>Optional</sup> <a name="subscriptionIds" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.subscriptionIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#subscription_ids NetworkSecurityPerimeterAccessRule#subscription_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#timeouts NetworkSecurityPerimeterAccessRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetAddressPrefixes">resetAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetFqdns">resetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetServiceTags">resetServiceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetSubscriptionIds">resetSubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecurityPerimeterAccessRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a>

---

##### `resetAddressPrefixes` <a name="resetAddressPrefixes" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetAddressPrefixes"></a>

```java
public void resetAddressPrefixes()
```

##### `resetFqdns` <a name="resetFqdns" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetFqdns"></a>

```java
public void resetFqdns()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetId"></a>

```java
public void resetId()
```

##### `resetServiceTags` <a name="resetServiceTags" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetServiceTags"></a>

```java
public void resetServiceTags()
```

##### `resetSubscriptionIds` <a name="resetSubscriptionIds" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetSubscriptionIds"></a>

```java
public void resetSubscriptionIds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityPerimeterAccessRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_access_rule.NetworkSecurityPerimeterAccessRule;

NetworkSecurityPerimeterAccessRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_access_rule.NetworkSecurityPerimeterAccessRule;

NetworkSecurityPerimeterAccessRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_access_rule.NetworkSecurityPerimeterAccessRule;

NetworkSecurityPerimeterAccessRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_access_rule.NetworkSecurityPerimeterAccessRule;

NetworkSecurityPerimeterAccessRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecurityPerimeterAccessRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkSecurityPerimeterAccessRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecurityPerimeterAccessRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecurityPerimeterAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityPerimeterAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference">NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.addressPrefixesInput">addressPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqdnsInput">fqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.networkSecurityPerimeterProfileIdInput">networkSecurityPerimeterProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.serviceTagsInput">serviceTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.subscriptionIdsInput">subscriptionIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.addressPrefixes">addressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqdns">fqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.networkSecurityPerimeterProfileId">networkSecurityPerimeterProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.serviceTags">serviceTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.subscriptionIds">subscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.timeouts"></a>

```java
public NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference">NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference</a>

---

##### `addressPrefixesInput`<sup>Optional</sup> <a name="addressPrefixesInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.addressPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getAddressPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `fqdnsInput`<sup>Optional</sup> <a name="fqdnsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqdnsInput"></a>

```java
public java.util.List<java.lang.String> getFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityPerimeterProfileIdInput`<sup>Optional</sup> <a name="networkSecurityPerimeterProfileIdInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.networkSecurityPerimeterProfileIdInput"></a>

```java
public java.lang.String getNetworkSecurityPerimeterProfileIdInput();
```

- *Type:* java.lang.String

---

##### `serviceTagsInput`<sup>Optional</sup> <a name="serviceTagsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.serviceTagsInput"></a>

```java
public java.util.List<java.lang.String> getServiceTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subscriptionIdsInput`<sup>Optional</sup> <a name="subscriptionIdsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.subscriptionIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubscriptionIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.timeoutsInput"></a>

```java
public IResolvable|NetworkSecurityPerimeterAccessRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a>

---

##### `addressPrefixes`<sup>Required</sup> <a name="addressPrefixes" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.addressPrefixes"></a>

```java
public java.util.List<java.lang.String> getAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqdns"></a>

```java
public java.util.List<java.lang.String> getFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkSecurityPerimeterProfileId`<sup>Required</sup> <a name="networkSecurityPerimeterProfileId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.networkSecurityPerimeterProfileId"></a>

```java
public java.lang.String getNetworkSecurityPerimeterProfileId();
```

- *Type:* java.lang.String

---

##### `serviceTags`<sup>Required</sup> <a name="serviceTags" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.serviceTags"></a>

```java
public java.util.List<java.lang.String> getServiceTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.subscriptionIds"></a>

```java
public java.util.List<java.lang.String> getSubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityPerimeterAccessRuleConfig <a name="NetworkSecurityPerimeterAccessRuleConfig" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_access_rule.NetworkSecurityPerimeterAccessRuleConfig;

NetworkSecurityPerimeterAccessRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .direction(java.lang.String)
    .name(java.lang.String)
    .networkSecurityPerimeterProfileId(java.lang.String)
//  .addressPrefixes(java.util.List<java.lang.String>)
//  .fqdns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .serviceTags(java.util.List<java.lang.String>)
//  .subscriptionIds(java.util.List<java.lang.String>)
//  .timeouts(NetworkSecurityPerimeterAccessRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#direction NetworkSecurityPerimeterAccessRule#direction}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#name NetworkSecurityPerimeterAccessRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.networkSecurityPerimeterProfileId">networkSecurityPerimeterProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#network_security_perimeter_profile_id NetworkSecurityPerimeterAccessRule#network_security_perimeter_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.addressPrefixes">addressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#address_prefixes NetworkSecurityPerimeterAccessRule#address_prefixes}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.fqdns">fqdns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#fqdns NetworkSecurityPerimeterAccessRule#fqdns}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#id NetworkSecurityPerimeterAccessRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.serviceTags">serviceTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#service_tags NetworkSecurityPerimeterAccessRule#service_tags}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.subscriptionIds">subscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#subscription_ids NetworkSecurityPerimeterAccessRule#subscription_ids}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#direction NetworkSecurityPerimeterAccessRule#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#name NetworkSecurityPerimeterAccessRule#name}.

---

##### `networkSecurityPerimeterProfileId`<sup>Required</sup> <a name="networkSecurityPerimeterProfileId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.networkSecurityPerimeterProfileId"></a>

```java
public java.lang.String getNetworkSecurityPerimeterProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#network_security_perimeter_profile_id NetworkSecurityPerimeterAccessRule#network_security_perimeter_profile_id}.

---

##### `addressPrefixes`<sup>Optional</sup> <a name="addressPrefixes" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.addressPrefixes"></a>

```java
public java.util.List<java.lang.String> getAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#address_prefixes NetworkSecurityPerimeterAccessRule#address_prefixes}.

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.fqdns"></a>

```java
public java.util.List<java.lang.String> getFqdns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#fqdns NetworkSecurityPerimeterAccessRule#fqdns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#id NetworkSecurityPerimeterAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceTags`<sup>Optional</sup> <a name="serviceTags" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.serviceTags"></a>

```java
public java.util.List<java.lang.String> getServiceTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#service_tags NetworkSecurityPerimeterAccessRule#service_tags}.

---

##### `subscriptionIds`<sup>Optional</sup> <a name="subscriptionIds" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.subscriptionIds"></a>

```java
public java.util.List<java.lang.String> getSubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#subscription_ids NetworkSecurityPerimeterAccessRule#subscription_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.timeouts"></a>

```java
public NetworkSecurityPerimeterAccessRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#timeouts NetworkSecurityPerimeterAccessRule#timeouts}

---

### NetworkSecurityPerimeterAccessRuleTimeouts <a name="NetworkSecurityPerimeterAccessRuleTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_access_rule.NetworkSecurityPerimeterAccessRuleTimeouts;

NetworkSecurityPerimeterAccessRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#create NetworkSecurityPerimeterAccessRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#delete NetworkSecurityPerimeterAccessRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#read NetworkSecurityPerimeterAccessRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#update NetworkSecurityPerimeterAccessRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#create NetworkSecurityPerimeterAccessRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#delete NetworkSecurityPerimeterAccessRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#read NetworkSecurityPerimeterAccessRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_access_rule#update NetworkSecurityPerimeterAccessRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference <a name="NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_security_perimeter_access_rule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference;

new NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkSecurityPerimeterAccessRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a>

---



