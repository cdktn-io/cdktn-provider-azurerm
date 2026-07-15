# `sentinelDataConnectorMicrosoftThreatIntelligence` Submodule <a name="`sentinelDataConnectorMicrosoftThreatIntelligence` Submodule" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftThreatIntelligence <a name="SentinelDataConnectorMicrosoftThreatIntelligence" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence azurerm_sentinel_data_connector_microsoft_threat_intelligence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_microsoft_threat_intelligence.SentinelDataConnectorMicrosoftThreatIntelligence;

SentinelDataConnectorMicrosoftThreatIntelligence.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .logAnalyticsWorkspaceId(java.lang.String)
    .microsoftEmergingThreatFeedLookbackDate(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.microsoftEmergingThreatFeedLookbackDate">microsoftEmergingThreatFeedLookbackDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}.

---

##### `microsoftEmergingThreatFeedLookbackDate`<sup>Required</sup> <a name="microsoftEmergingThreatFeedLookbackDate" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.microsoftEmergingThreatFeedLookbackDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#timeouts SentinelDataConnectorMicrosoftThreatIntelligence#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts"></a>

```java
public void putTimeouts(SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetId"></a>

```java
public void resetId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SentinelDataConnectorMicrosoftThreatIntelligence resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_microsoft_threat_intelligence.SentinelDataConnectorMicrosoftThreatIntelligence;

SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_microsoft_threat_intelligence.SentinelDataConnectorMicrosoftThreatIntelligence;

SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_microsoft_threat_intelligence.SentinelDataConnectorMicrosoftThreatIntelligence;

SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_microsoft_threat_intelligence.SentinelDataConnectorMicrosoftThreatIntelligence;

SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SentinelDataConnectorMicrosoftThreatIntelligence resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SentinelDataConnectorMicrosoftThreatIntelligence to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SentinelDataConnectorMicrosoftThreatIntelligence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorMicrosoftThreatIntelligence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDateInput">microsoftEmergingThreatFeedLookbackDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDate">microsoftEmergingThreatFeedLookbackDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeouts"></a>

```java
public SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `microsoftEmergingThreatFeedLookbackDateInput`<sup>Optional</sup> <a name="microsoftEmergingThreatFeedLookbackDateInput" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDateInput"></a>

```java
public java.lang.String getMicrosoftEmergingThreatFeedLookbackDateInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeoutsInput"></a>

```java
public IResolvable|SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `microsoftEmergingThreatFeedLookbackDate`<sup>Required</sup> <a name="microsoftEmergingThreatFeedLookbackDate" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDate"></a>

```java
public java.lang.String getMicrosoftEmergingThreatFeedLookbackDate();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftThreatIntelligenceConfig <a name="SentinelDataConnectorMicrosoftThreatIntelligenceConfig" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_microsoft_threat_intelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig;

SentinelDataConnectorMicrosoftThreatIntelligenceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .logAnalyticsWorkspaceId(java.lang.String)
    .microsoftEmergingThreatFeedLookbackDate(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.microsoftEmergingThreatFeedLookbackDate">microsoftEmergingThreatFeedLookbackDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}.

---

##### `microsoftEmergingThreatFeedLookbackDate`<sup>Required</sup> <a name="microsoftEmergingThreatFeedLookbackDate" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.microsoftEmergingThreatFeedLookbackDate"></a>

```java
public java.lang.String getMicrosoftEmergingThreatFeedLookbackDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.timeouts"></a>

```java
public SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#timeouts SentinelDataConnectorMicrosoftThreatIntelligence#timeouts}

---

### SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts <a name="SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_microsoft_threat_intelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts;

SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_data_connector_microsoft_threat_intelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference;

new SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

---



