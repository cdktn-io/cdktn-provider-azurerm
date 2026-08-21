# `digitalTwinsTimeSeriesDatabaseConnection` Submodule <a name="`digitalTwinsTimeSeriesDatabaseConnection` Submodule" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsTimeSeriesDatabaseConnection <a name="DigitalTwinsTimeSeriesDatabaseConnection" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection azurerm_digital_twins_time_series_database_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer"></a>

```java
import io.cdktn.providers.azurerm.digital_twins_time_series_database_connection.DigitalTwinsTimeSeriesDatabaseConnection;

DigitalTwinsTimeSeriesDatabaseConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .digitalTwinsId(java.lang.String)
    .eventhubName(java.lang.String)
    .eventhubNamespaceEndpointUri(java.lang.String)
    .eventhubNamespaceId(java.lang.String)
    .kustoClusterId(java.lang.String)
    .kustoClusterUri(java.lang.String)
    .kustoDatabaseName(java.lang.String)
    .name(java.lang.String)
//  .eventhubConsumerGroupName(java.lang.String)
//  .id(java.lang.String)
//  .kustoTableName(java.lang.String)
//  .timeouts(DigitalTwinsTimeSeriesDatabaseConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubNamespaceEndpointUri">eventhubNamespaceEndpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubNamespaceId">eventhubNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoClusterId">kustoClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoClusterUri">kustoClusterUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoDatabaseName">kustoDatabaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoTableName">kustoTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.digitalTwinsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}.

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}.

---

##### `eventhubNamespaceEndpointUri`<sup>Required</sup> <a name="eventhubNamespaceEndpointUri" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubNamespaceEndpointUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}.

---

##### `eventhubNamespaceId`<sup>Required</sup> <a name="eventhubNamespaceId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubNamespaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}.

---

##### `kustoClusterId`<sup>Required</sup> <a name="kustoClusterId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}.

---

##### `kustoClusterUri`<sup>Required</sup> <a name="kustoClusterUri" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoClusterUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}.

---

##### `kustoDatabaseName`<sup>Required</sup> <a name="kustoDatabaseName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoDatabaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}.

---

##### `eventhubConsumerGroupName`<sup>Optional</sup> <a name="eventhubConsumerGroupName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubConsumerGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kustoTableName`<sup>Optional</sup> <a name="kustoTableName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoTableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#timeouts DigitalTwinsTimeSeriesDatabaseConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetEventhubConsumerGroupName">resetEventhubConsumerGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetKustoTableName">resetKustoTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts"></a>

```java
public void putTimeouts(DigitalTwinsTimeSeriesDatabaseConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>

---

##### `resetEventhubConsumerGroupName` <a name="resetEventhubConsumerGroupName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetEventhubConsumerGroupName"></a>

```java
public void resetEventhubConsumerGroupName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetId"></a>

```java
public void resetId()
```

##### `resetKustoTableName` <a name="resetKustoTableName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetKustoTableName"></a>

```java
public void resetKustoTableName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DigitalTwinsTimeSeriesDatabaseConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.digital_twins_time_series_database_connection.DigitalTwinsTimeSeriesDatabaseConnection;

DigitalTwinsTimeSeriesDatabaseConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.digital_twins_time_series_database_connection.DigitalTwinsTimeSeriesDatabaseConnection;

DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.digital_twins_time_series_database_connection.DigitalTwinsTimeSeriesDatabaseConnection;

DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.digital_twins_time_series_database_connection.DigitalTwinsTimeSeriesDatabaseConnection;

DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DigitalTwinsTimeSeriesDatabaseConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DigitalTwinsTimeSeriesDatabaseConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DigitalTwinsTimeSeriesDatabaseConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DigitalTwinsTimeSeriesDatabaseConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference">DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsIdInput">digitalTwinsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupNameInput">eventhubConsumerGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNameInput">eventhubNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUriInput">eventhubNamespaceEndpointUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceIdInput">eventhubNamespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterIdInput">kustoClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUriInput">kustoClusterUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseNameInput">kustoDatabaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableNameInput">kustoTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUri">eventhubNamespaceEndpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceId">eventhubNamespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterId">kustoClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUri">kustoClusterUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseName">kustoDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableName">kustoTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeouts"></a>

```java
public DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference">DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference</a>

---

##### `digitalTwinsIdInput`<sup>Optional</sup> <a name="digitalTwinsIdInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsIdInput"></a>

```java
public java.lang.String getDigitalTwinsIdInput();
```

- *Type:* java.lang.String

---

##### `eventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="eventhubConsumerGroupNameInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupNameInput"></a>

```java
public java.lang.String getEventhubConsumerGroupNameInput();
```

- *Type:* java.lang.String

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNameInput"></a>

```java
public java.lang.String getEventhubNameInput();
```

- *Type:* java.lang.String

---

##### `eventhubNamespaceEndpointUriInput`<sup>Optional</sup> <a name="eventhubNamespaceEndpointUriInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUriInput"></a>

```java
public java.lang.String getEventhubNamespaceEndpointUriInput();
```

- *Type:* java.lang.String

---

##### `eventhubNamespaceIdInput`<sup>Optional</sup> <a name="eventhubNamespaceIdInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceIdInput"></a>

```java
public java.lang.String getEventhubNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kustoClusterIdInput`<sup>Optional</sup> <a name="kustoClusterIdInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterIdInput"></a>

```java
public java.lang.String getKustoClusterIdInput();
```

- *Type:* java.lang.String

---

##### `kustoClusterUriInput`<sup>Optional</sup> <a name="kustoClusterUriInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUriInput"></a>

```java
public java.lang.String getKustoClusterUriInput();
```

- *Type:* java.lang.String

---

##### `kustoDatabaseNameInput`<sup>Optional</sup> <a name="kustoDatabaseNameInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseNameInput"></a>

```java
public java.lang.String getKustoDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `kustoTableNameInput`<sup>Optional</sup> <a name="kustoTableNameInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableNameInput"></a>

```java
public java.lang.String getKustoTableNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeoutsInput"></a>

```java
public IResolvable|DigitalTwinsTimeSeriesDatabaseConnectionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsId"></a>

```java
public java.lang.String getDigitalTwinsId();
```

- *Type:* java.lang.String

---

##### `eventhubConsumerGroupName`<sup>Required</sup> <a name="eventhubConsumerGroupName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupName"></a>

```java
public java.lang.String getEventhubConsumerGroupName();
```

- *Type:* java.lang.String

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

---

##### `eventhubNamespaceEndpointUri`<sup>Required</sup> <a name="eventhubNamespaceEndpointUri" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUri"></a>

```java
public java.lang.String getEventhubNamespaceEndpointUri();
```

- *Type:* java.lang.String

---

##### `eventhubNamespaceId`<sup>Required</sup> <a name="eventhubNamespaceId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceId"></a>

```java
public java.lang.String getEventhubNamespaceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kustoClusterId`<sup>Required</sup> <a name="kustoClusterId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterId"></a>

```java
public java.lang.String getKustoClusterId();
```

- *Type:* java.lang.String

---

##### `kustoClusterUri`<sup>Required</sup> <a name="kustoClusterUri" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUri"></a>

```java
public java.lang.String getKustoClusterUri();
```

- *Type:* java.lang.String

---

##### `kustoDatabaseName`<sup>Required</sup> <a name="kustoDatabaseName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseName"></a>

```java
public java.lang.String getKustoDatabaseName();
```

- *Type:* java.lang.String

---

##### `kustoTableName`<sup>Required</sup> <a name="kustoTableName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableName"></a>

```java
public java.lang.String getKustoTableName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsTimeSeriesDatabaseConnectionConfig <a name="DigitalTwinsTimeSeriesDatabaseConnectionConfig" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.digital_twins_time_series_database_connection.DigitalTwinsTimeSeriesDatabaseConnectionConfig;

DigitalTwinsTimeSeriesDatabaseConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .digitalTwinsId(java.lang.String)
    .eventhubName(java.lang.String)
    .eventhubNamespaceEndpointUri(java.lang.String)
    .eventhubNamespaceId(java.lang.String)
    .kustoClusterId(java.lang.String)
    .kustoClusterUri(java.lang.String)
    .kustoDatabaseName(java.lang.String)
    .name(java.lang.String)
//  .eventhubConsumerGroupName(java.lang.String)
//  .id(java.lang.String)
//  .kustoTableName(java.lang.String)
//  .timeouts(DigitalTwinsTimeSeriesDatabaseConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceEndpointUri">eventhubNamespaceEndpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceId">eventhubNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterId">kustoClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterUri">kustoClusterUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoDatabaseName">kustoDatabaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoTableName">kustoTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.digitalTwinsId"></a>

```java
public java.lang.String getDigitalTwinsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}.

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}.

---

##### `eventhubNamespaceEndpointUri`<sup>Required</sup> <a name="eventhubNamespaceEndpointUri" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceEndpointUri"></a>

```java
public java.lang.String getEventhubNamespaceEndpointUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}.

---

##### `eventhubNamespaceId`<sup>Required</sup> <a name="eventhubNamespaceId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceId"></a>

```java
public java.lang.String getEventhubNamespaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}.

---

##### `kustoClusterId`<sup>Required</sup> <a name="kustoClusterId" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterId"></a>

```java
public java.lang.String getKustoClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}.

---

##### `kustoClusterUri`<sup>Required</sup> <a name="kustoClusterUri" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterUri"></a>

```java
public java.lang.String getKustoClusterUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}.

---

##### `kustoDatabaseName`<sup>Required</sup> <a name="kustoDatabaseName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoDatabaseName"></a>

```java
public java.lang.String getKustoDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}.

---

##### `eventhubConsumerGroupName`<sup>Optional</sup> <a name="eventhubConsumerGroupName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubConsumerGroupName"></a>

```java
public java.lang.String getEventhubConsumerGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kustoTableName`<sup>Optional</sup> <a name="kustoTableName" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoTableName"></a>

```java
public java.lang.String getKustoTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.timeouts"></a>

```java
public DigitalTwinsTimeSeriesDatabaseConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#timeouts DigitalTwinsTimeSeriesDatabaseConnection#timeouts}

---

### DigitalTwinsTimeSeriesDatabaseConnectionTimeouts <a name="DigitalTwinsTimeSeriesDatabaseConnectionTimeouts" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.digital_twins_time_series_database_connection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts;

DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#create DigitalTwinsTimeSeriesDatabaseConnection#create}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#delete DigitalTwinsTimeSeriesDatabaseConnection#delete}. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#read DigitalTwinsTimeSeriesDatabaseConnection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#create DigitalTwinsTimeSeriesDatabaseConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#delete DigitalTwinsTimeSeriesDatabaseConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/digital_twins_time_series_database_connection#read DigitalTwinsTimeSeriesDatabaseConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference <a name="DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.digital_twins_time_series_database_connection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference;

new DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DigitalTwinsTimeSeriesDatabaseConnectionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>

---



