# `streamAnalyticsOutputBlob` Submodule <a name="`streamAnalyticsOutputBlob` Submodule" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputBlob <a name="StreamAnalyticsOutputBlob" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob azurerm_stream_analytics_output_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlob;

StreamAnalyticsOutputBlob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dateFormat(java.lang.String)
    .name(java.lang.String)
    .pathPattern(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serialization(StreamAnalyticsOutputBlobSerialization)
    .storageAccountName(java.lang.String)
    .storageContainerName(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
    .timeFormat(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .batchMaxWaitTime(java.lang.String)
//  .batchMinRows(java.lang.Number)
//  .blobWriteMode(java.lang.String)
//  .id(java.lang.String)
//  .storageAccountKey(java.lang.String)
//  .timeouts(StreamAnalyticsOutputBlobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#date_format StreamAnalyticsOutputBlob#date_format}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#name StreamAnalyticsOutputBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.pathPattern">pathPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#path_pattern StreamAnalyticsOutputBlob#path_pattern}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#resource_group_name StreamAnalyticsOutputBlob#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.serialization">serialization</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_account_name StreamAnalyticsOutputBlob#storage_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.storageContainerName">storageContainerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_container_name StreamAnalyticsOutputBlob#storage_container_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#stream_analytics_job_name StreamAnalyticsOutputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#time_format StreamAnalyticsOutputBlob#time_format}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#authentication_mode StreamAnalyticsOutputBlob#authentication_mode}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.batchMaxWaitTime">batchMaxWaitTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#batch_max_wait_time StreamAnalyticsOutputBlob#batch_max_wait_time}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.batchMinRows">batchMinRows</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#batch_min_rows StreamAnalyticsOutputBlob#batch_min_rows}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.blobWriteMode">blobWriteMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#blob_write_mode StreamAnalyticsOutputBlob#blob_write_mode}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#id StreamAnalyticsOutputBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_account_key StreamAnalyticsOutputBlob#storage_account_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.dateFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#date_format StreamAnalyticsOutputBlob#date_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#name StreamAnalyticsOutputBlob#name}.

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.pathPattern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#path_pattern StreamAnalyticsOutputBlob#path_pattern}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#resource_group_name StreamAnalyticsOutputBlob#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.serialization"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#serialization StreamAnalyticsOutputBlob#serialization}

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.storageAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_account_name StreamAnalyticsOutputBlob#storage_account_name}.

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.storageContainerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_container_name StreamAnalyticsOutputBlob#storage_container_name}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#stream_analytics_job_name StreamAnalyticsOutputBlob#stream_analytics_job_name}.

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.timeFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#time_format StreamAnalyticsOutputBlob#time_format}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.authenticationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#authentication_mode StreamAnalyticsOutputBlob#authentication_mode}.

---

##### `batchMaxWaitTime`<sup>Optional</sup> <a name="batchMaxWaitTime" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.batchMaxWaitTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#batch_max_wait_time StreamAnalyticsOutputBlob#batch_max_wait_time}.

---

##### `batchMinRows`<sup>Optional</sup> <a name="batchMinRows" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.batchMinRows"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#batch_min_rows StreamAnalyticsOutputBlob#batch_min_rows}.

---

##### `blobWriteMode`<sup>Optional</sup> <a name="blobWriteMode" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.blobWriteMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#blob_write_mode StreamAnalyticsOutputBlob#blob_write_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#id StreamAnalyticsOutputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.storageAccountKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_account_key StreamAnalyticsOutputBlob#storage_account_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#timeouts StreamAnalyticsOutputBlob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putSerialization">putSerialization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMaxWaitTime">resetBatchMaxWaitTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMinRows">resetBatchMinRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBlobWriteMode">resetBlobWriteMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetStorageAccountKey">resetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSerialization` <a name="putSerialization" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putSerialization"></a>

```java
public void putSerialization(StreamAnalyticsOutputBlobSerialization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsOutputBlobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

---

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetAuthenticationMode"></a>

```java
public void resetAuthenticationMode()
```

##### `resetBatchMaxWaitTime` <a name="resetBatchMaxWaitTime" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMaxWaitTime"></a>

```java
public void resetBatchMaxWaitTime()
```

##### `resetBatchMinRows` <a name="resetBatchMinRows" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBatchMinRows"></a>

```java
public void resetBatchMinRows()
```

##### `resetBlobWriteMode` <a name="resetBlobWriteMode" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetBlobWriteMode"></a>

```java
public void resetBlobWriteMode()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetId"></a>

```java
public void resetId()
```

##### `resetStorageAccountKey` <a name="resetStorageAccountKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetStorageAccountKey"></a>

```java
public void resetStorageAccountKey()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StreamAnalyticsOutputBlob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlob;

StreamAnalyticsOutputBlob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlob;

StreamAnalyticsOutputBlob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlob;

StreamAnalyticsOutputBlob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlob;

StreamAnalyticsOutputBlob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamAnalyticsOutputBlob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StreamAnalyticsOutputBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamAnalyticsOutputBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamAnalyticsOutputBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serialization">serialization</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference">StreamAnalyticsOutputBlobSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference">StreamAnalyticsOutputBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationModeInput">authenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTimeInput">batchMaxWaitTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRowsInput">batchMinRowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteModeInput">blobWriteModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormatInput">dateFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPatternInput">pathPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serializationInput">serializationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerNameInput">storageContainerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormatInput">timeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTime">batchMaxWaitTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRows">batchMinRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteMode">blobWriteMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPattern">pathPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerName">storageContainerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serialization"></a>

```java
public StreamAnalyticsOutputBlobSerializationOutputReference getSerialization();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference">StreamAnalyticsOutputBlobSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeouts"></a>

```java
public StreamAnalyticsOutputBlobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference">StreamAnalyticsOutputBlobTimeoutsOutputReference</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationModeInput"></a>

```java
public java.lang.String getAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `batchMaxWaitTimeInput`<sup>Optional</sup> <a name="batchMaxWaitTimeInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTimeInput"></a>

```java
public java.lang.String getBatchMaxWaitTimeInput();
```

- *Type:* java.lang.String

---

##### `batchMinRowsInput`<sup>Optional</sup> <a name="batchMinRowsInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRowsInput"></a>

```java
public java.lang.Number getBatchMinRowsInput();
```

- *Type:* java.lang.Number

---

##### `blobWriteModeInput`<sup>Optional</sup> <a name="blobWriteModeInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteModeInput"></a>

```java
public java.lang.String getBlobWriteModeInput();
```

- *Type:* java.lang.String

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormatInput"></a>

```java
public java.lang.String getDateFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathPatternInput`<sup>Optional</sup> <a name="pathPatternInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPatternInput"></a>

```java
public java.lang.String getPathPatternInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serializationInput`<sup>Optional</sup> <a name="serializationInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.serializationInput"></a>

```java
public StreamAnalyticsOutputBlobSerialization getSerializationInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `storageContainerNameInput`<sup>Optional</sup> <a name="storageContainerNameInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerNameInput"></a>

```java
public java.lang.String getStorageContainerNameInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobNameInput"></a>

```java
public java.lang.String getStreamAnalyticsJobNameInput();
```

- *Type:* java.lang.String

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormatInput"></a>

```java
public java.lang.String getTimeFormatInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeoutsInput"></a>

```java
public IResolvable|StreamAnalyticsOutputBlobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `batchMaxWaitTime`<sup>Required</sup> <a name="batchMaxWaitTime" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMaxWaitTime"></a>

```java
public java.lang.String getBatchMaxWaitTime();
```

- *Type:* java.lang.String

---

##### `batchMinRows`<sup>Required</sup> <a name="batchMinRows" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.batchMinRows"></a>

```java
public java.lang.Number getBatchMinRows();
```

- *Type:* java.lang.Number

---

##### `blobWriteMode`<sup>Required</sup> <a name="blobWriteMode" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.blobWriteMode"></a>

```java
public java.lang.String getBlobWriteMode();
```

- *Type:* java.lang.String

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.pathPattern"></a>

```java
public java.lang.String getPathPattern();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.storageContainerName"></a>

```java
public java.lang.String getStorageContainerName();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputBlobConfig <a name="StreamAnalyticsOutputBlobConfig" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlobConfig;

StreamAnalyticsOutputBlobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dateFormat(java.lang.String)
    .name(java.lang.String)
    .pathPattern(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serialization(StreamAnalyticsOutputBlobSerialization)
    .storageAccountName(java.lang.String)
    .storageContainerName(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
    .timeFormat(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .batchMaxWaitTime(java.lang.String)
//  .batchMinRows(java.lang.Number)
//  .blobWriteMode(java.lang.String)
//  .id(java.lang.String)
//  .storageAccountKey(java.lang.String)
//  .timeouts(StreamAnalyticsOutputBlobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#date_format StreamAnalyticsOutputBlob#date_format}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#name StreamAnalyticsOutputBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.pathPattern">pathPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#path_pattern StreamAnalyticsOutputBlob#path_pattern}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#resource_group_name StreamAnalyticsOutputBlob#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_account_name StreamAnalyticsOutputBlob#storage_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageContainerName">storageContainerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_container_name StreamAnalyticsOutputBlob#storage_container_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#stream_analytics_job_name StreamAnalyticsOutputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#time_format StreamAnalyticsOutputBlob#time_format}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#authentication_mode StreamAnalyticsOutputBlob#authentication_mode}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMaxWaitTime">batchMaxWaitTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#batch_max_wait_time StreamAnalyticsOutputBlob#batch_max_wait_time}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMinRows">batchMinRows</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#batch_min_rows StreamAnalyticsOutputBlob#batch_min_rows}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.blobWriteMode">blobWriteMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#blob_write_mode StreamAnalyticsOutputBlob#blob_write_mode}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#id StreamAnalyticsOutputBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_account_key StreamAnalyticsOutputBlob#storage_account_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#date_format StreamAnalyticsOutputBlob#date_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#name StreamAnalyticsOutputBlob#name}.

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.pathPattern"></a>

```java
public java.lang.String getPathPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#path_pattern StreamAnalyticsOutputBlob#path_pattern}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#resource_group_name StreamAnalyticsOutputBlob#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.serialization"></a>

```java
public StreamAnalyticsOutputBlobSerialization getSerialization();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#serialization StreamAnalyticsOutputBlob#serialization}

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_account_name StreamAnalyticsOutputBlob#storage_account_name}.

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageContainerName"></a>

```java
public java.lang.String getStorageContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_container_name StreamAnalyticsOutputBlob#storage_container_name}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#stream_analytics_job_name StreamAnalyticsOutputBlob#stream_analytics_job_name}.

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#time_format StreamAnalyticsOutputBlob#time_format}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#authentication_mode StreamAnalyticsOutputBlob#authentication_mode}.

---

##### `batchMaxWaitTime`<sup>Optional</sup> <a name="batchMaxWaitTime" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMaxWaitTime"></a>

```java
public java.lang.String getBatchMaxWaitTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#batch_max_wait_time StreamAnalyticsOutputBlob#batch_max_wait_time}.

---

##### `batchMinRows`<sup>Optional</sup> <a name="batchMinRows" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.batchMinRows"></a>

```java
public java.lang.Number getBatchMinRows();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#batch_min_rows StreamAnalyticsOutputBlob#batch_min_rows}.

---

##### `blobWriteMode`<sup>Optional</sup> <a name="blobWriteMode" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.blobWriteMode"></a>

```java
public java.lang.String getBlobWriteMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#blob_write_mode StreamAnalyticsOutputBlob#blob_write_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#id StreamAnalyticsOutputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#storage_account_key StreamAnalyticsOutputBlob#storage_account_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobConfig.property.timeouts"></a>

```java
public StreamAnalyticsOutputBlobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#timeouts StreamAnalyticsOutputBlob#timeouts}

---

### StreamAnalyticsOutputBlobSerialization <a name="StreamAnalyticsOutputBlobSerialization" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlobSerialization;

StreamAnalyticsOutputBlobSerialization.builder()
    .type(java.lang.String)
//  .encoding(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .format(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#type StreamAnalyticsOutputBlob#type}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#encoding StreamAnalyticsOutputBlob#encoding}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#field_delimiter StreamAnalyticsOutputBlob#field_delimiter}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#format StreamAnalyticsOutputBlob#format}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#type StreamAnalyticsOutputBlob#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#encoding StreamAnalyticsOutputBlob#encoding}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#field_delimiter StreamAnalyticsOutputBlob#field_delimiter}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#format StreamAnalyticsOutputBlob#format}.

---

### StreamAnalyticsOutputBlobTimeouts <a name="StreamAnalyticsOutputBlobTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlobTimeouts;

StreamAnalyticsOutputBlobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#create StreamAnalyticsOutputBlob#create}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#delete StreamAnalyticsOutputBlob#delete}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#read StreamAnalyticsOutputBlob#read}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#update StreamAnalyticsOutputBlob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#create StreamAnalyticsOutputBlob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#delete StreamAnalyticsOutputBlob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#read StreamAnalyticsOutputBlob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/stream_analytics_output_blob#update StreamAnalyticsOutputBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputBlobSerializationOutputReference <a name="StreamAnalyticsOutputBlobSerializationOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlobSerializationOutputReference;

new StreamAnalyticsOutputBlobSerializationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.resetFormat"></a>

```java
public void resetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerializationOutputReference.property.internalValue"></a>

```java
public StreamAnalyticsOutputBlobSerialization getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobSerialization">StreamAnalyticsOutputBlobSerialization</a>

---


### StreamAnalyticsOutputBlobTimeoutsOutputReference <a name="StreamAnalyticsOutputBlobTimeoutsOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.stream_analytics_output_blob.StreamAnalyticsOutputBlobTimeoutsOutputReference;

new StreamAnalyticsOutputBlobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|StreamAnalyticsOutputBlobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.streamAnalyticsOutputBlob.StreamAnalyticsOutputBlobTimeouts">StreamAnalyticsOutputBlobTimeouts</a>

---



