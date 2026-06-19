# `kustoIothubDataConnection` Submodule <a name="`kustoIothubDataConnection` Submodule" id="@cdktn/provider-azurerm.kustoIothubDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoIothubDataConnection <a name="KustoIothubDataConnection" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection azurerm_kusto_iothub_data_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kusto_iothub_data_connection.KustoIothubDataConnection;

KustoIothubDataConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .consumerGroup(java.lang.String)
    .databaseName(java.lang.String)
    .iothubId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sharedAccessPolicyName(java.lang.String)
//  .databaseRoutingType(java.lang.String)
//  .dataFormat(java.lang.String)
//  .eventSystemProperties(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .mappingRuleName(java.lang.String)
//  .retrievalStartDate(java.lang.String)
//  .tableName(java.lang.String)
//  .timeouts(KustoIothubDataConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.databaseRoutingType">databaseRoutingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.eventSystemProperties">eventSystemProperties</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.mappingRuleName">mappingRuleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.retrievalStartDate">retrievalStartDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#retrieval_start_date KustoIothubDataConnection#retrieval_start_date}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}.

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.consumerGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.iothubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}.

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.sharedAccessPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}.

---

##### `databaseRoutingType`<sup>Optional</sup> <a name="databaseRoutingType" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.databaseRoutingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.dataFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}.

---

##### `eventSystemProperties`<sup>Optional</sup> <a name="eventSystemProperties" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.eventSystemProperties"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappingRuleName`<sup>Optional</sup> <a name="mappingRuleName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.mappingRuleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}.

---

##### `retrievalStartDate`<sup>Optional</sup> <a name="retrievalStartDate" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.retrievalStartDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#retrieval_start_date KustoIothubDataConnection#retrieval_start_date}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#timeouts KustoIothubDataConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDatabaseRoutingType">resetDatabaseRoutingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetEventSystemProperties">resetEventSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetMappingRuleName">resetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetRetrievalStartDate">resetRetrievalStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts"></a>

```java
public void putTimeouts(KustoIothubDataConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

---

##### `resetDatabaseRoutingType` <a name="resetDatabaseRoutingType" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDatabaseRoutingType"></a>

```java
public void resetDatabaseRoutingType()
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDataFormat"></a>

```java
public void resetDataFormat()
```

##### `resetEventSystemProperties` <a name="resetEventSystemProperties" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetEventSystemProperties"></a>

```java
public void resetEventSystemProperties()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetId"></a>

```java
public void resetId()
```

##### `resetMappingRuleName` <a name="resetMappingRuleName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetMappingRuleName"></a>

```java
public void resetMappingRuleName()
```

##### `resetRetrievalStartDate` <a name="resetRetrievalStartDate" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetRetrievalStartDate"></a>

```java
public void resetRetrievalStartDate()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KustoIothubDataConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.kusto_iothub_data_connection.KustoIothubDataConnection;

KustoIothubDataConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.kusto_iothub_data_connection.KustoIothubDataConnection;

KustoIothubDataConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.kusto_iothub_data_connection.KustoIothubDataConnection;

KustoIothubDataConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.kusto_iothub_data_connection.KustoIothubDataConnection;

KustoIothubDataConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KustoIothubDataConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KustoIothubDataConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KustoIothubDataConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KustoIothubDataConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KustoIothubDataConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference">KustoIothubDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroupInput">consumerGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingTypeInput">databaseRoutingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormatInput">dataFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemPropertiesInput">eventSystemPropertiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubIdInput">iothubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleNameInput">mappingRuleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.retrievalStartDateInput">retrievalStartDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyNameInput">sharedAccessPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingType">databaseRoutingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemProperties">eventSystemProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleName">mappingRuleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.retrievalStartDate">retrievalStartDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeouts"></a>

```java
public KustoIothubDataConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference">KustoIothubDataConnectionTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `consumerGroupInput`<sup>Optional</sup> <a name="consumerGroupInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroupInput"></a>

```java
public java.lang.String getConsumerGroupInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `databaseRoutingTypeInput`<sup>Optional</sup> <a name="databaseRoutingTypeInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingTypeInput"></a>

```java
public java.lang.String getDatabaseRoutingTypeInput();
```

- *Type:* java.lang.String

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormatInput"></a>

```java
public java.lang.String getDataFormatInput();
```

- *Type:* java.lang.String

---

##### `eventSystemPropertiesInput`<sup>Optional</sup> <a name="eventSystemPropertiesInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemPropertiesInput"></a>

```java
public java.util.List<java.lang.String> getEventSystemPropertiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubIdInput"></a>

```java
public java.lang.String getIothubIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mappingRuleNameInput`<sup>Optional</sup> <a name="mappingRuleNameInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleNameInput"></a>

```java
public java.lang.String getMappingRuleNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retrievalStartDateInput`<sup>Optional</sup> <a name="retrievalStartDateInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.retrievalStartDateInput"></a>

```java
public java.lang.String getRetrievalStartDateInput();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyNameInput`<sup>Optional</sup> <a name="sharedAccessPolicyNameInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyNameInput"></a>

```java
public java.lang.String getSharedAccessPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeoutsInput"></a>

```java
public IResolvable|KustoIothubDataConnectionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroup"></a>

```java
public java.lang.String getConsumerGroup();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `databaseRoutingType`<sup>Required</sup> <a name="databaseRoutingType" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingType"></a>

```java
public java.lang.String getDatabaseRoutingType();
```

- *Type:* java.lang.String

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

---

##### `eventSystemProperties`<sup>Required</sup> <a name="eventSystemProperties" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemProperties"></a>

```java
public java.util.List<java.lang.String> getEventSystemProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mappingRuleName`<sup>Required</sup> <a name="mappingRuleName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleName"></a>

```java
public java.lang.String getMappingRuleName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `retrievalStartDate`<sup>Required</sup> <a name="retrievalStartDate" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.retrievalStartDate"></a>

```java
public java.lang.String getRetrievalStartDate();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyName"></a>

```java
public java.lang.String getSharedAccessPolicyName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KustoIothubDataConnectionConfig <a name="KustoIothubDataConnectionConfig" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kusto_iothub_data_connection.KustoIothubDataConnectionConfig;

KustoIothubDataConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .consumerGroup(java.lang.String)
    .databaseName(java.lang.String)
    .iothubId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sharedAccessPolicyName(java.lang.String)
//  .databaseRoutingType(java.lang.String)
//  .dataFormat(java.lang.String)
//  .eventSystemProperties(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .mappingRuleName(java.lang.String)
//  .retrievalStartDate(java.lang.String)
//  .tableName(java.lang.String)
//  .timeouts(KustoIothubDataConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseRoutingType">databaseRoutingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.eventSystemProperties">eventSystemProperties</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.mappingRuleName">mappingRuleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.retrievalStartDate">retrievalStartDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#retrieval_start_date KustoIothubDataConnection#retrieval_start_date}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}.

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.consumerGroup"></a>

```java
public java.lang.String getConsumerGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}.

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.sharedAccessPolicyName"></a>

```java
public java.lang.String getSharedAccessPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}.

---

##### `databaseRoutingType`<sup>Optional</sup> <a name="databaseRoutingType" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseRoutingType"></a>

```java
public java.lang.String getDatabaseRoutingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}.

---

##### `eventSystemProperties`<sup>Optional</sup> <a name="eventSystemProperties" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.eventSystemProperties"></a>

```java
public java.util.List<java.lang.String> getEventSystemProperties();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappingRuleName`<sup>Optional</sup> <a name="mappingRuleName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.mappingRuleName"></a>

```java
public java.lang.String getMappingRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}.

---

##### `retrievalStartDate`<sup>Optional</sup> <a name="retrievalStartDate" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.retrievalStartDate"></a>

```java
public java.lang.String getRetrievalStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#retrieval_start_date KustoIothubDataConnection#retrieval_start_date}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.timeouts"></a>

```java
public KustoIothubDataConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#timeouts KustoIothubDataConnection#timeouts}

---

### KustoIothubDataConnectionTimeouts <a name="KustoIothubDataConnectionTimeouts" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kusto_iothub_data_connection.KustoIothubDataConnectionTimeouts;

KustoIothubDataConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#create KustoIothubDataConnection#create}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#delete KustoIothubDataConnection#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#read KustoIothubDataConnection#read}. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#update KustoIothubDataConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#create KustoIothubDataConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#delete KustoIothubDataConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#read KustoIothubDataConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/kusto_iothub_data_connection#update KustoIothubDataConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoIothubDataConnectionTimeoutsOutputReference <a name="KustoIothubDataConnectionTimeoutsOutputReference" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kusto_iothub_data_connection.KustoIothubDataConnectionTimeoutsOutputReference;

new KustoIothubDataConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|KustoIothubDataConnectionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

---



