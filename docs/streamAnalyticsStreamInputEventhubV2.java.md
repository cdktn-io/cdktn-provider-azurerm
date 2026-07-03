# `streamAnalyticsStreamInputEventhubV2` Submodule <a name="`streamAnalyticsStreamInputEventhubV2` Submodule" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputEventhubV2 <a name="StreamAnalyticsStreamInputEventhubV2" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2 azurerm_stream_analytics_stream_input_eventhub_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2;

StreamAnalyticsStreamInputEventhubV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventhubName(java.lang.String)
    .name(java.lang.String)
    .serialization(StreamAnalyticsStreamInputEventhubV2Serialization)
    .servicebusNamespace(java.lang.String)
    .streamAnalyticsJobId(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .eventhubConsumerGroupName(java.lang.String)
//  .id(java.lang.String)
//  .partitionKey(java.lang.String)
//  .sharedAccessPolicyKey(java.lang.String)
//  .sharedAccessPolicyName(java.lang.String)
//  .timeouts(StreamAnalyticsStreamInputEventhubV2Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.serialization">serialization</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | serialization block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.servicebusNamespace">servicebusNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.eventhubName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.serialization"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#serialization StreamAnalyticsStreamInputEventhubV2#serialization}

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.servicebusNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}.

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.streamAnalyticsJobId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.authenticationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}.

---

##### `eventhubConsumerGroupName`<sup>Optional</sup> <a name="eventhubConsumerGroupName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.eventhubConsumerGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.partitionKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}.

---

##### `sharedAccessPolicyKey`<sup>Optional</sup> <a name="sharedAccessPolicyKey" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.sharedAccessPolicyKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}.

---

##### `sharedAccessPolicyName`<sup>Optional</sup> <a name="sharedAccessPolicyName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.sharedAccessPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#timeouts StreamAnalyticsStreamInputEventhubV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization">putSerialization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetEventhubConsumerGroupName">resetEventhubConsumerGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetPartitionKey">resetPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyKey">resetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyName">resetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSerialization` <a name="putSerialization" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization"></a>

```java
public void putSerialization(StreamAnalyticsStreamInputEventhubV2Serialization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsStreamInputEventhubV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>

---

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetAuthenticationMode"></a>

```java
public void resetAuthenticationMode()
```

##### `resetEventhubConsumerGroupName` <a name="resetEventhubConsumerGroupName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetEventhubConsumerGroupName"></a>

```java
public void resetEventhubConsumerGroupName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetId"></a>

```java
public void resetId()
```

##### `resetPartitionKey` <a name="resetPartitionKey" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetPartitionKey"></a>

```java
public void resetPartitionKey()
```

##### `resetSharedAccessPolicyKey` <a name="resetSharedAccessPolicyKey" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyKey"></a>

```java
public void resetSharedAccessPolicyKey()
```

##### `resetSharedAccessPolicyName` <a name="resetSharedAccessPolicyName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyName"></a>

```java
public void resetSharedAccessPolicyName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StreamAnalyticsStreamInputEventhubV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2;

StreamAnalyticsStreamInputEventhubV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2;

StreamAnalyticsStreamInputEventhubV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2;

StreamAnalyticsStreamInputEventhubV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2;

StreamAnalyticsStreamInputEventhubV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamAnalyticsStreamInputEventhubV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StreamAnalyticsStreamInputEventhubV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamAnalyticsStreamInputEventhubV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamAnalyticsStreamInputEventhubV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsStreamInputEventhubV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serialization">serialization</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference">StreamAnalyticsStreamInputEventhubV2SerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference">StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationModeInput">authenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupNameInput">eventhubConsumerGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubNameInput">eventhubNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKeyInput">partitionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serializationInput">serializationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespaceInput">servicebusNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKeyInput">sharedAccessPolicyKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyNameInput">sharedAccessPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobIdInput">streamAnalyticsJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespace">servicebusNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serialization"></a>

```java
public StreamAnalyticsStreamInputEventhubV2SerializationOutputReference getSerialization();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference">StreamAnalyticsStreamInputEventhubV2SerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeouts"></a>

```java
public StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference">StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationModeInput"></a>

```java
public java.lang.String getAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `eventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="eventhubConsumerGroupNameInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupNameInput"></a>

```java
public java.lang.String getEventhubConsumerGroupNameInput();
```

- *Type:* java.lang.String

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubNameInput"></a>

```java
public java.lang.String getEventhubNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKeyInput"></a>

```java
public java.lang.String getPartitionKeyInput();
```

- *Type:* java.lang.String

---

##### `serializationInput`<sup>Optional</sup> <a name="serializationInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serializationInput"></a>

```java
public StreamAnalyticsStreamInputEventhubV2Serialization getSerializationInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

---

##### `servicebusNamespaceInput`<sup>Optional</sup> <a name="servicebusNamespaceInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespaceInput"></a>

```java
public java.lang.String getServicebusNamespaceInput();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="sharedAccessPolicyKeyInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKeyInput"></a>

```java
public java.lang.String getSharedAccessPolicyKeyInput();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyNameInput`<sup>Optional</sup> <a name="sharedAccessPolicyNameInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyNameInput"></a>

```java
public java.lang.String getSharedAccessPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobIdInput`<sup>Optional</sup> <a name="streamAnalyticsJobIdInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobIdInput"></a>

```java
public java.lang.String getStreamAnalyticsJobIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeoutsInput"></a>

```java
public IResolvable|StreamAnalyticsStreamInputEventhubV2Timeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `eventhubConsumerGroupName`<sup>Required</sup> <a name="eventhubConsumerGroupName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupName"></a>

```java
public java.lang.String getEventhubConsumerGroupName();
```

- *Type:* java.lang.String

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespace"></a>

```java
public java.lang.String getServicebusNamespace();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyKey`<sup>Required</sup> <a name="sharedAccessPolicyKey" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKey"></a>

```java
public java.lang.String getSharedAccessPolicyKey();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyName"></a>

```java
public java.lang.String getSharedAccessPolicyName();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobId"></a>

```java
public java.lang.String getStreamAnalyticsJobId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputEventhubV2Config <a name="StreamAnalyticsStreamInputEventhubV2Config" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2Config;

StreamAnalyticsStreamInputEventhubV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventhubName(java.lang.String)
    .name(java.lang.String)
    .serialization(StreamAnalyticsStreamInputEventhubV2Serialization)
    .servicebusNamespace(java.lang.String)
    .streamAnalyticsJobId(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .eventhubConsumerGroupName(java.lang.String)
//  .id(java.lang.String)
//  .partitionKey(java.lang.String)
//  .sharedAccessPolicyKey(java.lang.String)
//  .sharedAccessPolicyName(java.lang.String)
//  .timeouts(StreamAnalyticsStreamInputEventhubV2Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.serialization">serialization</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | serialization block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.servicebusNamespace">servicebusNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.serialization"></a>

```java
public StreamAnalyticsStreamInputEventhubV2Serialization getSerialization();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#serialization StreamAnalyticsStreamInputEventhubV2#serialization}

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.servicebusNamespace"></a>

```java
public java.lang.String getServicebusNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}.

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.streamAnalyticsJobId"></a>

```java
public java.lang.String getStreamAnalyticsJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}.

---

##### `eventhubConsumerGroupName`<sup>Optional</sup> <a name="eventhubConsumerGroupName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubConsumerGroupName"></a>

```java
public java.lang.String getEventhubConsumerGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}.

---

##### `sharedAccessPolicyKey`<sup>Optional</sup> <a name="sharedAccessPolicyKey" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyKey"></a>

```java
public java.lang.String getSharedAccessPolicyKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}.

---

##### `sharedAccessPolicyName`<sup>Optional</sup> <a name="sharedAccessPolicyName" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyName"></a>

```java
public java.lang.String getSharedAccessPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.timeouts"></a>

```java
public StreamAnalyticsStreamInputEventhubV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#timeouts StreamAnalyticsStreamInputEventhubV2#timeouts}

---

### StreamAnalyticsStreamInputEventhubV2Serialization <a name="StreamAnalyticsStreamInputEventhubV2Serialization" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2Serialization;

StreamAnalyticsStreamInputEventhubV2Serialization.builder()
    .type(java.lang.String)
//  .encoding(java.lang.String)
//  .fieldDelimiter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#type StreamAnalyticsStreamInputEventhubV2#type}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#encoding StreamAnalyticsStreamInputEventhubV2#encoding}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#field_delimiter StreamAnalyticsStreamInputEventhubV2#field_delimiter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#type StreamAnalyticsStreamInputEventhubV2#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#encoding StreamAnalyticsStreamInputEventhubV2#encoding}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#field_delimiter StreamAnalyticsStreamInputEventhubV2#field_delimiter}.

---

### StreamAnalyticsStreamInputEventhubV2Timeouts <a name="StreamAnalyticsStreamInputEventhubV2Timeouts" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2Timeouts;

StreamAnalyticsStreamInputEventhubV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#create StreamAnalyticsStreamInputEventhubV2#create}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#delete StreamAnalyticsStreamInputEventhubV2#delete}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#read StreamAnalyticsStreamInputEventhubV2#read}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#update StreamAnalyticsStreamInputEventhubV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#create StreamAnalyticsStreamInputEventhubV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#delete StreamAnalyticsStreamInputEventhubV2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#read StreamAnalyticsStreamInputEventhubV2#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/stream_analytics_stream_input_eventhub_v2#update StreamAnalyticsStreamInputEventhubV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputEventhubV2SerializationOutputReference <a name="StreamAnalyticsStreamInputEventhubV2SerializationOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference;

new StreamAnalyticsStreamInputEventhubV2SerializationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.internalValue"></a>

```java
public StreamAnalyticsStreamInputEventhubV2Serialization getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

---


### StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference <a name="StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_stream_input_eventhub_v2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference;

new StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|StreamAnalyticsStreamInputEventhubV2Timeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>

---



