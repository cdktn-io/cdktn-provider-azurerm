# `eventgridPartnerConfiguration` Submodule <a name="`eventgridPartnerConfiguration` Submodule" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridPartnerConfiguration <a name="EventgridPartnerConfiguration" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration azurerm_eventgrid_partner_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfiguration;

EventgridPartnerConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceGroupName(java.lang.String)
//  .defaultMaximumExpirationTimeInDays(java.lang.Number)
//  .id(java.lang.String)
//  .partnerAuthorization(IResolvable|java.util.List<EventgridPartnerConfigurationPartnerAuthorization>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EventgridPartnerConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#resource_group_name EventgridPartnerConfiguration#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.defaultMaximumExpirationTimeInDays">defaultMaximumExpirationTimeInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#default_maximum_expiration_time_in_days EventgridPartnerConfiguration#default_maximum_expiration_time_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#id EventgridPartnerConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.partnerAuthorization">partnerAuthorization</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>></code> | partner_authorization block. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#tags EventgridPartnerConfiguration#tags}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#resource_group_name EventgridPartnerConfiguration#resource_group_name}.

---

##### `defaultMaximumExpirationTimeInDays`<sup>Optional</sup> <a name="defaultMaximumExpirationTimeInDays" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.defaultMaximumExpirationTimeInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#default_maximum_expiration_time_in_days EventgridPartnerConfiguration#default_maximum_expiration_time_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#id EventgridPartnerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partnerAuthorization`<sup>Optional</sup> <a name="partnerAuthorization" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.partnerAuthorization"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>>

partner_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#partner_authorization EventgridPartnerConfiguration#partner_authorization}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#tags EventgridPartnerConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#timeouts EventgridPartnerConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putPartnerAuthorization">putPartnerAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetDefaultMaximumExpirationTimeInDays">resetDefaultMaximumExpirationTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetPartnerAuthorization">resetPartnerAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartnerAuthorization` <a name="putPartnerAuthorization" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putPartnerAuthorization"></a>

```java
public void putPartnerAuthorization(IResolvable|java.util.List<EventgridPartnerConfigurationPartnerAuthorization> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putPartnerAuthorization.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putTimeouts"></a>

```java
public void putTimeouts(EventgridPartnerConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

---

##### `resetDefaultMaximumExpirationTimeInDays` <a name="resetDefaultMaximumExpirationTimeInDays" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetDefaultMaximumExpirationTimeInDays"></a>

```java
public void resetDefaultMaximumExpirationTimeInDays()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetPartnerAuthorization` <a name="resetPartnerAuthorization" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetPartnerAuthorization"></a>

```java
public void resetPartnerAuthorization()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventgridPartnerConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfiguration;

EventgridPartnerConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfiguration;

EventgridPartnerConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfiguration;

EventgridPartnerConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfiguration;

EventgridPartnerConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventgridPartnerConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EventgridPartnerConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventgridPartnerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventgridPartnerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EventgridPartnerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorization">partnerAuthorization</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList">EventgridPartnerConfigurationPartnerAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference">EventgridPartnerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDaysInput">defaultMaximumExpirationTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorizationInput">partnerAuthorizationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDays">defaultMaximumExpirationTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `partnerAuthorization`<sup>Required</sup> <a name="partnerAuthorization" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorization"></a>

```java
public EventgridPartnerConfigurationPartnerAuthorizationList getPartnerAuthorization();
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList">EventgridPartnerConfigurationPartnerAuthorizationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeouts"></a>

```java
public EventgridPartnerConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference">EventgridPartnerConfigurationTimeoutsOutputReference</a>

---

##### `defaultMaximumExpirationTimeInDaysInput`<sup>Optional</sup> <a name="defaultMaximumExpirationTimeInDaysInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDaysInput"></a>

```java
public java.lang.Number getDefaultMaximumExpirationTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `partnerAuthorizationInput`<sup>Optional</sup> <a name="partnerAuthorizationInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.partnerAuthorizationInput"></a>

```java
public IResolvable|java.util.List<EventgridPartnerConfigurationPartnerAuthorization> getPartnerAuthorizationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.timeoutsInput"></a>

```java
public IResolvable|EventgridPartnerConfigurationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

---

##### `defaultMaximumExpirationTimeInDays`<sup>Required</sup> <a name="defaultMaximumExpirationTimeInDays" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.defaultMaximumExpirationTimeInDays"></a>

```java
public java.lang.Number getDefaultMaximumExpirationTimeInDays();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridPartnerConfigurationConfig <a name="EventgridPartnerConfigurationConfig" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfigurationConfig;

EventgridPartnerConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceGroupName(java.lang.String)
//  .defaultMaximumExpirationTimeInDays(java.lang.Number)
//  .id(java.lang.String)
//  .partnerAuthorization(IResolvable|java.util.List<EventgridPartnerConfigurationPartnerAuthorization>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EventgridPartnerConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#resource_group_name EventgridPartnerConfiguration#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.defaultMaximumExpirationTimeInDays">defaultMaximumExpirationTimeInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#default_maximum_expiration_time_in_days EventgridPartnerConfiguration#default_maximum_expiration_time_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#id EventgridPartnerConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.partnerAuthorization">partnerAuthorization</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>></code> | partner_authorization block. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#tags EventgridPartnerConfiguration#tags}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#resource_group_name EventgridPartnerConfiguration#resource_group_name}.

---

##### `defaultMaximumExpirationTimeInDays`<sup>Optional</sup> <a name="defaultMaximumExpirationTimeInDays" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.defaultMaximumExpirationTimeInDays"></a>

```java
public java.lang.Number getDefaultMaximumExpirationTimeInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#default_maximum_expiration_time_in_days EventgridPartnerConfiguration#default_maximum_expiration_time_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#id EventgridPartnerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partnerAuthorization`<sup>Optional</sup> <a name="partnerAuthorization" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.partnerAuthorization"></a>

```java
public IResolvable|java.util.List<EventgridPartnerConfigurationPartnerAuthorization> getPartnerAuthorization();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>>

partner_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#partner_authorization EventgridPartnerConfiguration#partner_authorization}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#tags EventgridPartnerConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationConfig.property.timeouts"></a>

```java
public EventgridPartnerConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#timeouts EventgridPartnerConfiguration#timeouts}

---

### EventgridPartnerConfigurationPartnerAuthorization <a name="EventgridPartnerConfigurationPartnerAuthorization" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.Initializer"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfigurationPartnerAuthorization;

EventgridPartnerConfigurationPartnerAuthorization.builder()
    .partnerName(java.lang.String)
    .partnerRegistrationId(java.lang.String)
//  .authorizationExpirationTimeInUtc(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerName">partnerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#partner_name EventgridPartnerConfiguration#partner_name}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerRegistrationId">partnerRegistrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#partner_registration_id EventgridPartnerConfiguration#partner_registration_id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.authorizationExpirationTimeInUtc">authorizationExpirationTimeInUtc</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#authorization_expiration_time_in_utc EventgridPartnerConfiguration#authorization_expiration_time_in_utc}. |

---

##### `partnerName`<sup>Required</sup> <a name="partnerName" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerName"></a>

```java
public java.lang.String getPartnerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#partner_name EventgridPartnerConfiguration#partner_name}.

---

##### `partnerRegistrationId`<sup>Required</sup> <a name="partnerRegistrationId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.partnerRegistrationId"></a>

```java
public java.lang.String getPartnerRegistrationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#partner_registration_id EventgridPartnerConfiguration#partner_registration_id}.

---

##### `authorizationExpirationTimeInUtc`<sup>Optional</sup> <a name="authorizationExpirationTimeInUtc" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization.property.authorizationExpirationTimeInUtc"></a>

```java
public java.lang.String getAuthorizationExpirationTimeInUtc();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#authorization_expiration_time_in_utc EventgridPartnerConfiguration#authorization_expiration_time_in_utc}.

---

### EventgridPartnerConfigurationTimeouts <a name="EventgridPartnerConfigurationTimeouts" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfigurationTimeouts;

EventgridPartnerConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#create EventgridPartnerConfiguration#create}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#delete EventgridPartnerConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#read EventgridPartnerConfiguration#read}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#update EventgridPartnerConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#create EventgridPartnerConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#delete EventgridPartnerConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#read EventgridPartnerConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/eventgrid_partner_configuration#update EventgridPartnerConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridPartnerConfigurationPartnerAuthorizationList <a name="EventgridPartnerConfigurationPartnerAuthorizationList" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfigurationPartnerAuthorizationList;

new EventgridPartnerConfigurationPartnerAuthorizationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.get"></a>

```java
public EventgridPartnerConfigurationPartnerAuthorizationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventgridPartnerConfigurationPartnerAuthorization> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>>

---


### EventgridPartnerConfigurationPartnerAuthorizationOutputReference <a name="EventgridPartnerConfigurationPartnerAuthorizationOutputReference" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference;

new EventgridPartnerConfigurationPartnerAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resetAuthorizationExpirationTimeInUtc">resetAuthorizationExpirationTimeInUtc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationExpirationTimeInUtc` <a name="resetAuthorizationExpirationTimeInUtc" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.resetAuthorizationExpirationTimeInUtc"></a>

```java
public void resetAuthorizationExpirationTimeInUtc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtcInput">authorizationExpirationTimeInUtcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerNameInput">partnerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationIdInput">partnerRegistrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtc">authorizationExpirationTimeInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerName">partnerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationId">partnerRegistrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationExpirationTimeInUtcInput`<sup>Optional</sup> <a name="authorizationExpirationTimeInUtcInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtcInput"></a>

```java
public java.lang.String getAuthorizationExpirationTimeInUtcInput();
```

- *Type:* java.lang.String

---

##### `partnerNameInput`<sup>Optional</sup> <a name="partnerNameInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerNameInput"></a>

```java
public java.lang.String getPartnerNameInput();
```

- *Type:* java.lang.String

---

##### `partnerRegistrationIdInput`<sup>Optional</sup> <a name="partnerRegistrationIdInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationIdInput"></a>

```java
public java.lang.String getPartnerRegistrationIdInput();
```

- *Type:* java.lang.String

---

##### `authorizationExpirationTimeInUtc`<sup>Required</sup> <a name="authorizationExpirationTimeInUtc" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.authorizationExpirationTimeInUtc"></a>

```java
public java.lang.String getAuthorizationExpirationTimeInUtc();
```

- *Type:* java.lang.String

---

##### `partnerName`<sup>Required</sup> <a name="partnerName" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerName"></a>

```java
public java.lang.String getPartnerName();
```

- *Type:* java.lang.String

---

##### `partnerRegistrationId`<sup>Required</sup> <a name="partnerRegistrationId" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.partnerRegistrationId"></a>

```java
public java.lang.String getPartnerRegistrationId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorizationOutputReference.property.internalValue"></a>

```java
public IResolvable|EventgridPartnerConfigurationPartnerAuthorization getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationPartnerAuthorization">EventgridPartnerConfigurationPartnerAuthorization</a>

---


### EventgridPartnerConfigurationTimeoutsOutputReference <a name="EventgridPartnerConfigurationTimeoutsOutputReference" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.eventgrid_partner_configuration.EventgridPartnerConfigurationTimeoutsOutputReference;

new EventgridPartnerConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|EventgridPartnerConfigurationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridPartnerConfiguration.EventgridPartnerConfigurationTimeouts">EventgridPartnerConfigurationTimeouts</a>

---



