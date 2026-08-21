# `dashboardGrafanaManagedPrivateEndpoint` Submodule <a name="`dashboardGrafanaManagedPrivateEndpoint` Submodule" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DashboardGrafanaManagedPrivateEndpoint <a name="DashboardGrafanaManagedPrivateEndpoint" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint azurerm_dashboard_grafana_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dashboard_grafana_managed_private_endpoint.DashboardGrafanaManagedPrivateEndpoint;

DashboardGrafanaManagedPrivateEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .grafanaId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .privateLinkResourceId(java.lang.String)
//  .groupIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .privateLinkResourceRegion(java.lang.String)
//  .privateLinkServiceUrl(java.lang.String)
//  .requestMessage(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DashboardGrafanaManagedPrivateEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.grafanaId">grafanaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceId">privateLinkResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.groupIds">groupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceRegion">privateLinkResourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkServiceUrl">privateLinkServiceUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_service_url DashboardGrafanaManagedPrivateEndpoint#private_link_service_url}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `grafanaId`<sup>Required</sup> <a name="grafanaId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.grafanaId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}.

---

##### `privateLinkResourceId`<sup>Required</sup> <a name="privateLinkResourceId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}.

---

##### `groupIds`<sup>Optional</sup> <a name="groupIds" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.groupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateLinkResourceRegion`<sup>Optional</sup> <a name="privateLinkResourceRegion" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkResourceRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}.

---

##### `privateLinkServiceUrl`<sup>Optional</sup> <a name="privateLinkServiceUrl" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.privateLinkServiceUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_service_url DashboardGrafanaManagedPrivateEndpoint#private_link_service_url}.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.requestMessage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#timeouts DashboardGrafanaManagedPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetGroupIds">resetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkResourceRegion">resetPrivateLinkResourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkServiceUrl">resetPrivateLinkServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetRequestMessage">resetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts"></a>

```java
public void putTimeouts(DashboardGrafanaManagedPrivateEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>

---

##### `resetGroupIds` <a name="resetGroupIds" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetGroupIds"></a>

```java
public void resetGroupIds()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateLinkResourceRegion` <a name="resetPrivateLinkResourceRegion" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkResourceRegion"></a>

```java
public void resetPrivateLinkResourceRegion()
```

##### `resetPrivateLinkServiceUrl` <a name="resetPrivateLinkServiceUrl" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetPrivateLinkServiceUrl"></a>

```java
public void resetPrivateLinkServiceUrl()
```

##### `resetRequestMessage` <a name="resetRequestMessage" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetRequestMessage"></a>

```java
public void resetRequestMessage()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DashboardGrafanaManagedPrivateEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.dashboard_grafana_managed_private_endpoint.DashboardGrafanaManagedPrivateEndpoint;

DashboardGrafanaManagedPrivateEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.dashboard_grafana_managed_private_endpoint.DashboardGrafanaManagedPrivateEndpoint;

DashboardGrafanaManagedPrivateEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.dashboard_grafana_managed_private_endpoint.DashboardGrafanaManagedPrivateEndpoint;

DashboardGrafanaManagedPrivateEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.dashboard_grafana_managed_private_endpoint.DashboardGrafanaManagedPrivateEndpoint;

DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DashboardGrafanaManagedPrivateEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DashboardGrafanaManagedPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DashboardGrafanaManagedPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DashboardGrafanaManagedPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference">DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaIdInput">grafanaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIdsInput">groupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceIdInput">privateLinkResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegionInput">privateLinkResourceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkServiceUrlInput">privateLinkServiceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessageInput">requestMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaId">grafanaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIds">groupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceId">privateLinkResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegion">privateLinkResourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkServiceUrl">privateLinkServiceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeouts"></a>

```java
public DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference">DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `grafanaIdInput`<sup>Optional</sup> <a name="grafanaIdInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaIdInput"></a>

```java
public java.lang.String getGrafanaIdInput();
```

- *Type:* java.lang.String

---

##### `groupIdsInput`<sup>Optional</sup> <a name="groupIdsInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIdsInput"></a>

```java
public java.util.List<java.lang.String> getGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateLinkResourceIdInput`<sup>Optional</sup> <a name="privateLinkResourceIdInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceIdInput"></a>

```java
public java.lang.String getPrivateLinkResourceIdInput();
```

- *Type:* java.lang.String

---

##### `privateLinkResourceRegionInput`<sup>Optional</sup> <a name="privateLinkResourceRegionInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegionInput"></a>

```java
public java.lang.String getPrivateLinkResourceRegionInput();
```

- *Type:* java.lang.String

---

##### `privateLinkServiceUrlInput`<sup>Optional</sup> <a name="privateLinkServiceUrlInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkServiceUrlInput"></a>

```java
public java.lang.String getPrivateLinkServiceUrlInput();
```

- *Type:* java.lang.String

---

##### `requestMessageInput`<sup>Optional</sup> <a name="requestMessageInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessageInput"></a>

```java
public java.lang.String getRequestMessageInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|DashboardGrafanaManagedPrivateEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>

---

##### `grafanaId`<sup>Required</sup> <a name="grafanaId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.grafanaId"></a>

```java
public java.lang.String getGrafanaId();
```

- *Type:* java.lang.String

---

##### `groupIds`<sup>Required</sup> <a name="groupIds" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.groupIds"></a>

```java
public java.util.List<java.lang.String> getGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateLinkResourceId`<sup>Required</sup> <a name="privateLinkResourceId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceId"></a>

```java
public java.lang.String getPrivateLinkResourceId();
```

- *Type:* java.lang.String

---

##### `privateLinkResourceRegion`<sup>Required</sup> <a name="privateLinkResourceRegion" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkResourceRegion"></a>

```java
public java.lang.String getPrivateLinkResourceRegion();
```

- *Type:* java.lang.String

---

##### `privateLinkServiceUrl`<sup>Required</sup> <a name="privateLinkServiceUrl" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.privateLinkServiceUrl"></a>

```java
public java.lang.String getPrivateLinkServiceUrl();
```

- *Type:* java.lang.String

---

##### `requestMessage`<sup>Required</sup> <a name="requestMessage" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.requestMessage"></a>

```java
public java.lang.String getRequestMessage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardGrafanaManagedPrivateEndpointConfig <a name="DashboardGrafanaManagedPrivateEndpointConfig" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dashboard_grafana_managed_private_endpoint.DashboardGrafanaManagedPrivateEndpointConfig;

DashboardGrafanaManagedPrivateEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .grafanaId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .privateLinkResourceId(java.lang.String)
//  .groupIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .privateLinkResourceRegion(java.lang.String)
//  .privateLinkServiceUrl(java.lang.String)
//  .requestMessage(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DashboardGrafanaManagedPrivateEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.grafanaId">grafanaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceId">privateLinkResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.groupIds">groupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceRegion">privateLinkResourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkServiceUrl">privateLinkServiceUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_service_url DashboardGrafanaManagedPrivateEndpoint#private_link_service_url}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `grafanaId`<sup>Required</sup> <a name="grafanaId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.grafanaId"></a>

```java
public java.lang.String getGrafanaId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}.

---

##### `privateLinkResourceId`<sup>Required</sup> <a name="privateLinkResourceId" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceId"></a>

```java
public java.lang.String getPrivateLinkResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}.

---

##### `groupIds`<sup>Optional</sup> <a name="groupIds" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.groupIds"></a>

```java
public java.util.List<java.lang.String> getGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateLinkResourceRegion`<sup>Optional</sup> <a name="privateLinkResourceRegion" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkResourceRegion"></a>

```java
public java.lang.String getPrivateLinkResourceRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}.

---

##### `privateLinkServiceUrl`<sup>Optional</sup> <a name="privateLinkServiceUrl" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.privateLinkServiceUrl"></a>

```java
public java.lang.String getPrivateLinkServiceUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_service_url DashboardGrafanaManagedPrivateEndpoint#private_link_service_url}.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.requestMessage"></a>

```java
public java.lang.String getRequestMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointConfig.property.timeouts"></a>

```java
public DashboardGrafanaManagedPrivateEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#timeouts DashboardGrafanaManagedPrivateEndpoint#timeouts}

---

### DashboardGrafanaManagedPrivateEndpointTimeouts <a name="DashboardGrafanaManagedPrivateEndpointTimeouts" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dashboard_grafana_managed_private_endpoint.DashboardGrafanaManagedPrivateEndpointTimeouts;

DashboardGrafanaManagedPrivateEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#create DashboardGrafanaManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#delete DashboardGrafanaManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#read DashboardGrafanaManagedPrivateEndpoint#read}. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#update DashboardGrafanaManagedPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#create DashboardGrafanaManagedPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#delete DashboardGrafanaManagedPrivateEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#read DashboardGrafanaManagedPrivateEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/dashboard_grafana_managed_private_endpoint#update DashboardGrafanaManagedPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference <a name="DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dashboard_grafana_managed_private_endpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference;

new DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DashboardGrafanaManagedPrivateEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dashboardGrafanaManagedPrivateEndpoint.DashboardGrafanaManagedPrivateEndpointTimeouts">DashboardGrafanaManagedPrivateEndpointTimeouts</a>

---



