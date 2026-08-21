# `sentinelAlertRuleNrt` Submodule <a name="`sentinelAlertRuleNrt` Submodule" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleNrt <a name="SentinelAlertRuleNrt" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt azurerm_sentinel_alert_rule_nrt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrt;

SentinelAlertRuleNrt.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .eventGrouping(SentinelAlertRuleNrtEventGrouping)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
    .severity(java.lang.String)
//  .alertDetailsOverride(IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverride>)
//  .alertRuleTemplateGuid(java.lang.String)
//  .alertRuleTemplateVersion(java.lang.String)
//  .customDetails(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .entityMapping(IResolvable|java.util.List<SentinelAlertRuleNrtEntityMapping>)
//  .id(java.lang.String)
//  .incident(SentinelAlertRuleNrtIncident)
//  .sentinelEntityMapping(IResolvable|java.util.List<SentinelAlertRuleNrtSentinelEntityMapping>)
//  .suppressionDuration(java.lang.String)
//  .suppressionEnabled(java.lang.Boolean|IResolvable)
//  .tactics(java.util.List<java.lang.String>)
//  .techniques(java.util.List<java.lang.String>)
//  .timeouts(SentinelAlertRuleNrtTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#display_name SentinelAlertRuleNrt#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.eventGrouping">eventGrouping</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | event_grouping block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#log_analytics_workspace_id SentinelAlertRuleNrt#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#query SentinelAlertRuleNrt#query}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#severity SentinelAlertRuleNrt#severity}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.alertDetailsOverride">alertDetailsOverride</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>></code> | alert_details_override block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_guid SentinelAlertRuleNrt#alert_rule_template_guid}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.alertRuleTemplateVersion">alertRuleTemplateVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_version SentinelAlertRuleNrt#alert_rule_template_version}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.customDetails">customDetails</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#custom_details SentinelAlertRuleNrt#custom_details}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#description SentinelAlertRuleNrt#description}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.entityMapping">entityMapping</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>></code> | entity_mapping block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#id SentinelAlertRuleNrt#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.incident">incident</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | incident block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.sentinelEntityMapping">sentinelEntityMapping</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>></code> | sentinel_entity_mapping block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.suppressionDuration">suppressionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#suppression_duration SentinelAlertRuleNrt#suppression_duration}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.suppressionEnabled">suppressionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#suppression_enabled SentinelAlertRuleNrt#suppression_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.tactics">tactics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#tactics SentinelAlertRuleNrt#tactics}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.techniques">techniques</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#techniques SentinelAlertRuleNrt#techniques}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#display_name SentinelAlertRuleNrt#display_name}.

---

##### `eventGrouping`<sup>Required</sup> <a name="eventGrouping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.eventGrouping"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

event_grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#event_grouping SentinelAlertRuleNrt#event_grouping}

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#log_analytics_workspace_id SentinelAlertRuleNrt#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.query"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#query SentinelAlertRuleNrt#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#severity SentinelAlertRuleNrt#severity}.

---

##### `alertDetailsOverride`<sup>Optional</sup> <a name="alertDetailsOverride" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.alertDetailsOverride"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>>

alert_details_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_details_override SentinelAlertRuleNrt#alert_details_override}

---

##### `alertRuleTemplateGuid`<sup>Optional</sup> <a name="alertRuleTemplateGuid" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.alertRuleTemplateGuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_guid SentinelAlertRuleNrt#alert_rule_template_guid}.

---

##### `alertRuleTemplateVersion`<sup>Optional</sup> <a name="alertRuleTemplateVersion" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.alertRuleTemplateVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_version SentinelAlertRuleNrt#alert_rule_template_version}.

---

##### `customDetails`<sup>Optional</sup> <a name="customDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.customDetails"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#custom_details SentinelAlertRuleNrt#custom_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#description SentinelAlertRuleNrt#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}.

---

##### `entityMapping`<sup>Optional</sup> <a name="entityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.entityMapping"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>>

entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#entity_mapping SentinelAlertRuleNrt#entity_mapping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#id SentinelAlertRuleNrt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incident`<sup>Optional</sup> <a name="incident" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.incident"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#incident SentinelAlertRuleNrt#incident}

---

##### `sentinelEntityMapping`<sup>Optional</sup> <a name="sentinelEntityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.sentinelEntityMapping"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>>

sentinel_entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#sentinel_entity_mapping SentinelAlertRuleNrt#sentinel_entity_mapping}

---

##### `suppressionDuration`<sup>Optional</sup> <a name="suppressionDuration" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.suppressionDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#suppression_duration SentinelAlertRuleNrt#suppression_duration}.

---

##### `suppressionEnabled`<sup>Optional</sup> <a name="suppressionEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.suppressionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#suppression_enabled SentinelAlertRuleNrt#suppression_enabled}.

---

##### `tactics`<sup>Optional</sup> <a name="tactics" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.tactics"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#tactics SentinelAlertRuleNrt#tactics}.

---

##### `techniques`<sup>Optional</sup> <a name="techniques" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.techniques"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#techniques SentinelAlertRuleNrt#techniques}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#timeouts SentinelAlertRuleNrt#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putAlertDetailsOverride">putAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEntityMapping">putEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEventGrouping">putEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putIncident">putIncident</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putSentinelEntityMapping">putSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertDetailsOverride">resetAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateGuid">resetAlertRuleTemplateGuid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateVersion">resetAlertRuleTemplateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetCustomDetails">resetCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEntityMapping">resetEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetIncident">resetIncident</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSentinelEntityMapping">resetSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionDuration">resetSuppressionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionEnabled">resetSuppressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTactics">resetTactics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTechniques">resetTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlertDetailsOverride` <a name="putAlertDetailsOverride" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putAlertDetailsOverride"></a>

```java
public void putAlertDetailsOverride(IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putAlertDetailsOverride.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>>

---

##### `putEntityMapping` <a name="putEntityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEntityMapping"></a>

```java
public void putEntityMapping(IResolvable|java.util.List<SentinelAlertRuleNrtEntityMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEntityMapping.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>>

---

##### `putEventGrouping` <a name="putEventGrouping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEventGrouping"></a>

```java
public void putEventGrouping(SentinelAlertRuleNrtEventGrouping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putEventGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

---

##### `putIncident` <a name="putIncident" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putIncident"></a>

```java
public void putIncident(SentinelAlertRuleNrtIncident value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putIncident.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

---

##### `putSentinelEntityMapping` <a name="putSentinelEntityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putSentinelEntityMapping"></a>

```java
public void putSentinelEntityMapping(IResolvable|java.util.List<SentinelAlertRuleNrtSentinelEntityMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putSentinelEntityMapping.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putTimeouts"></a>

```java
public void putTimeouts(SentinelAlertRuleNrtTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

---

##### `resetAlertDetailsOverride` <a name="resetAlertDetailsOverride" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertDetailsOverride"></a>

```java
public void resetAlertDetailsOverride()
```

##### `resetAlertRuleTemplateGuid` <a name="resetAlertRuleTemplateGuid" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateGuid"></a>

```java
public void resetAlertRuleTemplateGuid()
```

##### `resetAlertRuleTemplateVersion` <a name="resetAlertRuleTemplateVersion" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetAlertRuleTemplateVersion"></a>

```java
public void resetAlertRuleTemplateVersion()
```

##### `resetCustomDetails` <a name="resetCustomDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetCustomDetails"></a>

```java
public void resetCustomDetails()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEntityMapping` <a name="resetEntityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetEntityMapping"></a>

```java
public void resetEntityMapping()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetId"></a>

```java
public void resetId()
```

##### `resetIncident` <a name="resetIncident" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetIncident"></a>

```java
public void resetIncident()
```

##### `resetSentinelEntityMapping` <a name="resetSentinelEntityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSentinelEntityMapping"></a>

```java
public void resetSentinelEntityMapping()
```

##### `resetSuppressionDuration` <a name="resetSuppressionDuration" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionDuration"></a>

```java
public void resetSuppressionDuration()
```

##### `resetSuppressionEnabled` <a name="resetSuppressionEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetSuppressionEnabled"></a>

```java
public void resetSuppressionEnabled()
```

##### `resetTactics` <a name="resetTactics" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTactics"></a>

```java
public void resetTactics()
```

##### `resetTechniques` <a name="resetTechniques" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTechniques"></a>

```java
public void resetTechniques()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SentinelAlertRuleNrt resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrt;

SentinelAlertRuleNrt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrt;

SentinelAlertRuleNrt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrt;

SentinelAlertRuleNrt.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrt;

SentinelAlertRuleNrt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SentinelAlertRuleNrt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SentinelAlertRuleNrt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SentinelAlertRuleNrt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SentinelAlertRuleNrt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleNrt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverride">alertDetailsOverride</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList">SentinelAlertRuleNrtAlertDetailsOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMapping">entityMapping</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList">SentinelAlertRuleNrtEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGrouping">eventGrouping</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference">SentinelAlertRuleNrtEventGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incident">incident</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference">SentinelAlertRuleNrtIncidentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMapping">sentinelEntityMapping</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList">SentinelAlertRuleNrtSentinelEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference">SentinelAlertRuleNrtTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverrideInput">alertDetailsOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuidInput">alertRuleTemplateGuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersionInput">alertRuleTemplateVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetailsInput">customDetailsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMappingInput">entityMappingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGroupingInput">eventGroupingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incidentInput">incidentInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMappingInput">sentinelEntityMappingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDurationInput">suppressionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabledInput">suppressionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tacticsInput">tacticsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniquesInput">techniquesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersion">alertRuleTemplateVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetails">customDetails</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDuration">suppressionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabled">suppressionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tactics">tactics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniques">techniques</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alertDetailsOverride`<sup>Required</sup> <a name="alertDetailsOverride" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverride"></a>

```java
public SentinelAlertRuleNrtAlertDetailsOverrideList getAlertDetailsOverride();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList">SentinelAlertRuleNrtAlertDetailsOverrideList</a>

---

##### `entityMapping`<sup>Required</sup> <a name="entityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMapping"></a>

```java
public SentinelAlertRuleNrtEntityMappingList getEntityMapping();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList">SentinelAlertRuleNrtEntityMappingList</a>

---

##### `eventGrouping`<sup>Required</sup> <a name="eventGrouping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGrouping"></a>

```java
public SentinelAlertRuleNrtEventGroupingOutputReference getEventGrouping();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference">SentinelAlertRuleNrtEventGroupingOutputReference</a>

---

##### `incident`<sup>Required</sup> <a name="incident" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incident"></a>

```java
public SentinelAlertRuleNrtIncidentOutputReference getIncident();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference">SentinelAlertRuleNrtIncidentOutputReference</a>

---

##### `sentinelEntityMapping`<sup>Required</sup> <a name="sentinelEntityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMapping"></a>

```java
public SentinelAlertRuleNrtSentinelEntityMappingList getSentinelEntityMapping();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList">SentinelAlertRuleNrtSentinelEntityMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeouts"></a>

```java
public SentinelAlertRuleNrtTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference">SentinelAlertRuleNrtTimeoutsOutputReference</a>

---

##### `alertDetailsOverrideInput`<sup>Optional</sup> <a name="alertDetailsOverrideInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertDetailsOverrideInput"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverride> getAlertDetailsOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>>

---

##### `alertRuleTemplateGuidInput`<sup>Optional</sup> <a name="alertRuleTemplateGuidInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuidInput"></a>

```java
public java.lang.String getAlertRuleTemplateGuidInput();
```

- *Type:* java.lang.String

---

##### `alertRuleTemplateVersionInput`<sup>Optional</sup> <a name="alertRuleTemplateVersionInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersionInput"></a>

```java
public java.lang.String getAlertRuleTemplateVersionInput();
```

- *Type:* java.lang.String

---

##### `customDetailsInput`<sup>Optional</sup> <a name="customDetailsInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetailsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomDetailsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `entityMappingInput`<sup>Optional</sup> <a name="entityMappingInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.entityMappingInput"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtEntityMapping> getEntityMappingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>>

---

##### `eventGroupingInput`<sup>Optional</sup> <a name="eventGroupingInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.eventGroupingInput"></a>

```java
public SentinelAlertRuleNrtEventGrouping getEventGroupingInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `incidentInput`<sup>Optional</sup> <a name="incidentInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.incidentInput"></a>

```java
public SentinelAlertRuleNrtIncident getIncidentInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `sentinelEntityMappingInput`<sup>Optional</sup> <a name="sentinelEntityMappingInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.sentinelEntityMappingInput"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtSentinelEntityMapping> getSentinelEntityMappingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `suppressionDurationInput`<sup>Optional</sup> <a name="suppressionDurationInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDurationInput"></a>

```java
public java.lang.String getSuppressionDurationInput();
```

- *Type:* java.lang.String

---

##### `suppressionEnabledInput`<sup>Optional</sup> <a name="suppressionEnabledInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSuppressionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tacticsInput`<sup>Optional</sup> <a name="tacticsInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tacticsInput"></a>

```java
public java.util.List<java.lang.String> getTacticsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `techniquesInput`<sup>Optional</sup> <a name="techniquesInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniquesInput"></a>

```java
public java.util.List<java.lang.String> getTechniquesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.timeoutsInput"></a>

```java
public IResolvable|SentinelAlertRuleNrtTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

---

##### `alertRuleTemplateGuid`<sup>Required</sup> <a name="alertRuleTemplateGuid" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateGuid"></a>

```java
public java.lang.String getAlertRuleTemplateGuid();
```

- *Type:* java.lang.String

---

##### `alertRuleTemplateVersion`<sup>Required</sup> <a name="alertRuleTemplateVersion" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.alertRuleTemplateVersion"></a>

```java
public java.lang.String getAlertRuleTemplateVersion();
```

- *Type:* java.lang.String

---

##### `customDetails`<sup>Required</sup> <a name="customDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.customDetails"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomDetails();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `suppressionDuration`<sup>Required</sup> <a name="suppressionDuration" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionDuration"></a>

```java
public java.lang.String getSuppressionDuration();
```

- *Type:* java.lang.String

---

##### `suppressionEnabled`<sup>Required</sup> <a name="suppressionEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.suppressionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSuppressionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tactics`<sup>Required</sup> <a name="tactics" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tactics"></a>

```java
public java.util.List<java.lang.String> getTactics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `techniques`<sup>Required</sup> <a name="techniques" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.techniques"></a>

```java
public java.util.List<java.lang.String> getTechniques();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleNrtAlertDetailsOverride <a name="SentinelAlertRuleNrtAlertDetailsOverride" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtAlertDetailsOverride;

SentinelAlertRuleNrtAlertDetailsOverride.builder()
//  .descriptionFormat(java.lang.String)
//  .displayNameFormat(java.lang.String)
//  .dynamicProperty(IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty>)
//  .severityColumnName(java.lang.String)
//  .tacticsColumnName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.descriptionFormat">descriptionFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#description_format SentinelAlertRuleNrt#description_format}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.displayNameFormat">displayNameFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#display_name_format SentinelAlertRuleNrt#display_name_format}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.dynamicProperty">dynamicProperty</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>></code> | dynamic_property block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.severityColumnName">severityColumnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#severity_column_name SentinelAlertRuleNrt#severity_column_name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.tacticsColumnName">tacticsColumnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#tactics_column_name SentinelAlertRuleNrt#tactics_column_name}. |

---

##### `descriptionFormat`<sup>Optional</sup> <a name="descriptionFormat" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.descriptionFormat"></a>

```java
public java.lang.String getDescriptionFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#description_format SentinelAlertRuleNrt#description_format}.

---

##### `displayNameFormat`<sup>Optional</sup> <a name="displayNameFormat" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.displayNameFormat"></a>

```java
public java.lang.String getDisplayNameFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#display_name_format SentinelAlertRuleNrt#display_name_format}.

---

##### `dynamicProperty`<sup>Optional</sup> <a name="dynamicProperty" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.dynamicProperty"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty> getDynamicProperty();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>>

dynamic_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#dynamic_property SentinelAlertRuleNrt#dynamic_property}

---

##### `severityColumnName`<sup>Optional</sup> <a name="severityColumnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.severityColumnName"></a>

```java
public java.lang.String getSeverityColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#severity_column_name SentinelAlertRuleNrt#severity_column_name}.

---

##### `tacticsColumnName`<sup>Optional</sup> <a name="tacticsColumnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride.property.tacticsColumnName"></a>

```java
public java.lang.String getTacticsColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#tactics_column_name SentinelAlertRuleNrt#tactics_column_name}.

---

### SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty <a name="SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty;

SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#value SentinelAlertRuleNrt#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#value SentinelAlertRuleNrt#value}.

---

### SentinelAlertRuleNrtConfig <a name="SentinelAlertRuleNrtConfig" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtConfig;

SentinelAlertRuleNrtConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .eventGrouping(SentinelAlertRuleNrtEventGrouping)
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
    .severity(java.lang.String)
//  .alertDetailsOverride(IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverride>)
//  .alertRuleTemplateGuid(java.lang.String)
//  .alertRuleTemplateVersion(java.lang.String)
//  .customDetails(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .entityMapping(IResolvable|java.util.List<SentinelAlertRuleNrtEntityMapping>)
//  .id(java.lang.String)
//  .incident(SentinelAlertRuleNrtIncident)
//  .sentinelEntityMapping(IResolvable|java.util.List<SentinelAlertRuleNrtSentinelEntityMapping>)
//  .suppressionDuration(java.lang.String)
//  .suppressionEnabled(java.lang.Boolean|IResolvable)
//  .tactics(java.util.List<java.lang.String>)
//  .techniques(java.util.List<java.lang.String>)
//  .timeouts(SentinelAlertRuleNrtTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#display_name SentinelAlertRuleNrt#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.eventGrouping">eventGrouping</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | event_grouping block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#log_analytics_workspace_id SentinelAlertRuleNrt#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#query SentinelAlertRuleNrt#query}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#severity SentinelAlertRuleNrt#severity}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertDetailsOverride">alertDetailsOverride</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>></code> | alert_details_override block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_guid SentinelAlertRuleNrt#alert_rule_template_guid}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateVersion">alertRuleTemplateVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_version SentinelAlertRuleNrt#alert_rule_template_version}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.customDetails">customDetails</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#custom_details SentinelAlertRuleNrt#custom_details}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#description SentinelAlertRuleNrt#description}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.entityMapping">entityMapping</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>></code> | entity_mapping block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#id SentinelAlertRuleNrt#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.incident">incident</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | incident block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.sentinelEntityMapping">sentinelEntityMapping</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>></code> | sentinel_entity_mapping block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionDuration">suppressionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#suppression_duration SentinelAlertRuleNrt#suppression_duration}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionEnabled">suppressionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#suppression_enabled SentinelAlertRuleNrt#suppression_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.tactics">tactics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#tactics SentinelAlertRuleNrt#tactics}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.techniques">techniques</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#techniques SentinelAlertRuleNrt#techniques}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#display_name SentinelAlertRuleNrt#display_name}.

---

##### `eventGrouping`<sup>Required</sup> <a name="eventGrouping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.eventGrouping"></a>

```java
public SentinelAlertRuleNrtEventGrouping getEventGrouping();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

event_grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#event_grouping SentinelAlertRuleNrt#event_grouping}

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#log_analytics_workspace_id SentinelAlertRuleNrt#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#name SentinelAlertRuleNrt#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#query SentinelAlertRuleNrt#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#severity SentinelAlertRuleNrt#severity}.

---

##### `alertDetailsOverride`<sup>Optional</sup> <a name="alertDetailsOverride" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertDetailsOverride"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverride> getAlertDetailsOverride();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>>

alert_details_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_details_override SentinelAlertRuleNrt#alert_details_override}

---

##### `alertRuleTemplateGuid`<sup>Optional</sup> <a name="alertRuleTemplateGuid" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateGuid"></a>

```java
public java.lang.String getAlertRuleTemplateGuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_guid SentinelAlertRuleNrt#alert_rule_template_guid}.

---

##### `alertRuleTemplateVersion`<sup>Optional</sup> <a name="alertRuleTemplateVersion" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.alertRuleTemplateVersion"></a>

```java
public java.lang.String getAlertRuleTemplateVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#alert_rule_template_version SentinelAlertRuleNrt#alert_rule_template_version}.

---

##### `customDetails`<sup>Optional</sup> <a name="customDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.customDetails"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomDetails();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#custom_details SentinelAlertRuleNrt#custom_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#description SentinelAlertRuleNrt#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}.

---

##### `entityMapping`<sup>Optional</sup> <a name="entityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.entityMapping"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtEntityMapping> getEntityMapping();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>>

entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#entity_mapping SentinelAlertRuleNrt#entity_mapping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#id SentinelAlertRuleNrt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incident`<sup>Optional</sup> <a name="incident" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.incident"></a>

```java
public SentinelAlertRuleNrtIncident getIncident();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#incident SentinelAlertRuleNrt#incident}

---

##### `sentinelEntityMapping`<sup>Optional</sup> <a name="sentinelEntityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.sentinelEntityMapping"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtSentinelEntityMapping> getSentinelEntityMapping();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>>

sentinel_entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#sentinel_entity_mapping SentinelAlertRuleNrt#sentinel_entity_mapping}

---

##### `suppressionDuration`<sup>Optional</sup> <a name="suppressionDuration" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionDuration"></a>

```java
public java.lang.String getSuppressionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#suppression_duration SentinelAlertRuleNrt#suppression_duration}.

---

##### `suppressionEnabled`<sup>Optional</sup> <a name="suppressionEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.suppressionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSuppressionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#suppression_enabled SentinelAlertRuleNrt#suppression_enabled}.

---

##### `tactics`<sup>Optional</sup> <a name="tactics" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.tactics"></a>

```java
public java.util.List<java.lang.String> getTactics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#tactics SentinelAlertRuleNrt#tactics}.

---

##### `techniques`<sup>Optional</sup> <a name="techniques" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.techniques"></a>

```java
public java.util.List<java.lang.String> getTechniques();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#techniques SentinelAlertRuleNrt#techniques}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtConfig.property.timeouts"></a>

```java
public SentinelAlertRuleNrtTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#timeouts SentinelAlertRuleNrt#timeouts}

---

### SentinelAlertRuleNrtEntityMapping <a name="SentinelAlertRuleNrtEntityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtEntityMapping;

SentinelAlertRuleNrtEntityMapping.builder()
    .entityType(java.lang.String)
    .fieldMapping(IResolvable|java.util.List<SentinelAlertRuleNrtEntityMappingFieldMapping>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#entity_type SentinelAlertRuleNrt#entity_type}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.fieldMapping">fieldMapping</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>></code> | field_mapping block. |

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#entity_type SentinelAlertRuleNrt#entity_type}.

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping.property.fieldMapping"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtEntityMappingFieldMapping> getFieldMapping();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>>

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#field_mapping SentinelAlertRuleNrt#field_mapping}

---

### SentinelAlertRuleNrtEntityMappingFieldMapping <a name="SentinelAlertRuleNrtEntityMappingFieldMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtEntityMappingFieldMapping;

SentinelAlertRuleNrtEntityMappingFieldMapping.builder()
    .columnName(java.lang.String)
    .identifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#identifier SentinelAlertRuleNrt#identifier}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#identifier SentinelAlertRuleNrt#identifier}.

---

### SentinelAlertRuleNrtEventGrouping <a name="SentinelAlertRuleNrtEventGrouping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtEventGrouping;

SentinelAlertRuleNrtEventGrouping.builder()
    .aggregationMethod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping.property.aggregationMethod">aggregationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#aggregation_method SentinelAlertRuleNrt#aggregation_method}. |

---

##### `aggregationMethod`<sup>Required</sup> <a name="aggregationMethod" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping.property.aggregationMethod"></a>

```java
public java.lang.String getAggregationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#aggregation_method SentinelAlertRuleNrt#aggregation_method}.

---

### SentinelAlertRuleNrtIncident <a name="SentinelAlertRuleNrtIncident" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtIncident;

SentinelAlertRuleNrtIncident.builder()
    .createIncidentEnabled(java.lang.Boolean|IResolvable)
    .grouping(SentinelAlertRuleNrtIncidentGrouping)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.createIncidentEnabled">createIncidentEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#create_incident_enabled SentinelAlertRuleNrt#create_incident_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.grouping">grouping</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a></code> | grouping block. |

---

##### `createIncidentEnabled`<sup>Required</sup> <a name="createIncidentEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.createIncidentEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCreateIncidentEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#create_incident_enabled SentinelAlertRuleNrt#create_incident_enabled}.

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident.property.grouping"></a>

```java
public SentinelAlertRuleNrtIncidentGrouping getGrouping();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#grouping SentinelAlertRuleNrt#grouping}

---

### SentinelAlertRuleNrtIncidentGrouping <a name="SentinelAlertRuleNrtIncidentGrouping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtIncidentGrouping;

SentinelAlertRuleNrtIncidentGrouping.builder()
//  .byAlertDetails(java.util.List<java.lang.String>)
//  .byCustomDetails(java.util.List<java.lang.String>)
//  .byEntities(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .entityMatchingMethod(java.lang.String)
//  .lookbackDuration(java.lang.String)
//  .reopenClosedIncidents(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byAlertDetails">byAlertDetails</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#by_alert_details SentinelAlertRuleNrt#by_alert_details}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byCustomDetails">byCustomDetails</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#by_custom_details SentinelAlertRuleNrt#by_custom_details}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byEntities">byEntities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#by_entities SentinelAlertRuleNrt#by_entities}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.entityMatchingMethod">entityMatchingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#entity_matching_method SentinelAlertRuleNrt#entity_matching_method}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.lookbackDuration">lookbackDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#lookback_duration SentinelAlertRuleNrt#lookback_duration}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.reopenClosedIncidents">reopenClosedIncidents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#reopen_closed_incidents SentinelAlertRuleNrt#reopen_closed_incidents}. |

---

##### `byAlertDetails`<sup>Optional</sup> <a name="byAlertDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byAlertDetails"></a>

```java
public java.util.List<java.lang.String> getByAlertDetails();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#by_alert_details SentinelAlertRuleNrt#by_alert_details}.

---

##### `byCustomDetails`<sup>Optional</sup> <a name="byCustomDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byCustomDetails"></a>

```java
public java.util.List<java.lang.String> getByCustomDetails();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#by_custom_details SentinelAlertRuleNrt#by_custom_details}.

---

##### `byEntities`<sup>Optional</sup> <a name="byEntities" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.byEntities"></a>

```java
public java.util.List<java.lang.String> getByEntities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#by_entities SentinelAlertRuleNrt#by_entities}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#enabled SentinelAlertRuleNrt#enabled}.

---

##### `entityMatchingMethod`<sup>Optional</sup> <a name="entityMatchingMethod" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.entityMatchingMethod"></a>

```java
public java.lang.String getEntityMatchingMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#entity_matching_method SentinelAlertRuleNrt#entity_matching_method}.

---

##### `lookbackDuration`<sup>Optional</sup> <a name="lookbackDuration" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.lookbackDuration"></a>

```java
public java.lang.String getLookbackDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#lookback_duration SentinelAlertRuleNrt#lookback_duration}.

---

##### `reopenClosedIncidents`<sup>Optional</sup> <a name="reopenClosedIncidents" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping.property.reopenClosedIncidents"></a>

```java
public java.lang.Boolean|IResolvable getReopenClosedIncidents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#reopen_closed_incidents SentinelAlertRuleNrt#reopen_closed_incidents}.

---

### SentinelAlertRuleNrtSentinelEntityMapping <a name="SentinelAlertRuleNrtSentinelEntityMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtSentinelEntityMapping;

SentinelAlertRuleNrtSentinelEntityMapping.builder()
    .columnName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#column_name SentinelAlertRuleNrt#column_name}.

---

### SentinelAlertRuleNrtTimeouts <a name="SentinelAlertRuleNrtTimeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtTimeouts;

SentinelAlertRuleNrtTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#create SentinelAlertRuleNrt#create}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#delete SentinelAlertRuleNrt#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#read SentinelAlertRuleNrt#read}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#update SentinelAlertRuleNrt#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#create SentinelAlertRuleNrt#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#delete SentinelAlertRuleNrt#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#read SentinelAlertRuleNrt#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/sentinel_alert_rule_nrt#update SentinelAlertRuleNrt#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList <a name="SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList;

new SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.get"></a>

```java
public SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>>

---


### SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference <a name="SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference;

new SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue"></a>

```java
public IResolvable|SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>

---


### SentinelAlertRuleNrtAlertDetailsOverrideList <a name="SentinelAlertRuleNrtAlertDetailsOverrideList" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtAlertDetailsOverrideList;

new SentinelAlertRuleNrtAlertDetailsOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.get"></a>

```java
public SentinelAlertRuleNrtAlertDetailsOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverride> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>>

---


### SentinelAlertRuleNrtAlertDetailsOverrideOutputReference <a name="SentinelAlertRuleNrtAlertDetailsOverrideOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference;

new SentinelAlertRuleNrtAlertDetailsOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.putDynamicProperty">putDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDescriptionFormat">resetDescriptionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDisplayNameFormat">resetDisplayNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDynamicProperty">resetDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetSeverityColumnName">resetSeverityColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetTacticsColumnName">resetTacticsColumnName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicProperty` <a name="putDynamicProperty" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.putDynamicProperty"></a>

```java
public void putDynamicProperty(IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.putDynamicProperty.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>>

---

##### `resetDescriptionFormat` <a name="resetDescriptionFormat" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDescriptionFormat"></a>

```java
public void resetDescriptionFormat()
```

##### `resetDisplayNameFormat` <a name="resetDisplayNameFormat" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDisplayNameFormat"></a>

```java
public void resetDisplayNameFormat()
```

##### `resetDynamicProperty` <a name="resetDynamicProperty" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetDynamicProperty"></a>

```java
public void resetDynamicProperty()
```

##### `resetSeverityColumnName` <a name="resetSeverityColumnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetSeverityColumnName"></a>

```java
public void resetSeverityColumnName()
```

##### `resetTacticsColumnName` <a name="resetTacticsColumnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.resetTacticsColumnName"></a>

```java
public void resetTacticsColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicProperty">dynamicProperty</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormatInput">descriptionFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormatInput">displayNameFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicPropertyInput">dynamicPropertyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnNameInput">severityColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput">tacticsColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormat">descriptionFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormat">displayNameFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnName">severityColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnName">tacticsColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicProperty`<sup>Required</sup> <a name="dynamicProperty" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicProperty"></a>

```java
public SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList getDynamicProperty();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleNrtAlertDetailsOverrideDynamicPropertyList</a>

---

##### `descriptionFormatInput`<sup>Optional</sup> <a name="descriptionFormatInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormatInput"></a>

```java
public java.lang.String getDescriptionFormatInput();
```

- *Type:* java.lang.String

---

##### `displayNameFormatInput`<sup>Optional</sup> <a name="displayNameFormatInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormatInput"></a>

```java
public java.lang.String getDisplayNameFormatInput();
```

- *Type:* java.lang.String

---

##### `dynamicPropertyInput`<sup>Optional</sup> <a name="dynamicPropertyInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.dynamicPropertyInput"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty> getDynamicPropertyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty">SentinelAlertRuleNrtAlertDetailsOverrideDynamicProperty</a>>

---

##### `severityColumnNameInput`<sup>Optional</sup> <a name="severityColumnNameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnNameInput"></a>

```java
public java.lang.String getSeverityColumnNameInput();
```

- *Type:* java.lang.String

---

##### `tacticsColumnNameInput`<sup>Optional</sup> <a name="tacticsColumnNameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput"></a>

```java
public java.lang.String getTacticsColumnNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionFormat`<sup>Required</sup> <a name="descriptionFormat" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.descriptionFormat"></a>

```java
public java.lang.String getDescriptionFormat();
```

- *Type:* java.lang.String

---

##### `displayNameFormat`<sup>Required</sup> <a name="displayNameFormat" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.displayNameFormat"></a>

```java
public java.lang.String getDisplayNameFormat();
```

- *Type:* java.lang.String

---

##### `severityColumnName`<sup>Required</sup> <a name="severityColumnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.severityColumnName"></a>

```java
public java.lang.String getSeverityColumnName();
```

- *Type:* java.lang.String

---

##### `tacticsColumnName`<sup>Required</sup> <a name="tacticsColumnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.tacticsColumnName"></a>

```java
public java.lang.String getTacticsColumnName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|SentinelAlertRuleNrtAlertDetailsOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtAlertDetailsOverride">SentinelAlertRuleNrtAlertDetailsOverride</a>

---


### SentinelAlertRuleNrtEntityMappingFieldMappingList <a name="SentinelAlertRuleNrtEntityMappingFieldMappingList" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtEntityMappingFieldMappingList;

new SentinelAlertRuleNrtEntityMappingFieldMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.get"></a>

```java
public SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtEntityMappingFieldMapping> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>>

---


### SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference <a name="SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference;

new SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingOutputReference.property.internalValue"></a>

```java
public IResolvable|SentinelAlertRuleNrtEntityMappingFieldMapping getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>

---


### SentinelAlertRuleNrtEntityMappingList <a name="SentinelAlertRuleNrtEntityMappingList" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtEntityMappingList;

new SentinelAlertRuleNrtEntityMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.get"></a>

```java
public SentinelAlertRuleNrtEntityMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtEntityMapping> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>>

---


### SentinelAlertRuleNrtEntityMappingOutputReference <a name="SentinelAlertRuleNrtEntityMappingOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtEntityMappingOutputReference;

new SentinelAlertRuleNrtEntityMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.putFieldMapping">putFieldMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldMapping` <a name="putFieldMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.putFieldMapping"></a>

```java
public void putFieldMapping(IResolvable|java.util.List<SentinelAlertRuleNrtEntityMappingFieldMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMapping">fieldMapping</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList">SentinelAlertRuleNrtEntityMappingFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMappingInput">fieldMappingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldMapping`<sup>Required</sup> <a name="fieldMapping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMapping"></a>

```java
public SentinelAlertRuleNrtEntityMappingFieldMappingList getFieldMapping();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMappingList">SentinelAlertRuleNrtEntityMappingFieldMappingList</a>

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `fieldMappingInput`<sup>Optional</sup> <a name="fieldMappingInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.fieldMappingInput"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtEntityMappingFieldMapping> getFieldMappingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingFieldMapping">SentinelAlertRuleNrtEntityMappingFieldMapping</a>>

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMappingOutputReference.property.internalValue"></a>

```java
public IResolvable|SentinelAlertRuleNrtEntityMapping getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEntityMapping">SentinelAlertRuleNrtEntityMapping</a>

---


### SentinelAlertRuleNrtEventGroupingOutputReference <a name="SentinelAlertRuleNrtEventGroupingOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtEventGroupingOutputReference;

new SentinelAlertRuleNrtEventGroupingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethodInput">aggregationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethod">aggregationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationMethodInput`<sup>Optional</sup> <a name="aggregationMethodInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethodInput"></a>

```java
public java.lang.String getAggregationMethodInput();
```

- *Type:* java.lang.String

---

##### `aggregationMethod`<sup>Required</sup> <a name="aggregationMethod" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.aggregationMethod"></a>

```java
public java.lang.String getAggregationMethod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGroupingOutputReference.property.internalValue"></a>

```java
public SentinelAlertRuleNrtEventGrouping getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtEventGrouping">SentinelAlertRuleNrtEventGrouping</a>

---


### SentinelAlertRuleNrtIncidentGroupingOutputReference <a name="SentinelAlertRuleNrtIncidentGroupingOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtIncidentGroupingOutputReference;

new SentinelAlertRuleNrtIncidentGroupingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByAlertDetails">resetByAlertDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByCustomDetails">resetByCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByEntities">resetByEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEntityMatchingMethod">resetEntityMatchingMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetLookbackDuration">resetLookbackDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetReopenClosedIncidents">resetReopenClosedIncidents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetByAlertDetails` <a name="resetByAlertDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByAlertDetails"></a>

```java
public void resetByAlertDetails()
```

##### `resetByCustomDetails` <a name="resetByCustomDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByCustomDetails"></a>

```java
public void resetByCustomDetails()
```

##### `resetByEntities` <a name="resetByEntities" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetByEntities"></a>

```java
public void resetByEntities()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEntityMatchingMethod` <a name="resetEntityMatchingMethod" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetEntityMatchingMethod"></a>

```java
public void resetEntityMatchingMethod()
```

##### `resetLookbackDuration` <a name="resetLookbackDuration" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetLookbackDuration"></a>

```java
public void resetLookbackDuration()
```

##### `resetReopenClosedIncidents` <a name="resetReopenClosedIncidents" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.resetReopenClosedIncidents"></a>

```java
public void resetReopenClosedIncidents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetailsInput">byAlertDetailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetailsInput">byCustomDetailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntitiesInput">byEntitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethodInput">entityMatchingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDurationInput">lookbackDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidentsInput">reopenClosedIncidentsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetails">byAlertDetails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetails">byCustomDetails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntities">byEntities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethod">entityMatchingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDuration">lookbackDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidents">reopenClosedIncidents</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `byAlertDetailsInput`<sup>Optional</sup> <a name="byAlertDetailsInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetailsInput"></a>

```java
public java.util.List<java.lang.String> getByAlertDetailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `byCustomDetailsInput`<sup>Optional</sup> <a name="byCustomDetailsInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetailsInput"></a>

```java
public java.util.List<java.lang.String> getByCustomDetailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `byEntitiesInput`<sup>Optional</sup> <a name="byEntitiesInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntitiesInput"></a>

```java
public java.util.List<java.lang.String> getByEntitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `entityMatchingMethodInput`<sup>Optional</sup> <a name="entityMatchingMethodInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethodInput"></a>

```java
public java.lang.String getEntityMatchingMethodInput();
```

- *Type:* java.lang.String

---

##### `lookbackDurationInput`<sup>Optional</sup> <a name="lookbackDurationInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDurationInput"></a>

```java
public java.lang.String getLookbackDurationInput();
```

- *Type:* java.lang.String

---

##### `reopenClosedIncidentsInput`<sup>Optional</sup> <a name="reopenClosedIncidentsInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidentsInput"></a>

```java
public java.lang.Boolean|IResolvable getReopenClosedIncidentsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `byAlertDetails`<sup>Required</sup> <a name="byAlertDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byAlertDetails"></a>

```java
public java.util.List<java.lang.String> getByAlertDetails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `byCustomDetails`<sup>Required</sup> <a name="byCustomDetails" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byCustomDetails"></a>

```java
public java.util.List<java.lang.String> getByCustomDetails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `byEntities`<sup>Required</sup> <a name="byEntities" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.byEntities"></a>

```java
public java.util.List<java.lang.String> getByEntities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `entityMatchingMethod`<sup>Required</sup> <a name="entityMatchingMethod" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.entityMatchingMethod"></a>

```java
public java.lang.String getEntityMatchingMethod();
```

- *Type:* java.lang.String

---

##### `lookbackDuration`<sup>Required</sup> <a name="lookbackDuration" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.lookbackDuration"></a>

```java
public java.lang.String getLookbackDuration();
```

- *Type:* java.lang.String

---

##### `reopenClosedIncidents`<sup>Required</sup> <a name="reopenClosedIncidents" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.reopenClosedIncidents"></a>

```java
public java.lang.Boolean|IResolvable getReopenClosedIncidents();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference.property.internalValue"></a>

```java
public SentinelAlertRuleNrtIncidentGrouping getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

---


### SentinelAlertRuleNrtIncidentOutputReference <a name="SentinelAlertRuleNrtIncidentOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtIncidentOutputReference;

new SentinelAlertRuleNrtIncidentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.putGrouping">putGrouping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrouping` <a name="putGrouping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.putGrouping"></a>

```java
public void putGrouping(SentinelAlertRuleNrtIncidentGrouping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.putGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.grouping">grouping</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference">SentinelAlertRuleNrtIncidentGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabledInput">createIncidentEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.groupingInput">groupingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabled">createIncidentEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.grouping"></a>

```java
public SentinelAlertRuleNrtIncidentGroupingOutputReference getGrouping();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGroupingOutputReference">SentinelAlertRuleNrtIncidentGroupingOutputReference</a>

---

##### `createIncidentEnabledInput`<sup>Optional</sup> <a name="createIncidentEnabledInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateIncidentEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupingInput`<sup>Optional</sup> <a name="groupingInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.groupingInput"></a>

```java
public SentinelAlertRuleNrtIncidentGrouping getGroupingInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentGrouping">SentinelAlertRuleNrtIncidentGrouping</a>

---

##### `createIncidentEnabled`<sup>Required</sup> <a name="createIncidentEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.createIncidentEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCreateIncidentEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncidentOutputReference.property.internalValue"></a>

```java
public SentinelAlertRuleNrtIncident getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtIncident">SentinelAlertRuleNrtIncident</a>

---


### SentinelAlertRuleNrtSentinelEntityMappingList <a name="SentinelAlertRuleNrtSentinelEntityMappingList" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtSentinelEntityMappingList;

new SentinelAlertRuleNrtSentinelEntityMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.get"></a>

```java
public SentinelAlertRuleNrtSentinelEntityMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SentinelAlertRuleNrtSentinelEntityMapping> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>>

---


### SentinelAlertRuleNrtSentinelEntityMappingOutputReference <a name="SentinelAlertRuleNrtSentinelEntityMappingOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference;

new SentinelAlertRuleNrtSentinelEntityMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMappingOutputReference.property.internalValue"></a>

```java
public IResolvable|SentinelAlertRuleNrtSentinelEntityMapping getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtSentinelEntityMapping">SentinelAlertRuleNrtSentinelEntityMapping</a>

---


### SentinelAlertRuleNrtTimeoutsOutputReference <a name="SentinelAlertRuleNrtTimeoutsOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.sentinel_alert_rule_nrt.SentinelAlertRuleNrtTimeoutsOutputReference;

new SentinelAlertRuleNrtTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SentinelAlertRuleNrtTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sentinelAlertRuleNrt.SentinelAlertRuleNrtTimeouts">SentinelAlertRuleNrtTimeouts</a>

---



