# `streamAnalyticsJob` Submodule <a name="`streamAnalyticsJob` Submodule" id="@cdktn/provider-azurerm.streamAnalyticsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsJob <a name="StreamAnalyticsJob" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job azurerm_stream_analytics_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJob;

StreamAnalyticsJob.Builder.create(Construct scope, java.lang.String id)
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
    .transformationQuery(java.lang.String)
//  .compatibilityLevel(java.lang.String)
//  .contentStoragePolicy(java.lang.String)
//  .dataLocale(java.lang.String)
//  .eventsLateArrivalMaxDelayInSeconds(java.lang.Number)
//  .eventsOutOfOrderMaxDelayInSeconds(java.lang.Number)
//  .eventsOutOfOrderPolicy(java.lang.String)
//  .id(java.lang.String)
//  .identity(StreamAnalyticsJobIdentity)
//  .jobStorageAccount(StreamAnalyticsJobJobStorageAccount)
//  .outputErrorPolicy(java.lang.String)
//  .skuName(java.lang.String)
//  .streamAnalyticsClusterId(java.lang.String)
//  .streamingUnits(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StreamAnalyticsJobTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#location StreamAnalyticsJob#location}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#name StreamAnalyticsJob#name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#resource_group_name StreamAnalyticsJob#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.transformationQuery">transformationQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#transformation_query StreamAnalyticsJob#transformation_query}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.compatibilityLevel">compatibilityLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#compatibility_level StreamAnalyticsJob#compatibility_level}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.contentStoragePolicy">contentStoragePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#content_storage_policy StreamAnalyticsJob#content_storage_policy}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.dataLocale">dataLocale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#data_locale StreamAnalyticsJob#data_locale}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.eventsLateArrivalMaxDelayInSeconds">eventsLateArrivalMaxDelayInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.eventsOutOfOrderMaxDelayInSeconds">eventsOutOfOrderMaxDelayInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.eventsOutOfOrderPolicy">eventsOutOfOrderPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#id StreamAnalyticsJob#id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.jobStorageAccount">jobStorageAccount</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount">StreamAnalyticsJobJobStorageAccount</a></code> | job_storage_account block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.outputErrorPolicy">outputErrorPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#output_error_policy StreamAnalyticsJob#output_error_policy}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#sku_name StreamAnalyticsJob#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.streamAnalyticsClusterId">streamAnalyticsClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#stream_analytics_cluster_id StreamAnalyticsJob#stream_analytics_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.streamingUnits">streamingUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#streaming_units StreamAnalyticsJob#streaming_units}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#tags StreamAnalyticsJob#tags}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#location StreamAnalyticsJob#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#name StreamAnalyticsJob#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#resource_group_name StreamAnalyticsJob#resource_group_name}.

---

##### `transformationQuery`<sup>Required</sup> <a name="transformationQuery" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.transformationQuery"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#transformation_query StreamAnalyticsJob#transformation_query}.

---

##### `compatibilityLevel`<sup>Optional</sup> <a name="compatibilityLevel" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.compatibilityLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#compatibility_level StreamAnalyticsJob#compatibility_level}.

---

##### `contentStoragePolicy`<sup>Optional</sup> <a name="contentStoragePolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.contentStoragePolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#content_storage_policy StreamAnalyticsJob#content_storage_policy}.

---

##### `dataLocale`<sup>Optional</sup> <a name="dataLocale" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.dataLocale"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#data_locale StreamAnalyticsJob#data_locale}.

---

##### `eventsLateArrivalMaxDelayInSeconds`<sup>Optional</sup> <a name="eventsLateArrivalMaxDelayInSeconds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.eventsLateArrivalMaxDelayInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}.

---

##### `eventsOutOfOrderMaxDelayInSeconds`<sup>Optional</sup> <a name="eventsOutOfOrderMaxDelayInSeconds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.eventsOutOfOrderMaxDelayInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}.

---

##### `eventsOutOfOrderPolicy`<sup>Optional</sup> <a name="eventsOutOfOrderPolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.eventsOutOfOrderPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#id StreamAnalyticsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#identity StreamAnalyticsJob#identity}

---

##### `jobStorageAccount`<sup>Optional</sup> <a name="jobStorageAccount" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.jobStorageAccount"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount">StreamAnalyticsJobJobStorageAccount</a>

job_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#job_storage_account StreamAnalyticsJob#job_storage_account}

---

##### `outputErrorPolicy`<sup>Optional</sup> <a name="outputErrorPolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.outputErrorPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#output_error_policy StreamAnalyticsJob#output_error_policy}.

---

##### `skuName`<sup>Optional</sup> <a name="skuName" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#sku_name StreamAnalyticsJob#sku_name}.

---

##### `streamAnalyticsClusterId`<sup>Optional</sup> <a name="streamAnalyticsClusterId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.streamAnalyticsClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#stream_analytics_cluster_id StreamAnalyticsJob#stream_analytics_cluster_id}.

---

##### `streamingUnits`<sup>Optional</sup> <a name="streamingUnits" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.streamingUnits"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#streaming_units StreamAnalyticsJob#streaming_units}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#tags StreamAnalyticsJob#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#timeouts StreamAnalyticsJob#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putJobStorageAccount">putJobStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetCompatibilityLevel">resetCompatibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetContentStoragePolicy">resetContentStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetDataLocale">resetDataLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsLateArrivalMaxDelayInSeconds">resetEventsLateArrivalMaxDelayInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderMaxDelayInSeconds">resetEventsOutOfOrderMaxDelayInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderPolicy">resetEventsOutOfOrderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetJobStorageAccount">resetJobStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOutputErrorPolicy">resetOutputErrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetSkuName">resetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamAnalyticsClusterId">resetStreamAnalyticsClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamingUnits">resetStreamingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putIdentity"></a>

```java
public void putIdentity(StreamAnalyticsJobIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

---

##### `putJobStorageAccount` <a name="putJobStorageAccount" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putJobStorageAccount"></a>

```java
public void putJobStorageAccount(StreamAnalyticsJobJobStorageAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putJobStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount">StreamAnalyticsJobJobStorageAccount</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a>

---

##### `resetCompatibilityLevel` <a name="resetCompatibilityLevel" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetCompatibilityLevel"></a>

```java
public void resetCompatibilityLevel()
```

##### `resetContentStoragePolicy` <a name="resetContentStoragePolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetContentStoragePolicy"></a>

```java
public void resetContentStoragePolicy()
```

##### `resetDataLocale` <a name="resetDataLocale" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetDataLocale"></a>

```java
public void resetDataLocale()
```

##### `resetEventsLateArrivalMaxDelayInSeconds` <a name="resetEventsLateArrivalMaxDelayInSeconds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsLateArrivalMaxDelayInSeconds"></a>

```java
public void resetEventsLateArrivalMaxDelayInSeconds()
```

##### `resetEventsOutOfOrderMaxDelayInSeconds` <a name="resetEventsOutOfOrderMaxDelayInSeconds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderMaxDelayInSeconds"></a>

```java
public void resetEventsOutOfOrderMaxDelayInSeconds()
```

##### `resetEventsOutOfOrderPolicy` <a name="resetEventsOutOfOrderPolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderPolicy"></a>

```java
public void resetEventsOutOfOrderPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetJobStorageAccount` <a name="resetJobStorageAccount" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetJobStorageAccount"></a>

```java
public void resetJobStorageAccount()
```

##### `resetOutputErrorPolicy` <a name="resetOutputErrorPolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOutputErrorPolicy"></a>

```java
public void resetOutputErrorPolicy()
```

##### `resetSkuName` <a name="resetSkuName" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetSkuName"></a>

```java
public void resetSkuName()
```

##### `resetStreamAnalyticsClusterId` <a name="resetStreamAnalyticsClusterId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamAnalyticsClusterId"></a>

```java
public void resetStreamAnalyticsClusterId()
```

##### `resetStreamingUnits` <a name="resetStreamingUnits" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamingUnits"></a>

```java
public void resetStreamingUnits()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StreamAnalyticsJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJob;

StreamAnalyticsJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJob;

StreamAnalyticsJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJob;

StreamAnalyticsJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJob;

StreamAnalyticsJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamAnalyticsJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StreamAnalyticsJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamAnalyticsJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamAnalyticsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference">StreamAnalyticsJobIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccount">jobStorageAccount</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference">StreamAnalyticsJobJobStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference">StreamAnalyticsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevelInput">compatibilityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicyInput">contentStoragePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocaleInput">dataLocaleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSecondsInput">eventsLateArrivalMaxDelayInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSecondsInput">eventsOutOfOrderMaxDelayInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicyInput">eventsOutOfOrderPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccountInput">jobStorageAccountInput</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount">StreamAnalyticsJobJobStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicyInput">outputErrorPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterIdInput">streamAnalyticsClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnitsInput">streamingUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQueryInput">transformationQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevel">compatibilityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicy">contentStoragePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocale">dataLocale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds">eventsLateArrivalMaxDelayInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds">eventsOutOfOrderMaxDelayInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicy">eventsOutOfOrderPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicy">outputErrorPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterId">streamAnalyticsClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnits">streamingUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQuery">transformationQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identity"></a>

```java
public StreamAnalyticsJobIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference">StreamAnalyticsJobIdentityOutputReference</a>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `jobStorageAccount`<sup>Required</sup> <a name="jobStorageAccount" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccount"></a>

```java
public StreamAnalyticsJobJobStorageAccountOutputReference getJobStorageAccount();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference">StreamAnalyticsJobJobStorageAccountOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeouts"></a>

```java
public StreamAnalyticsJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference">StreamAnalyticsJobTimeoutsOutputReference</a>

---

##### `compatibilityLevelInput`<sup>Optional</sup> <a name="compatibilityLevelInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevelInput"></a>

```java
public java.lang.String getCompatibilityLevelInput();
```

- *Type:* java.lang.String

---

##### `contentStoragePolicyInput`<sup>Optional</sup> <a name="contentStoragePolicyInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicyInput"></a>

```java
public java.lang.String getContentStoragePolicyInput();
```

- *Type:* java.lang.String

---

##### `dataLocaleInput`<sup>Optional</sup> <a name="dataLocaleInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocaleInput"></a>

```java
public java.lang.String getDataLocaleInput();
```

- *Type:* java.lang.String

---

##### `eventsLateArrivalMaxDelayInSecondsInput`<sup>Optional</sup> <a name="eventsLateArrivalMaxDelayInSecondsInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSecondsInput"></a>

```java
public java.lang.Number getEventsLateArrivalMaxDelayInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `eventsOutOfOrderMaxDelayInSecondsInput`<sup>Optional</sup> <a name="eventsOutOfOrderMaxDelayInSecondsInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSecondsInput"></a>

```java
public java.lang.Number getEventsOutOfOrderMaxDelayInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `eventsOutOfOrderPolicyInput`<sup>Optional</sup> <a name="eventsOutOfOrderPolicyInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicyInput"></a>

```java
public java.lang.String getEventsOutOfOrderPolicyInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identityInput"></a>

```java
public StreamAnalyticsJobIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobStorageAccountInput`<sup>Optional</sup> <a name="jobStorageAccountInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccountInput"></a>

```java
public StreamAnalyticsJobJobStorageAccount getJobStorageAccountInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount">StreamAnalyticsJobJobStorageAccount</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputErrorPolicyInput`<sup>Optional</sup> <a name="outputErrorPolicyInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicyInput"></a>

```java
public java.lang.String getOutputErrorPolicyInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsClusterIdInput`<sup>Optional</sup> <a name="streamAnalyticsClusterIdInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterIdInput"></a>

```java
public java.lang.String getStreamAnalyticsClusterIdInput();
```

- *Type:* java.lang.String

---

##### `streamingUnitsInput`<sup>Optional</sup> <a name="streamingUnitsInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnitsInput"></a>

```java
public java.lang.Number getStreamingUnitsInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeoutsInput"></a>

```java
public IResolvable|StreamAnalyticsJobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a>

---

##### `transformationQueryInput`<sup>Optional</sup> <a name="transformationQueryInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQueryInput"></a>

```java
public java.lang.String getTransformationQueryInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `compatibilityLevel`<sup>Required</sup> <a name="compatibilityLevel" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevel"></a>

```java
public java.lang.String getCompatibilityLevel();
```

- *Type:* java.lang.String

---

##### `contentStoragePolicy`<sup>Required</sup> <a name="contentStoragePolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicy"></a>

```java
public java.lang.String getContentStoragePolicy();
```

- *Type:* java.lang.String

---

##### `dataLocale`<sup>Required</sup> <a name="dataLocale" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocale"></a>

```java
public java.lang.String getDataLocale();
```

- *Type:* java.lang.String

---

##### `eventsLateArrivalMaxDelayInSeconds`<sup>Required</sup> <a name="eventsLateArrivalMaxDelayInSeconds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds"></a>

```java
public java.lang.Number getEventsLateArrivalMaxDelayInSeconds();
```

- *Type:* java.lang.Number

---

##### `eventsOutOfOrderMaxDelayInSeconds`<sup>Required</sup> <a name="eventsOutOfOrderMaxDelayInSeconds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds"></a>

```java
public java.lang.Number getEventsOutOfOrderMaxDelayInSeconds();
```

- *Type:* java.lang.Number

---

##### `eventsOutOfOrderPolicy`<sup>Required</sup> <a name="eventsOutOfOrderPolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicy"></a>

```java
public java.lang.String getEventsOutOfOrderPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputErrorPolicy`<sup>Required</sup> <a name="outputErrorPolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicy"></a>

```java
public java.lang.String getOutputErrorPolicy();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsClusterId`<sup>Required</sup> <a name="streamAnalyticsClusterId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterId"></a>

```java
public java.lang.String getStreamAnalyticsClusterId();
```

- *Type:* java.lang.String

---

##### `streamingUnits`<sup>Required</sup> <a name="streamingUnits" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnits"></a>

```java
public java.lang.Number getStreamingUnits();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transformationQuery`<sup>Required</sup> <a name="transformationQuery" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQuery"></a>

```java
public java.lang.String getTransformationQuery();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsJobConfig <a name="StreamAnalyticsJobConfig" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJobConfig;

StreamAnalyticsJobConfig.builder()
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
    .transformationQuery(java.lang.String)
//  .compatibilityLevel(java.lang.String)
//  .contentStoragePolicy(java.lang.String)
//  .dataLocale(java.lang.String)
//  .eventsLateArrivalMaxDelayInSeconds(java.lang.Number)
//  .eventsOutOfOrderMaxDelayInSeconds(java.lang.Number)
//  .eventsOutOfOrderPolicy(java.lang.String)
//  .id(java.lang.String)
//  .identity(StreamAnalyticsJobIdentity)
//  .jobStorageAccount(StreamAnalyticsJobJobStorageAccount)
//  .outputErrorPolicy(java.lang.String)
//  .skuName(java.lang.String)
//  .streamAnalyticsClusterId(java.lang.String)
//  .streamingUnits(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StreamAnalyticsJobTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#location StreamAnalyticsJob#location}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#name StreamAnalyticsJob#name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#resource_group_name StreamAnalyticsJob#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.transformationQuery">transformationQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#transformation_query StreamAnalyticsJob#transformation_query}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.compatibilityLevel">compatibilityLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#compatibility_level StreamAnalyticsJob#compatibility_level}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.contentStoragePolicy">contentStoragePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#content_storage_policy StreamAnalyticsJob#content_storage_policy}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dataLocale">dataLocale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#data_locale StreamAnalyticsJob#data_locale}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsLateArrivalMaxDelayInSeconds">eventsLateArrivalMaxDelayInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderMaxDelayInSeconds">eventsOutOfOrderMaxDelayInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderPolicy">eventsOutOfOrderPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#id StreamAnalyticsJob#id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.jobStorageAccount">jobStorageAccount</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount">StreamAnalyticsJobJobStorageAccount</a></code> | job_storage_account block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.outputErrorPolicy">outputErrorPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#output_error_policy StreamAnalyticsJob#output_error_policy}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#sku_name StreamAnalyticsJob#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamAnalyticsClusterId">streamAnalyticsClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#stream_analytics_cluster_id StreamAnalyticsJob#stream_analytics_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamingUnits">streamingUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#streaming_units StreamAnalyticsJob#streaming_units}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#tags StreamAnalyticsJob#tags}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#location StreamAnalyticsJob#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#name StreamAnalyticsJob#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#resource_group_name StreamAnalyticsJob#resource_group_name}.

---

##### `transformationQuery`<sup>Required</sup> <a name="transformationQuery" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.transformationQuery"></a>

```java
public java.lang.String getTransformationQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#transformation_query StreamAnalyticsJob#transformation_query}.

---

##### `compatibilityLevel`<sup>Optional</sup> <a name="compatibilityLevel" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.compatibilityLevel"></a>

```java
public java.lang.String getCompatibilityLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#compatibility_level StreamAnalyticsJob#compatibility_level}.

---

##### `contentStoragePolicy`<sup>Optional</sup> <a name="contentStoragePolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.contentStoragePolicy"></a>

```java
public java.lang.String getContentStoragePolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#content_storage_policy StreamAnalyticsJob#content_storage_policy}.

---

##### `dataLocale`<sup>Optional</sup> <a name="dataLocale" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dataLocale"></a>

```java
public java.lang.String getDataLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#data_locale StreamAnalyticsJob#data_locale}.

---

##### `eventsLateArrivalMaxDelayInSeconds`<sup>Optional</sup> <a name="eventsLateArrivalMaxDelayInSeconds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsLateArrivalMaxDelayInSeconds"></a>

```java
public java.lang.Number getEventsLateArrivalMaxDelayInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}.

---

##### `eventsOutOfOrderMaxDelayInSeconds`<sup>Optional</sup> <a name="eventsOutOfOrderMaxDelayInSeconds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderMaxDelayInSeconds"></a>

```java
public java.lang.Number getEventsOutOfOrderMaxDelayInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}.

---

##### `eventsOutOfOrderPolicy`<sup>Optional</sup> <a name="eventsOutOfOrderPolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderPolicy"></a>

```java
public java.lang.String getEventsOutOfOrderPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#id StreamAnalyticsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.identity"></a>

```java
public StreamAnalyticsJobIdentity getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#identity StreamAnalyticsJob#identity}

---

##### `jobStorageAccount`<sup>Optional</sup> <a name="jobStorageAccount" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.jobStorageAccount"></a>

```java
public StreamAnalyticsJobJobStorageAccount getJobStorageAccount();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount">StreamAnalyticsJobJobStorageAccount</a>

job_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#job_storage_account StreamAnalyticsJob#job_storage_account}

---

##### `outputErrorPolicy`<sup>Optional</sup> <a name="outputErrorPolicy" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.outputErrorPolicy"></a>

```java
public java.lang.String getOutputErrorPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#output_error_policy StreamAnalyticsJob#output_error_policy}.

---

##### `skuName`<sup>Optional</sup> <a name="skuName" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#sku_name StreamAnalyticsJob#sku_name}.

---

##### `streamAnalyticsClusterId`<sup>Optional</sup> <a name="streamAnalyticsClusterId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamAnalyticsClusterId"></a>

```java
public java.lang.String getStreamAnalyticsClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#stream_analytics_cluster_id StreamAnalyticsJob#stream_analytics_cluster_id}.

---

##### `streamingUnits`<sup>Optional</sup> <a name="streamingUnits" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamingUnits"></a>

```java
public java.lang.Number getStreamingUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#streaming_units StreamAnalyticsJob#streaming_units}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#tags StreamAnalyticsJob#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.timeouts"></a>

```java
public StreamAnalyticsJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#timeouts StreamAnalyticsJob#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}.

---

### StreamAnalyticsJobIdentity <a name="StreamAnalyticsJobIdentity" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJobIdentity;

StreamAnalyticsJobIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#identity_ids StreamAnalyticsJob#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#identity_ids StreamAnalyticsJob#identity_ids}.

---

### StreamAnalyticsJobJobStorageAccount <a name="StreamAnalyticsJobJobStorageAccount" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJobJobStorageAccount;

StreamAnalyticsJobJobStorageAccount.builder()
    .accountName(java.lang.String)
//  .accountKey(java.lang.String)
//  .authenticationMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#account_name StreamAnalyticsJob#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#account_key StreamAnalyticsJob#account_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#authentication_mode StreamAnalyticsJob#authentication_mode}. |

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#account_name StreamAnalyticsJob#account_name}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#account_key StreamAnalyticsJob#account_key}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#authentication_mode StreamAnalyticsJob#authentication_mode}.

---

### StreamAnalyticsJobTimeouts <a name="StreamAnalyticsJobTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJobTimeouts;

StreamAnalyticsJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#create StreamAnalyticsJob#create}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#delete StreamAnalyticsJob#delete}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#read StreamAnalyticsJob#read}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#update StreamAnalyticsJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#create StreamAnalyticsJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#delete StreamAnalyticsJob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#read StreamAnalyticsJob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_job#update StreamAnalyticsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsJobIdentityOutputReference <a name="StreamAnalyticsJobIdentityOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJobIdentityOutputReference;

new StreamAnalyticsJobIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.internalValue"></a>

```java
public StreamAnalyticsJobIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

---


### StreamAnalyticsJobJobStorageAccountOutputReference <a name="StreamAnalyticsJobJobStorageAccountOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJobJobStorageAccountOutputReference;

new StreamAnalyticsJobJobStorageAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resetAccountKey"></a>

```java
public void resetAccountKey()
```

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resetAuthenticationMode"></a>

```java
public void resetAuthenticationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKeyInput">accountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationModeInput">authenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount">StreamAnalyticsJobJobStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKeyInput"></a>

```java
public java.lang.String getAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationModeInput"></a>

```java
public java.lang.String getAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.internalValue"></a>

```java
public StreamAnalyticsJobJobStorageAccount getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount">StreamAnalyticsJobJobStorageAccount</a>

---


### StreamAnalyticsJobTimeoutsOutputReference <a name="StreamAnalyticsJobTimeoutsOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_job.StreamAnalyticsJobTimeoutsOutputReference;

new StreamAnalyticsJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|StreamAnalyticsJobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a>

---



