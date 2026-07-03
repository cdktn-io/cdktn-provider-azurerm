# `cosmosdbCassandraCluster` Submodule <a name="`cosmosdbCassandraCluster` Submodule" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbCassandraCluster <a name="CosmosdbCassandraCluster" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster azurerm_cosmosdb_cassandra_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraCluster;

CosmosdbCassandraCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultAdminPassword(java.lang.String)
    .delegatedManagementSubnetId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .authenticationMethod(java.lang.String)
//  .clientCertificatePems(java.util.List<java.lang.String>)
//  .externalGossipCertificatePems(java.util.List<java.lang.String>)
//  .externalSeedNodeIpAddresses(java.util.List<java.lang.String>)
//  .hoursBetweenBackups(java.lang.Number)
//  .id(java.lang.String)
//  .identity(CosmosdbCassandraClusterIdentity)
//  .repairEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CosmosdbCassandraClusterTimeouts)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.defaultAdminPassword">defaultAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#default_admin_password CosmosdbCassandraCluster#default_admin_password}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.delegatedManagementSubnetId">delegatedManagementSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#delegated_management_subnet_id CosmosdbCassandraCluster#delegated_management_subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#location CosmosdbCassandraCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#name CosmosdbCassandraCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#resource_group_name CosmosdbCassandraCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#authentication_method CosmosdbCassandraCluster#authentication_method}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.clientCertificatePems">clientCertificatePems</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#client_certificate_pems CosmosdbCassandraCluster#client_certificate_pems}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.externalGossipCertificatePems">externalGossipCertificatePems</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#external_gossip_certificate_pems CosmosdbCassandraCluster#external_gossip_certificate_pems}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.externalSeedNodeIpAddresses">externalSeedNodeIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#external_seed_node_ip_addresses CosmosdbCassandraCluster#external_seed_node_ip_addresses}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.hoursBetweenBackups">hoursBetweenBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#hours_between_backups CosmosdbCassandraCluster#hours_between_backups}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#id CosmosdbCassandraCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.repairEnabled">repairEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#repair_enabled CosmosdbCassandraCluster#repair_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#tags CosmosdbCassandraCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#version CosmosdbCassandraCluster#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultAdminPassword`<sup>Required</sup> <a name="defaultAdminPassword" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.defaultAdminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#default_admin_password CosmosdbCassandraCluster#default_admin_password}.

---

##### `delegatedManagementSubnetId`<sup>Required</sup> <a name="delegatedManagementSubnetId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.delegatedManagementSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#delegated_management_subnet_id CosmosdbCassandraCluster#delegated_management_subnet_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#location CosmosdbCassandraCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#name CosmosdbCassandraCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#resource_group_name CosmosdbCassandraCluster#resource_group_name}.

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.authenticationMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#authentication_method CosmosdbCassandraCluster#authentication_method}.

---

##### `clientCertificatePems`<sup>Optional</sup> <a name="clientCertificatePems" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.clientCertificatePems"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#client_certificate_pems CosmosdbCassandraCluster#client_certificate_pems}.

---

##### `externalGossipCertificatePems`<sup>Optional</sup> <a name="externalGossipCertificatePems" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.externalGossipCertificatePems"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#external_gossip_certificate_pems CosmosdbCassandraCluster#external_gossip_certificate_pems}.

---

##### `externalSeedNodeIpAddresses`<sup>Optional</sup> <a name="externalSeedNodeIpAddresses" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.externalSeedNodeIpAddresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#external_seed_node_ip_addresses CosmosdbCassandraCluster#external_seed_node_ip_addresses}.

---

##### `hoursBetweenBackups`<sup>Optional</sup> <a name="hoursBetweenBackups" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.hoursBetweenBackups"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#hours_between_backups CosmosdbCassandraCluster#hours_between_backups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#id CosmosdbCassandraCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#identity CosmosdbCassandraCluster#identity}

---

##### `repairEnabled`<sup>Optional</sup> <a name="repairEnabled" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.repairEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#repair_enabled CosmosdbCassandraCluster#repair_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#tags CosmosdbCassandraCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#timeouts CosmosdbCassandraCluster#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#version CosmosdbCassandraCluster#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetClientCertificatePems">resetClientCertificatePems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetExternalGossipCertificatePems">resetExternalGossipCertificatePems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetExternalSeedNodeIpAddresses">resetExternalSeedNodeIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetHoursBetweenBackups">resetHoursBetweenBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetRepairEnabled">resetRepairEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putIdentity"></a>

```java
public void putIdentity(CosmosdbCassandraClusterIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putTimeouts"></a>

```java
public void putTimeouts(CosmosdbCassandraClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a>

---

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetAuthenticationMethod"></a>

```java
public void resetAuthenticationMethod()
```

##### `resetClientCertificatePems` <a name="resetClientCertificatePems" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetClientCertificatePems"></a>

```java
public void resetClientCertificatePems()
```

##### `resetExternalGossipCertificatePems` <a name="resetExternalGossipCertificatePems" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetExternalGossipCertificatePems"></a>

```java
public void resetExternalGossipCertificatePems()
```

##### `resetExternalSeedNodeIpAddresses` <a name="resetExternalSeedNodeIpAddresses" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetExternalSeedNodeIpAddresses"></a>

```java
public void resetExternalSeedNodeIpAddresses()
```

##### `resetHoursBetweenBackups` <a name="resetHoursBetweenBackups" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetHoursBetweenBackups"></a>

```java
public void resetHoursBetweenBackups()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetRepairEnabled` <a name="resetRepairEnabled" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetRepairEnabled"></a>

```java
public void resetRepairEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CosmosdbCassandraCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraCluster;

CosmosdbCassandraCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraCluster;

CosmosdbCassandraCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraCluster;

CosmosdbCassandraCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraCluster;

CosmosdbCassandraCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CosmosdbCassandraCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CosmosdbCassandraCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CosmosdbCassandraCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CosmosdbCassandraCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CosmosdbCassandraCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference">CosmosdbCassandraClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference">CosmosdbCassandraClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.clientCertificatePemsInput">clientCertificatePemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.defaultAdminPasswordInput">defaultAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.delegatedManagementSubnetIdInput">delegatedManagementSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalGossipCertificatePemsInput">externalGossipCertificatePemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalSeedNodeIpAddressesInput">externalSeedNodeIpAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.hoursBetweenBackupsInput">hoursBetweenBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.repairEnabledInput">repairEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.clientCertificatePems">clientCertificatePems</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.defaultAdminPassword">defaultAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.delegatedManagementSubnetId">delegatedManagementSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalGossipCertificatePems">externalGossipCertificatePems</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalSeedNodeIpAddresses">externalSeedNodeIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.hoursBetweenBackups">hoursBetweenBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.repairEnabled">repairEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.identity"></a>

```java
public CosmosdbCassandraClusterIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference">CosmosdbCassandraClusterIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.timeouts"></a>

```java
public CosmosdbCassandraClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference">CosmosdbCassandraClusterTimeoutsOutputReference</a>

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.authenticationMethodInput"></a>

```java
public java.lang.String getAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `clientCertificatePemsInput`<sup>Optional</sup> <a name="clientCertificatePemsInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.clientCertificatePemsInput"></a>

```java
public java.util.List<java.lang.String> getClientCertificatePemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultAdminPasswordInput`<sup>Optional</sup> <a name="defaultAdminPasswordInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.defaultAdminPasswordInput"></a>

```java
public java.lang.String getDefaultAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `delegatedManagementSubnetIdInput`<sup>Optional</sup> <a name="delegatedManagementSubnetIdInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.delegatedManagementSubnetIdInput"></a>

```java
public java.lang.String getDelegatedManagementSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `externalGossipCertificatePemsInput`<sup>Optional</sup> <a name="externalGossipCertificatePemsInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalGossipCertificatePemsInput"></a>

```java
public java.util.List<java.lang.String> getExternalGossipCertificatePemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalSeedNodeIpAddressesInput`<sup>Optional</sup> <a name="externalSeedNodeIpAddressesInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalSeedNodeIpAddressesInput"></a>

```java
public java.util.List<java.lang.String> getExternalSeedNodeIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hoursBetweenBackupsInput`<sup>Optional</sup> <a name="hoursBetweenBackupsInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.hoursBetweenBackupsInput"></a>

```java
public java.lang.Number getHoursBetweenBackupsInput();
```

- *Type:* java.lang.Number

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.identityInput"></a>

```java
public CosmosdbCassandraClusterIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `repairEnabledInput`<sup>Optional</sup> <a name="repairEnabledInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.repairEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRepairEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.timeoutsInput"></a>

```java
public IResolvable|CosmosdbCassandraClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `clientCertificatePems`<sup>Required</sup> <a name="clientCertificatePems" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.clientCertificatePems"></a>

```java
public java.util.List<java.lang.String> getClientCertificatePems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultAdminPassword`<sup>Required</sup> <a name="defaultAdminPassword" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.defaultAdminPassword"></a>

```java
public java.lang.String getDefaultAdminPassword();
```

- *Type:* java.lang.String

---

##### `delegatedManagementSubnetId`<sup>Required</sup> <a name="delegatedManagementSubnetId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.delegatedManagementSubnetId"></a>

```java
public java.lang.String getDelegatedManagementSubnetId();
```

- *Type:* java.lang.String

---

##### `externalGossipCertificatePems`<sup>Required</sup> <a name="externalGossipCertificatePems" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalGossipCertificatePems"></a>

```java
public java.util.List<java.lang.String> getExternalGossipCertificatePems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalSeedNodeIpAddresses`<sup>Required</sup> <a name="externalSeedNodeIpAddresses" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalSeedNodeIpAddresses"></a>

```java
public java.util.List<java.lang.String> getExternalSeedNodeIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hoursBetweenBackups`<sup>Required</sup> <a name="hoursBetweenBackups" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.hoursBetweenBackups"></a>

```java
public java.lang.Number getHoursBetweenBackups();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `repairEnabled`<sup>Required</sup> <a name="repairEnabled" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.repairEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRepairEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbCassandraClusterConfig <a name="CosmosdbCassandraClusterConfig" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraClusterConfig;

CosmosdbCassandraClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultAdminPassword(java.lang.String)
    .delegatedManagementSubnetId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .authenticationMethod(java.lang.String)
//  .clientCertificatePems(java.util.List<java.lang.String>)
//  .externalGossipCertificatePems(java.util.List<java.lang.String>)
//  .externalSeedNodeIpAddresses(java.util.List<java.lang.String>)
//  .hoursBetweenBackups(java.lang.Number)
//  .id(java.lang.String)
//  .identity(CosmosdbCassandraClusterIdentity)
//  .repairEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CosmosdbCassandraClusterTimeouts)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.defaultAdminPassword">defaultAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#default_admin_password CosmosdbCassandraCluster#default_admin_password}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.delegatedManagementSubnetId">delegatedManagementSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#delegated_management_subnet_id CosmosdbCassandraCluster#delegated_management_subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#location CosmosdbCassandraCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#name CosmosdbCassandraCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#resource_group_name CosmosdbCassandraCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.authenticationMethod">authenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#authentication_method CosmosdbCassandraCluster#authentication_method}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.clientCertificatePems">clientCertificatePems</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#client_certificate_pems CosmosdbCassandraCluster#client_certificate_pems}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.externalGossipCertificatePems">externalGossipCertificatePems</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#external_gossip_certificate_pems CosmosdbCassandraCluster#external_gossip_certificate_pems}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.externalSeedNodeIpAddresses">externalSeedNodeIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#external_seed_node_ip_addresses CosmosdbCassandraCluster#external_seed_node_ip_addresses}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.hoursBetweenBackups">hoursBetweenBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#hours_between_backups CosmosdbCassandraCluster#hours_between_backups}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#id CosmosdbCassandraCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.repairEnabled">repairEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#repair_enabled CosmosdbCassandraCluster#repair_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#tags CosmosdbCassandraCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#version CosmosdbCassandraCluster#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultAdminPassword`<sup>Required</sup> <a name="defaultAdminPassword" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.defaultAdminPassword"></a>

```java
public java.lang.String getDefaultAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#default_admin_password CosmosdbCassandraCluster#default_admin_password}.

---

##### `delegatedManagementSubnetId`<sup>Required</sup> <a name="delegatedManagementSubnetId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.delegatedManagementSubnetId"></a>

```java
public java.lang.String getDelegatedManagementSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#delegated_management_subnet_id CosmosdbCassandraCluster#delegated_management_subnet_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#location CosmosdbCassandraCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#name CosmosdbCassandraCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#resource_group_name CosmosdbCassandraCluster#resource_group_name}.

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.authenticationMethod"></a>

```java
public java.lang.String getAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#authentication_method CosmosdbCassandraCluster#authentication_method}.

---

##### `clientCertificatePems`<sup>Optional</sup> <a name="clientCertificatePems" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.clientCertificatePems"></a>

```java
public java.util.List<java.lang.String> getClientCertificatePems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#client_certificate_pems CosmosdbCassandraCluster#client_certificate_pems}.

---

##### `externalGossipCertificatePems`<sup>Optional</sup> <a name="externalGossipCertificatePems" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.externalGossipCertificatePems"></a>

```java
public java.util.List<java.lang.String> getExternalGossipCertificatePems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#external_gossip_certificate_pems CosmosdbCassandraCluster#external_gossip_certificate_pems}.

---

##### `externalSeedNodeIpAddresses`<sup>Optional</sup> <a name="externalSeedNodeIpAddresses" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.externalSeedNodeIpAddresses"></a>

```java
public java.util.List<java.lang.String> getExternalSeedNodeIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#external_seed_node_ip_addresses CosmosdbCassandraCluster#external_seed_node_ip_addresses}.

---

##### `hoursBetweenBackups`<sup>Optional</sup> <a name="hoursBetweenBackups" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.hoursBetweenBackups"></a>

```java
public java.lang.Number getHoursBetweenBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#hours_between_backups CosmosdbCassandraCluster#hours_between_backups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#id CosmosdbCassandraCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.identity"></a>

```java
public CosmosdbCassandraClusterIdentity getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#identity CosmosdbCassandraCluster#identity}

---

##### `repairEnabled`<sup>Optional</sup> <a name="repairEnabled" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.repairEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRepairEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#repair_enabled CosmosdbCassandraCluster#repair_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#tags CosmosdbCassandraCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.timeouts"></a>

```java
public CosmosdbCassandraClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#timeouts CosmosdbCassandraCluster#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#version CosmosdbCassandraCluster#version}.

---

### CosmosdbCassandraClusterIdentity <a name="CosmosdbCassandraClusterIdentity" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraClusterIdentity;

CosmosdbCassandraClusterIdentity.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#type CosmosdbCassandraCluster#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#type CosmosdbCassandraCluster#type}.

---

### CosmosdbCassandraClusterTimeouts <a name="CosmosdbCassandraClusterTimeouts" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraClusterTimeouts;

CosmosdbCassandraClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#create CosmosdbCassandraCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#delete CosmosdbCassandraCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#read CosmosdbCassandraCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#update CosmosdbCassandraCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#create CosmosdbCassandraCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#delete CosmosdbCassandraCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#read CosmosdbCassandraCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/cosmosdb_cassandra_cluster#update CosmosdbCassandraCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbCassandraClusterIdentityOutputReference <a name="CosmosdbCassandraClusterIdentityOutputReference" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraClusterIdentityOutputReference;

new CosmosdbCassandraClusterIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.internalValue"></a>

```java
public CosmosdbCassandraClusterIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a>

---


### CosmosdbCassandraClusterTimeoutsOutputReference <a name="CosmosdbCassandraClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.cosmosdb_cassandra_cluster.CosmosdbCassandraClusterTimeoutsOutputReference;

new CosmosdbCassandraClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CosmosdbCassandraClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a>

---



