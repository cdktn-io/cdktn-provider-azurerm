# `sentinelDataConnectorAzureAdvancedThreatProtection` Submodule <a name="`sentinelDataConnectorAzureAdvancedThreatProtection` Submodule" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorAzureAdvancedThreatProtection <a name="SentinelDataConnectorAzureAdvancedThreatProtection" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection azurerm_sentinel_data_connector_azure_advanced_threat_protection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtection;

SentinelDataConnectorAzureAdvancedThreatProtection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#timeouts SentinelDataConnectorAzureAdvancedThreatProtection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts"></a>

```java
public void putTimeouts(SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetId"></a>

```java
public void resetId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SentinelDataConnectorAzureAdvancedThreatProtection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtection;

SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtection;

SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtection;

SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtection;

SentinelDataConnectorAzureAdvancedThreatProtection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SentinelDataConnectorAzureAdvancedThreatProtection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SentinelDataConnectorAzureAdvancedThreatProtection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SentinelDataConnectorAzureAdvancedThreatProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SentinelDataConnectorAzureAdvancedThreatProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorAzureAdvancedThreatProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeouts"></a>

```java
public SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeoutsInput"></a>

```java
public IResolvable|SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorAzureAdvancedThreatProtectionConfig <a name="SentinelDataConnectorAzureAdvancedThreatProtectionConfig" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig;

SentinelDataConnectorAzureAdvancedThreatProtectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.timeouts"></a>

```java
public SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#timeouts SentinelDataConnectorAzureAdvancedThreatProtection#timeouts}

---

### SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts <a name="SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts;

SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#create SentinelDataConnectorAzureAdvancedThreatProtection#create}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#delete SentinelDataConnectorAzureAdvancedThreatProtection#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#read SentinelDataConnectorAzureAdvancedThreatProtection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#create SentinelDataConnectorAzureAdvancedThreatProtection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#delete SentinelDataConnectorAzureAdvancedThreatProtection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#read SentinelDataConnectorAzureAdvancedThreatProtection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference <a name="SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference;

new SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

---



