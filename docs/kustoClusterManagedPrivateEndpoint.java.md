# `kustoClusterManagedPrivateEndpoint` Submodule <a name="`kustoClusterManagedPrivateEndpoint` Submodule" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoClusterManagedPrivateEndpoint <a name="KustoClusterManagedPrivateEndpoint" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint azurerm_kusto_cluster_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kusto_cluster_managed_private_endpoint.KustoClusterManagedPrivateEndpoint;

KustoClusterManagedPrivateEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .groupId(java.lang.String)
    .name(java.lang.String)
    .privateLinkResourceId(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .privateLinkResourceRegion(java.lang.String)
//  .requestMessage(java.lang.String)
//  .timeouts(KustoClusterManagedPrivateEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#cluster_name KustoClusterManagedPrivateEndpoint#cluster_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#group_id KustoClusterManagedPrivateEndpoint#group_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#name KustoClusterManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceId">privateLinkResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_id KustoClusterManagedPrivateEndpoint#private_link_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#resource_group_name KustoClusterManagedPrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#id KustoClusterManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceRegion">privateLinkResourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_region KustoClusterManagedPrivateEndpoint#private_link_resource_region}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#request_message KustoClusterManagedPrivateEndpoint#request_message}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#cluster_name KustoClusterManagedPrivateEndpoint#cluster_name}.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#group_id KustoClusterManagedPrivateEndpoint#group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#name KustoClusterManagedPrivateEndpoint#name}.

---

##### `privateLinkResourceId`<sup>Required</sup> <a name="privateLinkResourceId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_id KustoClusterManagedPrivateEndpoint#private_link_resource_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#resource_group_name KustoClusterManagedPrivateEndpoint#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#id KustoClusterManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateLinkResourceRegion`<sup>Optional</sup> <a name="privateLinkResourceRegion" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_region KustoClusterManagedPrivateEndpoint#private_link_resource_region}.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.requestMessage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#request_message KustoClusterManagedPrivateEndpoint#request_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#timeouts KustoClusterManagedPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetPrivateLinkResourceRegion">resetPrivateLinkResourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetRequestMessage">resetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.putTimeouts"></a>

```java
public void putTimeouts(KustoClusterManagedPrivateEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateLinkResourceRegion` <a name="resetPrivateLinkResourceRegion" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetPrivateLinkResourceRegion"></a>

```java
public void resetPrivateLinkResourceRegion()
```

##### `resetRequestMessage` <a name="resetRequestMessage" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetRequestMessage"></a>

```java
public void resetRequestMessage()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KustoClusterManagedPrivateEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.kusto_cluster_managed_private_endpoint.KustoClusterManagedPrivateEndpoint;

KustoClusterManagedPrivateEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.kusto_cluster_managed_private_endpoint.KustoClusterManagedPrivateEndpoint;

KustoClusterManagedPrivateEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.kusto_cluster_managed_private_endpoint.KustoClusterManagedPrivateEndpoint;

KustoClusterManagedPrivateEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.kusto_cluster_managed_private_endpoint.KustoClusterManagedPrivateEndpoint;

KustoClusterManagedPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KustoClusterManagedPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KustoClusterManagedPrivateEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KustoClusterManagedPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KustoClusterManagedPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KustoClusterManagedPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference">KustoClusterManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceIdInput">privateLinkResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegionInput">privateLinkResourceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessageInput">requestMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceId">privateLinkResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegion">privateLinkResourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeouts"></a>

```java
public KustoClusterManagedPrivateEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference">KustoClusterManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateLinkResourceIdInput`<sup>Optional</sup> <a name="privateLinkResourceIdInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceIdInput"></a>

```java
public java.lang.String getPrivateLinkResourceIdInput();
```

- *Type:* java.lang.String

---

##### `privateLinkResourceRegionInput`<sup>Optional</sup> <a name="privateLinkResourceRegionInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegionInput"></a>

```java
public java.lang.String getPrivateLinkResourceRegionInput();
```

- *Type:* java.lang.String

---

##### `requestMessageInput`<sup>Optional</sup> <a name="requestMessageInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessageInput"></a>

```java
public java.lang.String getRequestMessageInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|KustoClusterManagedPrivateEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateLinkResourceId`<sup>Required</sup> <a name="privateLinkResourceId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceId"></a>

```java
public java.lang.String getPrivateLinkResourceId();
```

- *Type:* java.lang.String

---

##### `privateLinkResourceRegion`<sup>Required</sup> <a name="privateLinkResourceRegion" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.privateLinkResourceRegion"></a>

```java
public java.lang.String getPrivateLinkResourceRegion();
```

- *Type:* java.lang.String

---

##### `requestMessage`<sup>Required</sup> <a name="requestMessage" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.requestMessage"></a>

```java
public java.lang.String getRequestMessage();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KustoClusterManagedPrivateEndpointConfig <a name="KustoClusterManagedPrivateEndpointConfig" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kusto_cluster_managed_private_endpoint.KustoClusterManagedPrivateEndpointConfig;

KustoClusterManagedPrivateEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .groupId(java.lang.String)
    .name(java.lang.String)
    .privateLinkResourceId(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .privateLinkResourceRegion(java.lang.String)
//  .requestMessage(java.lang.String)
//  .timeouts(KustoClusterManagedPrivateEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#cluster_name KustoClusterManagedPrivateEndpoint#cluster_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#group_id KustoClusterManagedPrivateEndpoint#group_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#name KustoClusterManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceId">privateLinkResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_id KustoClusterManagedPrivateEndpoint#private_link_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#resource_group_name KustoClusterManagedPrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#id KustoClusterManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceRegion">privateLinkResourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_region KustoClusterManagedPrivateEndpoint#private_link_resource_region}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#request_message KustoClusterManagedPrivateEndpoint#request_message}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#cluster_name KustoClusterManagedPrivateEndpoint#cluster_name}.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#group_id KustoClusterManagedPrivateEndpoint#group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#name KustoClusterManagedPrivateEndpoint#name}.

---

##### `privateLinkResourceId`<sup>Required</sup> <a name="privateLinkResourceId" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceId"></a>

```java
public java.lang.String getPrivateLinkResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_id KustoClusterManagedPrivateEndpoint#private_link_resource_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#resource_group_name KustoClusterManagedPrivateEndpoint#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#id KustoClusterManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateLinkResourceRegion`<sup>Optional</sup> <a name="privateLinkResourceRegion" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.privateLinkResourceRegion"></a>

```java
public java.lang.String getPrivateLinkResourceRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#private_link_resource_region KustoClusterManagedPrivateEndpoint#private_link_resource_region}.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.requestMessage"></a>

```java
public java.lang.String getRequestMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#request_message KustoClusterManagedPrivateEndpoint#request_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointConfig.property.timeouts"></a>

```java
public KustoClusterManagedPrivateEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#timeouts KustoClusterManagedPrivateEndpoint#timeouts}

---

### KustoClusterManagedPrivateEndpointTimeouts <a name="KustoClusterManagedPrivateEndpointTimeouts" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kusto_cluster_managed_private_endpoint.KustoClusterManagedPrivateEndpointTimeouts;

KustoClusterManagedPrivateEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#create KustoClusterManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#delete KustoClusterManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#read KustoClusterManagedPrivateEndpoint#read}. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#update KustoClusterManagedPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#create KustoClusterManagedPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#delete KustoClusterManagedPrivateEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#read KustoClusterManagedPrivateEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/kusto_cluster_managed_private_endpoint#update KustoClusterManagedPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoClusterManagedPrivateEndpointTimeoutsOutputReference <a name="KustoClusterManagedPrivateEndpointTimeoutsOutputReference" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kusto_cluster_managed_private_endpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference;

new KustoClusterManagedPrivateEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|KustoClusterManagedPrivateEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kustoClusterManagedPrivateEndpoint.KustoClusterManagedPrivateEndpointTimeouts">KustoClusterManagedPrivateEndpointTimeouts</a>

---



