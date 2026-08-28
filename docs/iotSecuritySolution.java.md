# `iotSecuritySolution` Submodule <a name="`iotSecuritySolution` Submodule" id="@cdktn/provider-azurerm.iotSecuritySolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecuritySolution <a name="IotSecuritySolution" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution azurerm_iot_security_solution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .iothubIds(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .additionalWorkspace(IResolvable|java.util.List<IotSecuritySolutionAdditionalWorkspace>)
//  .disabledDataSources(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .eventsToExport(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .logAnalyticsWorkspaceId(java.lang.String)
//  .logUnmaskedIpsEnabled(java.lang.Boolean|IResolvable)
//  .queryForResources(java.lang.String)
//  .querySubscriptionIds(java.util.List<java.lang.String>)
//  .recommendations(IotSecuritySolutionRecommendations)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(IotSecuritySolutionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.iothubIds">iothubIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.additionalWorkspace">additionalWorkspace</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>></code> | additional_workspace block. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.disabledDataSources">disabledDataSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.eventsToExport">eventsToExport</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.queryForResources">queryForResources</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.querySubscriptionIds">querySubscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.recommendations">recommendations</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a></code> | recommendations block. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}.

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.iothubIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}.

---

##### `additionalWorkspace`<sup>Optional</sup> <a name="additionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.additionalWorkspace"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

additional_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#additional_workspace IotSecuritySolution#additional_workspace}

---

##### `disabledDataSources`<sup>Optional</sup> <a name="disabledDataSources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.disabledDataSources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}.

---

##### `eventsToExport`<sup>Optional</sup> <a name="eventsToExport" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.eventsToExport"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}.

---

##### `logUnmaskedIpsEnabled`<sup>Optional</sup> <a name="logUnmaskedIpsEnabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.logUnmaskedIpsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}.

---

##### `queryForResources`<sup>Optional</sup> <a name="queryForResources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.queryForResources"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}.

---

##### `querySubscriptionIds`<sup>Optional</sup> <a name="querySubscriptionIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.querySubscriptionIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}.

---

##### `recommendations`<sup>Optional</sup> <a name="recommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.recommendations"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a>

recommendations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#recommendations IotSecuritySolution#recommendations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#timeouts IotSecuritySolution#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace">putAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendations">putRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace">resetAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources">resetDisabledDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport">resetEventsToExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId">resetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled">resetLogUnmaskedIpsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources">resetQueryForResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds">resetQuerySubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendations">resetRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalWorkspace` <a name="putAdditionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace"></a>

```java
public void putAdditionalWorkspace(IResolvable|java.util.List<IotSecuritySolutionAdditionalWorkspace> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

---

##### `putRecommendations` <a name="putRecommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendations"></a>

```java
public void putRecommendations(IotSecuritySolutionRecommendations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts"></a>

```java
public void putTimeouts(IotSecuritySolutionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `resetAdditionalWorkspace` <a name="resetAdditionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace"></a>

```java
public void resetAdditionalWorkspace()
```

##### `resetDisabledDataSources` <a name="resetDisabledDataSources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources"></a>

```java
public void resetDisabledDataSources()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEventsToExport` <a name="resetEventsToExport" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport"></a>

```java
public void resetEventsToExport()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId"></a>

```java
public void resetId()
```

##### `resetLogAnalyticsWorkspaceId` <a name="resetLogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId"></a>

```java
public void resetLogAnalyticsWorkspaceId()
```

##### `resetLogUnmaskedIpsEnabled` <a name="resetLogUnmaskedIpsEnabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled"></a>

```java
public void resetLogUnmaskedIpsEnabled()
```

##### `resetQueryForResources` <a name="resetQueryForResources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources"></a>

```java
public void resetQueryForResources()
```

##### `resetQuerySubscriptionIds` <a name="resetQuerySubscriptionIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds"></a>

```java
public void resetQuerySubscriptionIds()
```

##### `resetRecommendations` <a name="resetRecommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendations"></a>

```java
public void resetRecommendations()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotSecuritySolution resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolution;

IotSecuritySolution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotSecuritySolution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotSecuritySolution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotSecuritySolution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotSecuritySolution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotSecuritySolution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace">additionalWorkspace</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendations">recommendations</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference">IotSecuritySolutionRecommendationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput">additionalWorkspaceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput">disabledDataSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput">eventsToExportInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput">iothubIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput">logUnmaskedIpsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput">queryForResourcesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput">querySubscriptionIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsInput">recommendationsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources">disabledDataSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport">eventsToExport</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds">iothubIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources">queryForResources</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds">querySubscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalWorkspace`<sup>Required</sup> <a name="additionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace"></a>

```java
public IotSecuritySolutionAdditionalWorkspaceList getAdditionalWorkspace();
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a>

---

##### `recommendations`<sup>Required</sup> <a name="recommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendations"></a>

```java
public IotSecuritySolutionRecommendationsOutputReference getRecommendations();
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference">IotSecuritySolutionRecommendationsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts"></a>

```java
public IotSecuritySolutionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a>

---

##### `additionalWorkspaceInput`<sup>Optional</sup> <a name="additionalWorkspaceInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput"></a>

```java
public IResolvable|java.util.List<IotSecuritySolutionAdditionalWorkspace> getAdditionalWorkspaceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

---

##### `disabledDataSourcesInput`<sup>Optional</sup> <a name="disabledDataSourcesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput"></a>

```java
public java.util.List<java.lang.String> getDisabledDataSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventsToExportInput`<sup>Optional</sup> <a name="eventsToExportInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput"></a>

```java
public java.util.List<java.lang.String> getEventsToExportInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubIdsInput`<sup>Optional</sup> <a name="iothubIdsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput"></a>

```java
public java.util.List<java.lang.String> getIothubIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `logUnmaskedIpsEnabledInput`<sup>Optional</sup> <a name="logUnmaskedIpsEnabledInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getLogUnmaskedIpsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryForResourcesInput`<sup>Optional</sup> <a name="queryForResourcesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput"></a>

```java
public java.lang.String getQueryForResourcesInput();
```

- *Type:* java.lang.String

---

##### `querySubscriptionIdsInput`<sup>Optional</sup> <a name="querySubscriptionIdsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput"></a>

```java
public java.util.List<java.lang.String> getQuerySubscriptionIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendationsInput`<sup>Optional</sup> <a name="recommendationsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsInput"></a>

```java
public IotSecuritySolutionRecommendations getRecommendationsInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput"></a>

```java
public IResolvable|IotSecuritySolutionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `disabledDataSources`<sup>Required</sup> <a name="disabledDataSources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources"></a>

```java
public java.util.List<java.lang.String> getDisabledDataSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventsToExport`<sup>Required</sup> <a name="eventsToExport" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport"></a>

```java
public java.util.List<java.lang.String> getEventsToExport();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds"></a>

```java
public java.util.List<java.lang.String> getIothubIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `logUnmaskedIpsEnabled`<sup>Required</sup> <a name="logUnmaskedIpsEnabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLogUnmaskedIpsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryForResources`<sup>Required</sup> <a name="queryForResources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources"></a>

```java
public java.lang.String getQueryForResources();
```

- *Type:* java.lang.String

---

##### `querySubscriptionIds`<sup>Required</sup> <a name="querySubscriptionIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds"></a>

```java
public java.util.List<java.lang.String> getQuerySubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecuritySolutionAdditionalWorkspace <a name="IotSecuritySolutionAdditionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolutionAdditionalWorkspace;

IotSecuritySolutionAdditionalWorkspace.builder()
    .dataTypes(java.util.List<java.lang.String>)
    .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes">dataTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}. |

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes"></a>

```java
public java.util.List<java.lang.String> getDataTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}.

---

### IotSecuritySolutionConfig <a name="IotSecuritySolutionConfig" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolutionConfig;

IotSecuritySolutionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .iothubIds(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .additionalWorkspace(IResolvable|java.util.List<IotSecuritySolutionAdditionalWorkspace>)
//  .disabledDataSources(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .eventsToExport(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .logAnalyticsWorkspaceId(java.lang.String)
//  .logUnmaskedIpsEnabled(java.lang.Boolean|IResolvable)
//  .queryForResources(java.lang.String)
//  .querySubscriptionIds(java.util.List<java.lang.String>)
//  .recommendations(IotSecuritySolutionRecommendations)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(IotSecuritySolutionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds">iothubIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace">additionalWorkspace</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>></code> | additional_workspace block. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources">disabledDataSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport">eventsToExport</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources">queryForResources</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds">querySubscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendations">recommendations</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a></code> | recommendations block. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}.

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds"></a>

```java
public java.util.List<java.lang.String> getIothubIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}.

---

##### `additionalWorkspace`<sup>Optional</sup> <a name="additionalWorkspace" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace"></a>

```java
public IResolvable|java.util.List<IotSecuritySolutionAdditionalWorkspace> getAdditionalWorkspace();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

additional_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#additional_workspace IotSecuritySolution#additional_workspace}

---

##### `disabledDataSources`<sup>Optional</sup> <a name="disabledDataSources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources"></a>

```java
public java.util.List<java.lang.String> getDisabledDataSources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}.

---

##### `eventsToExport`<sup>Optional</sup> <a name="eventsToExport" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport"></a>

```java
public java.util.List<java.lang.String> getEventsToExport();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}.

---

##### `logUnmaskedIpsEnabled`<sup>Optional</sup> <a name="logUnmaskedIpsEnabled" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLogUnmaskedIpsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}.

---

##### `queryForResources`<sup>Optional</sup> <a name="queryForResources" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources"></a>

```java
public java.lang.String getQueryForResources();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}.

---

##### `querySubscriptionIds`<sup>Optional</sup> <a name="querySubscriptionIds" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds"></a>

```java
public java.util.List<java.lang.String> getQuerySubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}.

---

##### `recommendations`<sup>Optional</sup> <a name="recommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendations"></a>

```java
public IotSecuritySolutionRecommendations getRecommendations();
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a>

recommendations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#recommendations IotSecuritySolution#recommendations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts"></a>

```java
public IotSecuritySolutionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#timeouts IotSecuritySolution#timeouts}

---

### IotSecuritySolutionRecommendations <a name="IotSecuritySolutionRecommendations" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolutionRecommendations;

IotSecuritySolutionRecommendations.builder()
//  .acrAuthentication(java.lang.Boolean|IResolvable)
//  .agentSendUnutilizedMsg(java.lang.Boolean|IResolvable)
//  .baseline(java.lang.Boolean|IResolvable)
//  .edgeHubMemOptimize(java.lang.Boolean|IResolvable)
//  .edgeLoggingOption(java.lang.Boolean|IResolvable)
//  .inconsistentModuleSettings(java.lang.Boolean|IResolvable)
//  .installAgent(java.lang.Boolean|IResolvable)
//  .ipFilterDenyAll(java.lang.Boolean|IResolvable)
//  .ipFilterPermissiveRule(java.lang.Boolean|IResolvable)
//  .openPorts(java.lang.Boolean|IResolvable)
//  .permissiveFirewallPolicy(java.lang.Boolean|IResolvable)
//  .permissiveInputFirewallRules(java.lang.Boolean|IResolvable)
//  .permissiveOutputFirewallRules(java.lang.Boolean|IResolvable)
//  .privilegedDockerOptions(java.lang.Boolean|IResolvable)
//  .sharedCredentials(java.lang.Boolean|IResolvable)
//  .vulnerableTlsCipherSuite(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.acrAuthentication">acrAuthentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.agentSendUnutilizedMsg">agentSendUnutilizedMsg</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.baseline">baseline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.edgeHubMemOptimize">edgeHubMemOptimize</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.edgeLoggingOption">edgeLoggingOption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.inconsistentModuleSettings">inconsistentModuleSettings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.installAgent">installAgent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.ipFilterDenyAll">ipFilterDenyAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.ipFilterPermissiveRule">ipFilterPermissiveRule</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.openPorts">openPorts</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveFirewallPolicy">permissiveFirewallPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveInputFirewallRules">permissiveInputFirewallRules</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveOutputFirewallRules">permissiveOutputFirewallRules</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.privilegedDockerOptions">privilegedDockerOptions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.sharedCredentials">sharedCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.vulnerableTlsCipherSuite">vulnerableTlsCipherSuite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}. |

---

##### `acrAuthentication`<sup>Optional</sup> <a name="acrAuthentication" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.acrAuthentication"></a>

```java
public java.lang.Boolean|IResolvable getAcrAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}.

---

##### `agentSendUnutilizedMsg`<sup>Optional</sup> <a name="agentSendUnutilizedMsg" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.agentSendUnutilizedMsg"></a>

```java
public java.lang.Boolean|IResolvable getAgentSendUnutilizedMsg();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}.

---

##### `baseline`<sup>Optional</sup> <a name="baseline" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.baseline"></a>

```java
public java.lang.Boolean|IResolvable getBaseline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}.

---

##### `edgeHubMemOptimize`<sup>Optional</sup> <a name="edgeHubMemOptimize" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.edgeHubMemOptimize"></a>

```java
public java.lang.Boolean|IResolvable getEdgeHubMemOptimize();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}.

---

##### `edgeLoggingOption`<sup>Optional</sup> <a name="edgeLoggingOption" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.edgeLoggingOption"></a>

```java
public java.lang.Boolean|IResolvable getEdgeLoggingOption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}.

---

##### `inconsistentModuleSettings`<sup>Optional</sup> <a name="inconsistentModuleSettings" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.inconsistentModuleSettings"></a>

```java
public java.lang.Boolean|IResolvable getInconsistentModuleSettings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}.

---

##### `installAgent`<sup>Optional</sup> <a name="installAgent" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.installAgent"></a>

```java
public java.lang.Boolean|IResolvable getInstallAgent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}.

---

##### `ipFilterDenyAll`<sup>Optional</sup> <a name="ipFilterDenyAll" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.ipFilterDenyAll"></a>

```java
public java.lang.Boolean|IResolvable getIpFilterDenyAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}.

---

##### `ipFilterPermissiveRule`<sup>Optional</sup> <a name="ipFilterPermissiveRule" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.ipFilterPermissiveRule"></a>

```java
public java.lang.Boolean|IResolvable getIpFilterPermissiveRule();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}.

---

##### `openPorts`<sup>Optional</sup> <a name="openPorts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.openPorts"></a>

```java
public java.lang.Boolean|IResolvable getOpenPorts();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}.

---

##### `permissiveFirewallPolicy`<sup>Optional</sup> <a name="permissiveFirewallPolicy" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveFirewallPolicy"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveFirewallPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}.

---

##### `permissiveInputFirewallRules`<sup>Optional</sup> <a name="permissiveInputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveInputFirewallRules"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveInputFirewallRules();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}.

---

##### `permissiveOutputFirewallRules`<sup>Optional</sup> <a name="permissiveOutputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.permissiveOutputFirewallRules"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveOutputFirewallRules();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}.

---

##### `privilegedDockerOptions`<sup>Optional</sup> <a name="privilegedDockerOptions" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.privilegedDockerOptions"></a>

```java
public java.lang.Boolean|IResolvable getPrivilegedDockerOptions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}.

---

##### `sharedCredentials`<sup>Optional</sup> <a name="sharedCredentials" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.sharedCredentials"></a>

```java
public java.lang.Boolean|IResolvable getSharedCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}.

---

##### `vulnerableTlsCipherSuite`<sup>Optional</sup> <a name="vulnerableTlsCipherSuite" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations.property.vulnerableTlsCipherSuite"></a>

```java
public java.lang.Boolean|IResolvable getVulnerableTlsCipherSuite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}.

---

### IotSecuritySolutionTimeouts <a name="IotSecuritySolutionTimeouts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolutionTimeouts;

IotSecuritySolutionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecuritySolutionAdditionalWorkspaceList <a name="IotSecuritySolutionAdditionalWorkspaceList" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolutionAdditionalWorkspaceList;

new IotSecuritySolutionAdditionalWorkspaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get"></a>

```java
public IotSecuritySolutionAdditionalWorkspaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotSecuritySolutionAdditionalWorkspace> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>>

---


### IotSecuritySolutionAdditionalWorkspaceOutputReference <a name="IotSecuritySolutionAdditionalWorkspaceOutputReference" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolutionAdditionalWorkspaceOutputReference;

new IotSecuritySolutionAdditionalWorkspaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput">dataTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes">dataTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataTypesInput`<sup>Optional</sup> <a name="dataTypesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput"></a>

```java
public java.util.List<java.lang.String> getDataTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes"></a>

```java
public java.util.List<java.lang.String> getDataTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecuritySolutionAdditionalWorkspace getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>

---


### IotSecuritySolutionRecommendationsOutputReference <a name="IotSecuritySolutionRecommendationsOutputReference" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolutionRecommendationsOutputReference;

new IotSecuritySolutionRecommendationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetAcrAuthentication">resetAcrAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetAgentSendUnutilizedMsg">resetAgentSendUnutilizedMsg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetBaseline">resetBaseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetEdgeHubMemOptimize">resetEdgeHubMemOptimize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetEdgeLoggingOption">resetEdgeLoggingOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetInconsistentModuleSettings">resetInconsistentModuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetInstallAgent">resetInstallAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetIpFilterDenyAll">resetIpFilterDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetIpFilterPermissiveRule">resetIpFilterPermissiveRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetOpenPorts">resetOpenPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveFirewallPolicy">resetPermissiveFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveInputFirewallRules">resetPermissiveInputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveOutputFirewallRules">resetPermissiveOutputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPrivilegedDockerOptions">resetPrivilegedDockerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetSharedCredentials">resetSharedCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetVulnerableTlsCipherSuite">resetVulnerableTlsCipherSuite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcrAuthentication` <a name="resetAcrAuthentication" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetAcrAuthentication"></a>

```java
public void resetAcrAuthentication()
```

##### `resetAgentSendUnutilizedMsg` <a name="resetAgentSendUnutilizedMsg" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetAgentSendUnutilizedMsg"></a>

```java
public void resetAgentSendUnutilizedMsg()
```

##### `resetBaseline` <a name="resetBaseline" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetBaseline"></a>

```java
public void resetBaseline()
```

##### `resetEdgeHubMemOptimize` <a name="resetEdgeHubMemOptimize" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetEdgeHubMemOptimize"></a>

```java
public void resetEdgeHubMemOptimize()
```

##### `resetEdgeLoggingOption` <a name="resetEdgeLoggingOption" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetEdgeLoggingOption"></a>

```java
public void resetEdgeLoggingOption()
```

##### `resetInconsistentModuleSettings` <a name="resetInconsistentModuleSettings" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetInconsistentModuleSettings"></a>

```java
public void resetInconsistentModuleSettings()
```

##### `resetInstallAgent` <a name="resetInstallAgent" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetInstallAgent"></a>

```java
public void resetInstallAgent()
```

##### `resetIpFilterDenyAll` <a name="resetIpFilterDenyAll" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetIpFilterDenyAll"></a>

```java
public void resetIpFilterDenyAll()
```

##### `resetIpFilterPermissiveRule` <a name="resetIpFilterPermissiveRule" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetIpFilterPermissiveRule"></a>

```java
public void resetIpFilterPermissiveRule()
```

##### `resetOpenPorts` <a name="resetOpenPorts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetOpenPorts"></a>

```java
public void resetOpenPorts()
```

##### `resetPermissiveFirewallPolicy` <a name="resetPermissiveFirewallPolicy" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveFirewallPolicy"></a>

```java
public void resetPermissiveFirewallPolicy()
```

##### `resetPermissiveInputFirewallRules` <a name="resetPermissiveInputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveInputFirewallRules"></a>

```java
public void resetPermissiveInputFirewallRules()
```

##### `resetPermissiveOutputFirewallRules` <a name="resetPermissiveOutputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPermissiveOutputFirewallRules"></a>

```java
public void resetPermissiveOutputFirewallRules()
```

##### `resetPrivilegedDockerOptions` <a name="resetPrivilegedDockerOptions" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetPrivilegedDockerOptions"></a>

```java
public void resetPrivilegedDockerOptions()
```

##### `resetSharedCredentials` <a name="resetSharedCredentials" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetSharedCredentials"></a>

```java
public void resetSharedCredentials()
```

##### `resetVulnerableTlsCipherSuite` <a name="resetVulnerableTlsCipherSuite" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.resetVulnerableTlsCipherSuite"></a>

```java
public void resetVulnerableTlsCipherSuite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.acrAuthenticationInput">acrAuthenticationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.agentSendUnutilizedMsgInput">agentSendUnutilizedMsgInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.baselineInput">baselineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeHubMemOptimizeInput">edgeHubMemOptimizeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeLoggingOptionInput">edgeLoggingOptionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.inconsistentModuleSettingsInput">inconsistentModuleSettingsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.installAgentInput">installAgentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterDenyAllInput">ipFilterDenyAllInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterPermissiveRuleInput">ipFilterPermissiveRuleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.openPortsInput">openPortsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveFirewallPolicyInput">permissiveFirewallPolicyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveInputFirewallRulesInput">permissiveInputFirewallRulesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveOutputFirewallRulesInput">permissiveOutputFirewallRulesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.privilegedDockerOptionsInput">privilegedDockerOptionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.sharedCredentialsInput">sharedCredentialsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.vulnerableTlsCipherSuiteInput">vulnerableTlsCipherSuiteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.acrAuthentication">acrAuthentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.agentSendUnutilizedMsg">agentSendUnutilizedMsg</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.baseline">baseline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeHubMemOptimize">edgeHubMemOptimize</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeLoggingOption">edgeLoggingOption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.inconsistentModuleSettings">inconsistentModuleSettings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.installAgent">installAgent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterDenyAll">ipFilterDenyAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterPermissiveRule">ipFilterPermissiveRule</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.openPorts">openPorts</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveFirewallPolicy">permissiveFirewallPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveInputFirewallRules">permissiveInputFirewallRules</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveOutputFirewallRules">permissiveOutputFirewallRules</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.privilegedDockerOptions">privilegedDockerOptions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.sharedCredentials">sharedCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.vulnerableTlsCipherSuite">vulnerableTlsCipherSuite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acrAuthenticationInput`<sup>Optional</sup> <a name="acrAuthenticationInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.acrAuthenticationInput"></a>

```java
public java.lang.Boolean|IResolvable getAcrAuthenticationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `agentSendUnutilizedMsgInput`<sup>Optional</sup> <a name="agentSendUnutilizedMsgInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.agentSendUnutilizedMsgInput"></a>

```java
public java.lang.Boolean|IResolvable getAgentSendUnutilizedMsgInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `baselineInput`<sup>Optional</sup> <a name="baselineInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.baselineInput"></a>

```java
public java.lang.Boolean|IResolvable getBaselineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `edgeHubMemOptimizeInput`<sup>Optional</sup> <a name="edgeHubMemOptimizeInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeHubMemOptimizeInput"></a>

```java
public java.lang.Boolean|IResolvable getEdgeHubMemOptimizeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `edgeLoggingOptionInput`<sup>Optional</sup> <a name="edgeLoggingOptionInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeLoggingOptionInput"></a>

```java
public java.lang.Boolean|IResolvable getEdgeLoggingOptionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inconsistentModuleSettingsInput`<sup>Optional</sup> <a name="inconsistentModuleSettingsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.inconsistentModuleSettingsInput"></a>

```java
public java.lang.Boolean|IResolvable getInconsistentModuleSettingsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `installAgentInput`<sup>Optional</sup> <a name="installAgentInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.installAgentInput"></a>

```java
public java.lang.Boolean|IResolvable getInstallAgentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipFilterDenyAllInput`<sup>Optional</sup> <a name="ipFilterDenyAllInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterDenyAllInput"></a>

```java
public java.lang.Boolean|IResolvable getIpFilterDenyAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipFilterPermissiveRuleInput`<sup>Optional</sup> <a name="ipFilterPermissiveRuleInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterPermissiveRuleInput"></a>

```java
public java.lang.Boolean|IResolvable getIpFilterPermissiveRuleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `openPortsInput`<sup>Optional</sup> <a name="openPortsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.openPortsInput"></a>

```java
public java.lang.Boolean|IResolvable getOpenPortsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `permissiveFirewallPolicyInput`<sup>Optional</sup> <a name="permissiveFirewallPolicyInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveFirewallPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveFirewallPolicyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `permissiveInputFirewallRulesInput`<sup>Optional</sup> <a name="permissiveInputFirewallRulesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveInputFirewallRulesInput"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveInputFirewallRulesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `permissiveOutputFirewallRulesInput`<sup>Optional</sup> <a name="permissiveOutputFirewallRulesInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveOutputFirewallRulesInput"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveOutputFirewallRulesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privilegedDockerOptionsInput`<sup>Optional</sup> <a name="privilegedDockerOptionsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.privilegedDockerOptionsInput"></a>

```java
public java.lang.Boolean|IResolvable getPrivilegedDockerOptionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sharedCredentialsInput`<sup>Optional</sup> <a name="sharedCredentialsInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.sharedCredentialsInput"></a>

```java
public java.lang.Boolean|IResolvable getSharedCredentialsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vulnerableTlsCipherSuiteInput`<sup>Optional</sup> <a name="vulnerableTlsCipherSuiteInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.vulnerableTlsCipherSuiteInput"></a>

```java
public java.lang.Boolean|IResolvable getVulnerableTlsCipherSuiteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `acrAuthentication`<sup>Required</sup> <a name="acrAuthentication" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.acrAuthentication"></a>

```java
public java.lang.Boolean|IResolvable getAcrAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `agentSendUnutilizedMsg`<sup>Required</sup> <a name="agentSendUnutilizedMsg" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.agentSendUnutilizedMsg"></a>

```java
public java.lang.Boolean|IResolvable getAgentSendUnutilizedMsg();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `baseline`<sup>Required</sup> <a name="baseline" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.baseline"></a>

```java
public java.lang.Boolean|IResolvable getBaseline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `edgeHubMemOptimize`<sup>Required</sup> <a name="edgeHubMemOptimize" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeHubMemOptimize"></a>

```java
public java.lang.Boolean|IResolvable getEdgeHubMemOptimize();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `edgeLoggingOption`<sup>Required</sup> <a name="edgeLoggingOption" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.edgeLoggingOption"></a>

```java
public java.lang.Boolean|IResolvable getEdgeLoggingOption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inconsistentModuleSettings`<sup>Required</sup> <a name="inconsistentModuleSettings" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.inconsistentModuleSettings"></a>

```java
public java.lang.Boolean|IResolvable getInconsistentModuleSettings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `installAgent`<sup>Required</sup> <a name="installAgent" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.installAgent"></a>

```java
public java.lang.Boolean|IResolvable getInstallAgent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipFilterDenyAll`<sup>Required</sup> <a name="ipFilterDenyAll" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterDenyAll"></a>

```java
public java.lang.Boolean|IResolvable getIpFilterDenyAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipFilterPermissiveRule`<sup>Required</sup> <a name="ipFilterPermissiveRule" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.ipFilterPermissiveRule"></a>

```java
public java.lang.Boolean|IResolvable getIpFilterPermissiveRule();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `openPorts`<sup>Required</sup> <a name="openPorts" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.openPorts"></a>

```java
public java.lang.Boolean|IResolvable getOpenPorts();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `permissiveFirewallPolicy`<sup>Required</sup> <a name="permissiveFirewallPolicy" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveFirewallPolicy"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveFirewallPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `permissiveInputFirewallRules`<sup>Required</sup> <a name="permissiveInputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveInputFirewallRules"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveInputFirewallRules();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `permissiveOutputFirewallRules`<sup>Required</sup> <a name="permissiveOutputFirewallRules" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.permissiveOutputFirewallRules"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveOutputFirewallRules();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privilegedDockerOptions`<sup>Required</sup> <a name="privilegedDockerOptions" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.privilegedDockerOptions"></a>

```java
public java.lang.Boolean|IResolvable getPrivilegedDockerOptions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sharedCredentials`<sup>Required</sup> <a name="sharedCredentials" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.sharedCredentials"></a>

```java
public java.lang.Boolean|IResolvable getSharedCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vulnerableTlsCipherSuite`<sup>Required</sup> <a name="vulnerableTlsCipherSuite" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.vulnerableTlsCipherSuite"></a>

```java
public java.lang.Boolean|IResolvable getVulnerableTlsCipherSuite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsOutputReference.property.internalValue"></a>

```java
public IotSecuritySolutionRecommendations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendations">IotSecuritySolutionRecommendations</a>

---


### IotSecuritySolutionTimeoutsOutputReference <a name="IotSecuritySolutionTimeoutsOutputReference" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iot_security_solution.IotSecuritySolutionTimeoutsOutputReference;

new IotSecuritySolutionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecuritySolutionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---



