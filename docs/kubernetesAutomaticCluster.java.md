# `kubernetesAutomaticCluster` Submodule <a name="`kubernetesAutomaticCluster` Submodule" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAutomaticCluster <a name="KubernetesAutomaticCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster azurerm_kubernetes_automatic_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticCluster;

KubernetesAutomaticCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identity(KubernetesAutomaticClusterIdentity)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .apiServerAccess(KubernetesAutomaticClusterApiServerAccess)
//  .hostedSystem(KubernetesAutomaticClusterHostedSystem)
//  .id(java.lang.String)
//  .privateCluster(KubernetesAutomaticClusterPrivateCluster)
//  .serviceMesh(KubernetesAutomaticClusterServiceMesh)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KubernetesAutomaticClusterTimeouts)
//  .webAppRoutingIngress(KubernetesAutomaticClusterWebAppRoutingIngress)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#location KubernetesAutomaticCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#name KubernetesAutomaticCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#resource_group_name KubernetesAutomaticCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.apiServerAccess">apiServerAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | api_server_access block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.hostedSystem">hostedSystem</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | hosted_system block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#id KubernetesAutomaticCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.privateCluster">privateCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | private_cluster block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.serviceMesh">serviceMesh</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | service_mesh block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#tags KubernetesAutomaticCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.webAppRoutingIngress">webAppRoutingIngress</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | web_app_routing_ingress block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#identity KubernetesAutomaticCluster#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#location KubernetesAutomaticCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#name KubernetesAutomaticCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#resource_group_name KubernetesAutomaticCluster#resource_group_name}.

---

##### `apiServerAccess`<sup>Optional</sup> <a name="apiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.apiServerAccess"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

api_server_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#api_server_access KubernetesAutomaticCluster#api_server_access}

---

##### `hostedSystem`<sup>Optional</sup> <a name="hostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.hostedSystem"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

hosted_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#hosted_system KubernetesAutomaticCluster#hosted_system}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#id KubernetesAutomaticCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateCluster`<sup>Optional</sup> <a name="privateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.privateCluster"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

private_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#private_cluster KubernetesAutomaticCluster#private_cluster}

---

##### `serviceMesh`<sup>Optional</sup> <a name="serviceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.serviceMesh"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

service_mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#service_mesh KubernetesAutomaticCluster#service_mesh}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#tags KubernetesAutomaticCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#timeouts KubernetesAutomaticCluster#timeouts}

---

##### `webAppRoutingIngress`<sup>Optional</sup> <a name="webAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.webAppRoutingIngress"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

web_app_routing_ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#web_app_routing_ingress KubernetesAutomaticCluster#web_app_routing_ingress}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putApiServerAccess">putApiServerAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putHostedSystem">putHostedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putPrivateCluster">putPrivateCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putServiceMesh">putServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putWebAppRoutingIngress">putWebAppRoutingIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetApiServerAccess">resetApiServerAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetHostedSystem">resetHostedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetPrivateCluster">resetPrivateCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetServiceMesh">resetServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetWebAppRoutingIngress">resetWebAppRoutingIngress</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiServerAccess` <a name="putApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putApiServerAccess"></a>

```java
public void putApiServerAccess(KubernetesAutomaticClusterApiServerAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putApiServerAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

---

##### `putHostedSystem` <a name="putHostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putHostedSystem"></a>

```java
public void putHostedSystem(KubernetesAutomaticClusterHostedSystem value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putHostedSystem.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putIdentity"></a>

```java
public void putIdentity(KubernetesAutomaticClusterIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

---

##### `putPrivateCluster` <a name="putPrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putPrivateCluster"></a>

```java
public void putPrivateCluster(KubernetesAutomaticClusterPrivateCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putPrivateCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

---

##### `putServiceMesh` <a name="putServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putServiceMesh"></a>

```java
public void putServiceMesh(KubernetesAutomaticClusterServiceMesh value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putServiceMesh.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putTimeouts"></a>

```java
public void putTimeouts(KubernetesAutomaticClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

---

##### `putWebAppRoutingIngress` <a name="putWebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putWebAppRoutingIngress"></a>

```java
public void putWebAppRoutingIngress(KubernetesAutomaticClusterWebAppRoutingIngress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putWebAppRoutingIngress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

---

##### `resetApiServerAccess` <a name="resetApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetApiServerAccess"></a>

```java
public void resetApiServerAccess()
```

##### `resetHostedSystem` <a name="resetHostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetHostedSystem"></a>

```java
public void resetHostedSystem()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateCluster` <a name="resetPrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetPrivateCluster"></a>

```java
public void resetPrivateCluster()
```

##### `resetServiceMesh` <a name="resetServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetServiceMesh"></a>

```java
public void resetServiceMesh()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWebAppRoutingIngress` <a name="resetWebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetWebAppRoutingIngress"></a>

```java
public void resetWebAppRoutingIngress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticCluster;

KubernetesAutomaticCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticCluster;

KubernetesAutomaticCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticCluster;

KubernetesAutomaticCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticCluster;

KubernetesAutomaticCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesAutomaticCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesAutomaticCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesAutomaticCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesAutomaticCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccess">apiServerAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference">KubernetesAutomaticClusterApiServerAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.currentKubernetesVersion">currentKubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fullyQualifiedDomainName">fullyQualifiedDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystem">hostedSystem</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference">KubernetesAutomaticClusterHostedSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference">KubernetesAutomaticClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfig">kubeConfig</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList">KubernetesAutomaticClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfigRaw">kubeConfigRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nodeResourceGroupId">nodeResourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.oidcIssuerUrl">oidcIssuerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.portalFullyQualifiedDomainName">portalFullyQualifiedDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateCluster">privateCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference">KubernetesAutomaticClusterPrivateClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateFullyQualifiedDomainName">privateFullyQualifiedDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMesh">serviceMesh</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference">KubernetesAutomaticClusterServiceMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference">KubernetesAutomaticClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngress">webAppRoutingIngress</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference">KubernetesAutomaticClusterWebAppRoutingIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccessInput">apiServerAccessInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystemInput">hostedSystemInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateClusterInput">privateClusterInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMeshInput">serviceMeshInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngressInput">webAppRoutingIngressInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiServerAccess`<sup>Required</sup> <a name="apiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccess"></a>

```java
public KubernetesAutomaticClusterApiServerAccessOutputReference getApiServerAccess();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference">KubernetesAutomaticClusterApiServerAccessOutputReference</a>

---

##### `currentKubernetesVersion`<sup>Required</sup> <a name="currentKubernetesVersion" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.currentKubernetesVersion"></a>

```java
public java.lang.String getCurrentKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `fullyQualifiedDomainName`<sup>Required</sup> <a name="fullyQualifiedDomainName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fullyQualifiedDomainName"></a>

```java
public java.lang.String getFullyQualifiedDomainName();
```

- *Type:* java.lang.String

---

##### `hostedSystem`<sup>Required</sup> <a name="hostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystem"></a>

```java
public KubernetesAutomaticClusterHostedSystemOutputReference getHostedSystem();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference">KubernetesAutomaticClusterHostedSystemOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identity"></a>

```java
public KubernetesAutomaticClusterIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference">KubernetesAutomaticClusterIdentityOutputReference</a>

---

##### `kubeConfig`<sup>Required</sup> <a name="kubeConfig" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfig"></a>

```java
public KubernetesAutomaticClusterKubeConfigList getKubeConfig();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList">KubernetesAutomaticClusterKubeConfigList</a>

---

##### `kubeConfigRaw`<sup>Required</sup> <a name="kubeConfigRaw" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfigRaw"></a>

```java
public java.lang.String getKubeConfigRaw();
```

- *Type:* java.lang.String

---

##### `nodeResourceGroupId`<sup>Required</sup> <a name="nodeResourceGroupId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nodeResourceGroupId"></a>

```java
public java.lang.String getNodeResourceGroupId();
```

- *Type:* java.lang.String

---

##### `oidcIssuerUrl`<sup>Required</sup> <a name="oidcIssuerUrl" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.oidcIssuerUrl"></a>

```java
public java.lang.String getOidcIssuerUrl();
```

- *Type:* java.lang.String

---

##### `portalFullyQualifiedDomainName`<sup>Required</sup> <a name="portalFullyQualifiedDomainName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.portalFullyQualifiedDomainName"></a>

```java
public java.lang.String getPortalFullyQualifiedDomainName();
```

- *Type:* java.lang.String

---

##### `privateCluster`<sup>Required</sup> <a name="privateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateCluster"></a>

```java
public KubernetesAutomaticClusterPrivateClusterOutputReference getPrivateCluster();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference">KubernetesAutomaticClusterPrivateClusterOutputReference</a>

---

##### `privateFullyQualifiedDomainName`<sup>Required</sup> <a name="privateFullyQualifiedDomainName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateFullyQualifiedDomainName"></a>

```java
public java.lang.String getPrivateFullyQualifiedDomainName();
```

- *Type:* java.lang.String

---

##### `serviceMesh`<sup>Required</sup> <a name="serviceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMesh"></a>

```java
public KubernetesAutomaticClusterServiceMeshOutputReference getServiceMesh();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference">KubernetesAutomaticClusterServiceMeshOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeouts"></a>

```java
public KubernetesAutomaticClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference">KubernetesAutomaticClusterTimeoutsOutputReference</a>

---

##### `webAppRoutingIngress`<sup>Required</sup> <a name="webAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngress"></a>

```java
public KubernetesAutomaticClusterWebAppRoutingIngressOutputReference getWebAppRoutingIngress();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference">KubernetesAutomaticClusterWebAppRoutingIngressOutputReference</a>

---

##### `apiServerAccessInput`<sup>Optional</sup> <a name="apiServerAccessInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccessInput"></a>

```java
public KubernetesAutomaticClusterApiServerAccess getApiServerAccessInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

---

##### `hostedSystemInput`<sup>Optional</sup> <a name="hostedSystemInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystemInput"></a>

```java
public KubernetesAutomaticClusterHostedSystem getHostedSystemInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identityInput"></a>

```java
public KubernetesAutomaticClusterIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateClusterInput`<sup>Optional</sup> <a name="privateClusterInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateClusterInput"></a>

```java
public KubernetesAutomaticClusterPrivateCluster getPrivateClusterInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serviceMeshInput`<sup>Optional</sup> <a name="serviceMeshInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMeshInput"></a>

```java
public KubernetesAutomaticClusterServiceMesh getServiceMeshInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeoutsInput"></a>

```java
public IResolvable|KubernetesAutomaticClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

---

##### `webAppRoutingIngressInput`<sup>Optional</sup> <a name="webAppRoutingIngressInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngressInput"></a>

```java
public KubernetesAutomaticClusterWebAppRoutingIngress getWebAppRoutingIngressInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAutomaticClusterApiServerAccess <a name="KubernetesAutomaticClusterApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterApiServerAccess;

KubernetesAutomaticClusterApiServerAccess.builder()
//  .authorizedIpRanges(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.authorizedIpRanges">authorizedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#authorized_ip_ranges KubernetesAutomaticCluster#authorized_ip_ranges}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#subnet_id KubernetesAutomaticCluster#subnet_id}. |

---

##### `authorizedIpRanges`<sup>Optional</sup> <a name="authorizedIpRanges" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.authorizedIpRanges"></a>

```java
public java.util.List<java.lang.String> getAuthorizedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#authorized_ip_ranges KubernetesAutomaticCluster#authorized_ip_ranges}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#subnet_id KubernetesAutomaticCluster#subnet_id}.

---

### KubernetesAutomaticClusterConfig <a name="KubernetesAutomaticClusterConfig" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterConfig;

KubernetesAutomaticClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identity(KubernetesAutomaticClusterIdentity)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .apiServerAccess(KubernetesAutomaticClusterApiServerAccess)
//  .hostedSystem(KubernetesAutomaticClusterHostedSystem)
//  .id(java.lang.String)
//  .privateCluster(KubernetesAutomaticClusterPrivateCluster)
//  .serviceMesh(KubernetesAutomaticClusterServiceMesh)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KubernetesAutomaticClusterTimeouts)
//  .webAppRoutingIngress(KubernetesAutomaticClusterWebAppRoutingIngress)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#location KubernetesAutomaticCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#name KubernetesAutomaticCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#resource_group_name KubernetesAutomaticCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.apiServerAccess">apiServerAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | api_server_access block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.hostedSystem">hostedSystem</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | hosted_system block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#id KubernetesAutomaticCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.privateCluster">privateCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | private_cluster block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.serviceMesh">serviceMesh</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | service_mesh block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#tags KubernetesAutomaticCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.webAppRoutingIngress">webAppRoutingIngress</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | web_app_routing_ingress block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.identity"></a>

```java
public KubernetesAutomaticClusterIdentity getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#identity KubernetesAutomaticCluster#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#location KubernetesAutomaticCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#name KubernetesAutomaticCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#resource_group_name KubernetesAutomaticCluster#resource_group_name}.

---

##### `apiServerAccess`<sup>Optional</sup> <a name="apiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.apiServerAccess"></a>

```java
public KubernetesAutomaticClusterApiServerAccess getApiServerAccess();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

api_server_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#api_server_access KubernetesAutomaticCluster#api_server_access}

---

##### `hostedSystem`<sup>Optional</sup> <a name="hostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.hostedSystem"></a>

```java
public KubernetesAutomaticClusterHostedSystem getHostedSystem();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

hosted_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#hosted_system KubernetesAutomaticCluster#hosted_system}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#id KubernetesAutomaticCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateCluster`<sup>Optional</sup> <a name="privateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.privateCluster"></a>

```java
public KubernetesAutomaticClusterPrivateCluster getPrivateCluster();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

private_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#private_cluster KubernetesAutomaticCluster#private_cluster}

---

##### `serviceMesh`<sup>Optional</sup> <a name="serviceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.serviceMesh"></a>

```java
public KubernetesAutomaticClusterServiceMesh getServiceMesh();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

service_mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#service_mesh KubernetesAutomaticCluster#service_mesh}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#tags KubernetesAutomaticCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.timeouts"></a>

```java
public KubernetesAutomaticClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#timeouts KubernetesAutomaticCluster#timeouts}

---

##### `webAppRoutingIngress`<sup>Optional</sup> <a name="webAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.webAppRoutingIngress"></a>

```java
public KubernetesAutomaticClusterWebAppRoutingIngress getWebAppRoutingIngress();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

web_app_routing_ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#web_app_routing_ingress KubernetesAutomaticCluster#web_app_routing_ingress}

---

### KubernetesAutomaticClusterHostedSystem <a name="KubernetesAutomaticClusterHostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterHostedSystem;

KubernetesAutomaticClusterHostedSystem.builder()
    .nodeSubnetId(java.lang.String)
    .systemNodeSubnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.nodeSubnetId">nodeSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#node_subnet_id KubernetesAutomaticCluster#node_subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.systemNodeSubnetId">systemNodeSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#system_node_subnet_id KubernetesAutomaticCluster#system_node_subnet_id}. |

---

##### `nodeSubnetId`<sup>Required</sup> <a name="nodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.nodeSubnetId"></a>

```java
public java.lang.String getNodeSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#node_subnet_id KubernetesAutomaticCluster#node_subnet_id}.

---

##### `systemNodeSubnetId`<sup>Required</sup> <a name="systemNodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.systemNodeSubnetId"></a>

```java
public java.lang.String getSystemNodeSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#system_node_subnet_id KubernetesAutomaticCluster#system_node_subnet_id}.

---

### KubernetesAutomaticClusterIdentity <a name="KubernetesAutomaticClusterIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterIdentity;

KubernetesAutomaticClusterIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#type KubernetesAutomaticCluster#type}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#identity_ids KubernetesAutomaticCluster#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#type KubernetesAutomaticCluster#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#identity_ids KubernetesAutomaticCluster#identity_ids}.

---

### KubernetesAutomaticClusterKubeConfig <a name="KubernetesAutomaticClusterKubeConfig" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterKubeConfig;

KubernetesAutomaticClusterKubeConfig.builder()
    .build();
```


### KubernetesAutomaticClusterPrivateCluster <a name="KubernetesAutomaticClusterPrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterPrivateCluster;

KubernetesAutomaticClusterPrivateCluster.builder()
//  .privateDnsZoneId(java.lang.String)
//  .publicFullyQualifiedDomainNameEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#private_dns_zone_id KubernetesAutomaticCluster#private_dns_zone_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.publicFullyQualifiedDomainNameEnabled">publicFullyQualifiedDomainNameEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#public_fully_qualified_domain_name_enabled KubernetesAutomaticCluster#public_fully_qualified_domain_name_enabled}. |

---

##### `privateDnsZoneId`<sup>Optional</sup> <a name="privateDnsZoneId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.privateDnsZoneId"></a>

```java
public java.lang.String getPrivateDnsZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#private_dns_zone_id KubernetesAutomaticCluster#private_dns_zone_id}.

---

##### `publicFullyQualifiedDomainNameEnabled`<sup>Optional</sup> <a name="publicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.publicFullyQualifiedDomainNameEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicFullyQualifiedDomainNameEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#public_fully_qualified_domain_name_enabled KubernetesAutomaticCluster#public_fully_qualified_domain_name_enabled}.

---

### KubernetesAutomaticClusterServiceMesh <a name="KubernetesAutomaticClusterServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterServiceMesh;

KubernetesAutomaticClusterServiceMesh.builder()
    .revisions(java.util.List<java.lang.String>)
//  .certificateAuthority(KubernetesAutomaticClusterServiceMeshCertificateAuthority)
//  .externalIngressGatewayEnabled(java.lang.Boolean|IResolvable)
//  .internalIngressGatewayEnabled(java.lang.Boolean|IResolvable)
//  .proxyRedirectMechanism(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.revisions">revisions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#revisions KubernetesAutomaticCluster#revisions}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.certificateAuthority">certificateAuthority</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | certificate_authority block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.externalIngressGatewayEnabled">externalIngressGatewayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#external_ingress_gateway_enabled KubernetesAutomaticCluster#external_ingress_gateway_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.internalIngressGatewayEnabled">internalIngressGatewayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#internal_ingress_gateway_enabled KubernetesAutomaticCluster#internal_ingress_gateway_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.proxyRedirectMechanism">proxyRedirectMechanism</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#proxy_redirect_mechanism KubernetesAutomaticCluster#proxy_redirect_mechanism}. |

---

##### `revisions`<sup>Required</sup> <a name="revisions" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.revisions"></a>

```java
public java.util.List<java.lang.String> getRevisions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#revisions KubernetesAutomaticCluster#revisions}.

---

##### `certificateAuthority`<sup>Optional</sup> <a name="certificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.certificateAuthority"></a>

```java
public KubernetesAutomaticClusterServiceMeshCertificateAuthority getCertificateAuthority();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

certificate_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_authority KubernetesAutomaticCluster#certificate_authority}

---

##### `externalIngressGatewayEnabled`<sup>Optional</sup> <a name="externalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.externalIngressGatewayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getExternalIngressGatewayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#external_ingress_gateway_enabled KubernetesAutomaticCluster#external_ingress_gateway_enabled}.

---

##### `internalIngressGatewayEnabled`<sup>Optional</sup> <a name="internalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.internalIngressGatewayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getInternalIngressGatewayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#internal_ingress_gateway_enabled KubernetesAutomaticCluster#internal_ingress_gateway_enabled}.

---

##### `proxyRedirectMechanism`<sup>Optional</sup> <a name="proxyRedirectMechanism" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.proxyRedirectMechanism"></a>

```java
public java.lang.String getProxyRedirectMechanism();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#proxy_redirect_mechanism KubernetesAutomaticCluster#proxy_redirect_mechanism}.

---

### KubernetesAutomaticClusterServiceMeshCertificateAuthority <a name="KubernetesAutomaticClusterServiceMeshCertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority;

KubernetesAutomaticClusterServiceMeshCertificateAuthority.builder()
    .certificateChainObjectName(java.lang.String)
    .certificateObjectName(java.lang.String)
    .keyObjectName(java.lang.String)
    .keyVaultId(java.lang.String)
    .rootCertificateObjectName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateChainObjectName">certificateChainObjectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_chain_object_name KubernetesAutomaticCluster#certificate_chain_object_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateObjectName">certificateObjectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_object_name KubernetesAutomaticCluster#certificate_object_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyObjectName">keyObjectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#key_object_name KubernetesAutomaticCluster#key_object_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#key_vault_id KubernetesAutomaticCluster#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.rootCertificateObjectName">rootCertificateObjectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#root_certificate_object_name KubernetesAutomaticCluster#root_certificate_object_name}. |

---

##### `certificateChainObjectName`<sup>Required</sup> <a name="certificateChainObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateChainObjectName"></a>

```java
public java.lang.String getCertificateChainObjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_chain_object_name KubernetesAutomaticCluster#certificate_chain_object_name}.

---

##### `certificateObjectName`<sup>Required</sup> <a name="certificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateObjectName"></a>

```java
public java.lang.String getCertificateObjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_object_name KubernetesAutomaticCluster#certificate_object_name}.

---

##### `keyObjectName`<sup>Required</sup> <a name="keyObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyObjectName"></a>

```java
public java.lang.String getKeyObjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#key_object_name KubernetesAutomaticCluster#key_object_name}.

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#key_vault_id KubernetesAutomaticCluster#key_vault_id}.

---

##### `rootCertificateObjectName`<sup>Required</sup> <a name="rootCertificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.rootCertificateObjectName"></a>

```java
public java.lang.String getRootCertificateObjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#root_certificate_object_name KubernetesAutomaticCluster#root_certificate_object_name}.

---

### KubernetesAutomaticClusterTimeouts <a name="KubernetesAutomaticClusterTimeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterTimeouts;

KubernetesAutomaticClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#create KubernetesAutomaticCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#delete KubernetesAutomaticCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#read KubernetesAutomaticCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#update KubernetesAutomaticCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#create KubernetesAutomaticCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#delete KubernetesAutomaticCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#read KubernetesAutomaticCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#update KubernetesAutomaticCluster#update}.

---

### KubernetesAutomaticClusterWebAppRoutingIngress <a name="KubernetesAutomaticClusterWebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterWebAppRoutingIngress;

KubernetesAutomaticClusterWebAppRoutingIngress.builder()
//  .defaultNginxController(java.lang.String)
//  .dnsZoneIds(java.util.List<java.lang.String>)
//  .istioEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.defaultNginxController">defaultNginxController</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#default_nginx_controller KubernetesAutomaticCluster#default_nginx_controller}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.dnsZoneIds">dnsZoneIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#dns_zone_ids KubernetesAutomaticCluster#dns_zone_ids}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.istioEnabled">istioEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#istio_enabled KubernetesAutomaticCluster#istio_enabled}. |

---

##### `defaultNginxController`<sup>Optional</sup> <a name="defaultNginxController" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.defaultNginxController"></a>

```java
public java.lang.String getDefaultNginxController();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#default_nginx_controller KubernetesAutomaticCluster#default_nginx_controller}.

---

##### `dnsZoneIds`<sup>Optional</sup> <a name="dnsZoneIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.dnsZoneIds"></a>

```java
public java.util.List<java.lang.String> getDnsZoneIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#dns_zone_ids KubernetesAutomaticCluster#dns_zone_ids}.

---

##### `istioEnabled`<sup>Optional</sup> <a name="istioEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.istioEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIstioEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#istio_enabled KubernetesAutomaticCluster#istio_enabled}.

---

### KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity <a name="KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity;

KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### KubernetesAutomaticClusterApiServerAccessOutputReference <a name="KubernetesAutomaticClusterApiServerAccessOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterApiServerAccessOutputReference;

new KubernetesAutomaticClusterApiServerAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetAuthorizedIpRanges">resetAuthorizedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizedIpRanges` <a name="resetAuthorizedIpRanges" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetAuthorizedIpRanges"></a>

```java
public void resetAuthorizedIpRanges()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRangesInput">authorizedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges">authorizedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedIpRangesInput`<sup>Optional</sup> <a name="authorizedIpRangesInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `authorizedIpRanges`<sup>Required</sup> <a name="authorizedIpRanges" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges"></a>

```java
public java.util.List<java.lang.String> getAuthorizedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue"></a>

```java
public KubernetesAutomaticClusterApiServerAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

---


### KubernetesAutomaticClusterHostedSystemOutputReference <a name="KubernetesAutomaticClusterHostedSystemOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterHostedSystemOutputReference;

new KubernetesAutomaticClusterHostedSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetIdInput">nodeSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetIdInput">systemNodeSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId">nodeSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId">systemNodeSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeSubnetIdInput`<sup>Optional</sup> <a name="nodeSubnetIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetIdInput"></a>

```java
public java.lang.String getNodeSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `systemNodeSubnetIdInput`<sup>Optional</sup> <a name="systemNodeSubnetIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetIdInput"></a>

```java
public java.lang.String getSystemNodeSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `nodeSubnetId`<sup>Required</sup> <a name="nodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId"></a>

```java
public java.lang.String getNodeSubnetId();
```

- *Type:* java.lang.String

---

##### `systemNodeSubnetId`<sup>Required</sup> <a name="systemNodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId"></a>

```java
public java.lang.String getSystemNodeSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue"></a>

```java
public KubernetesAutomaticClusterHostedSystem getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

---


### KubernetesAutomaticClusterIdentityOutputReference <a name="KubernetesAutomaticClusterIdentityOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterIdentityOutputReference;

new KubernetesAutomaticClusterIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.internalValue"></a>

```java
public KubernetesAutomaticClusterIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

---


### KubernetesAutomaticClusterKubeConfigList <a name="KubernetesAutomaticClusterKubeConfigList" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterKubeConfigList;

new KubernetesAutomaticClusterKubeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.get"></a>

```java
public KubernetesAutomaticClusterKubeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### KubernetesAutomaticClusterKubeConfigOutputReference <a name="KubernetesAutomaticClusterKubeConfigOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterKubeConfigOutputReference;

new KubernetesAutomaticClusterKubeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig">KubernetesAutomaticClusterKubeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```java
public java.lang.String getClusterCaCertificate();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue"></a>

```java
public KubernetesAutomaticClusterKubeConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig">KubernetesAutomaticClusterKubeConfig</a>

---


### KubernetesAutomaticClusterPrivateClusterOutputReference <a name="KubernetesAutomaticClusterPrivateClusterOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterPrivateClusterOutputReference;

new KubernetesAutomaticClusterPrivateClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPrivateDnsZoneId">resetPrivateDnsZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPublicFullyQualifiedDomainNameEnabled">resetPublicFullyQualifiedDomainNameEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateDnsZoneId` <a name="resetPrivateDnsZoneId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPrivateDnsZoneId"></a>

```java
public void resetPrivateDnsZoneId()
```

##### `resetPublicFullyQualifiedDomainNameEnabled` <a name="resetPublicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPublicFullyQualifiedDomainNameEnabled"></a>

```java
public void resetPublicFullyQualifiedDomainNameEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneIdInput">privateDnsZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabledInput">publicFullyQualifiedDomainNameEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled">publicFullyQualifiedDomainNameEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateDnsZoneIdInput`<sup>Optional</sup> <a name="privateDnsZoneIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneIdInput"></a>

```java
public java.lang.String getPrivateDnsZoneIdInput();
```

- *Type:* java.lang.String

---

##### `publicFullyQualifiedDomainNameEnabledInput`<sup>Optional</sup> <a name="publicFullyQualifiedDomainNameEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicFullyQualifiedDomainNameEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateDnsZoneId`<sup>Required</sup> <a name="privateDnsZoneId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId"></a>

```java
public java.lang.String getPrivateDnsZoneId();
```

- *Type:* java.lang.String

---

##### `publicFullyQualifiedDomainNameEnabled`<sup>Required</sup> <a name="publicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicFullyQualifiedDomainNameEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue"></a>

```java
public KubernetesAutomaticClusterPrivateCluster getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

---


### KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference <a name="KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference;

new KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectNameInput">certificateChainObjectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectNameInput">certificateObjectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectNameInput">keyObjectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectNameInput">rootCertificateObjectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName">certificateChainObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName">certificateObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName">keyObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName">rootCertificateObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateChainObjectNameInput`<sup>Optional</sup> <a name="certificateChainObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectNameInput"></a>

```java
public java.lang.String getCertificateChainObjectNameInput();
```

- *Type:* java.lang.String

---

##### `certificateObjectNameInput`<sup>Optional</sup> <a name="certificateObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectNameInput"></a>

```java
public java.lang.String getCertificateObjectNameInput();
```

- *Type:* java.lang.String

---

##### `keyObjectNameInput`<sup>Optional</sup> <a name="keyObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectNameInput"></a>

```java
public java.lang.String getKeyObjectNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `rootCertificateObjectNameInput`<sup>Optional</sup> <a name="rootCertificateObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectNameInput"></a>

```java
public java.lang.String getRootCertificateObjectNameInput();
```

- *Type:* java.lang.String

---

##### `certificateChainObjectName`<sup>Required</sup> <a name="certificateChainObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName"></a>

```java
public java.lang.String getCertificateChainObjectName();
```

- *Type:* java.lang.String

---

##### `certificateObjectName`<sup>Required</sup> <a name="certificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName"></a>

```java
public java.lang.String getCertificateObjectName();
```

- *Type:* java.lang.String

---

##### `keyObjectName`<sup>Required</sup> <a name="keyObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName"></a>

```java
public java.lang.String getKeyObjectName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `rootCertificateObjectName`<sup>Required</sup> <a name="rootCertificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName"></a>

```java
public java.lang.String getRootCertificateObjectName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue"></a>

```java
public KubernetesAutomaticClusterServiceMeshCertificateAuthority getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---


### KubernetesAutomaticClusterServiceMeshOutputReference <a name="KubernetesAutomaticClusterServiceMeshOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterServiceMeshOutputReference;

new KubernetesAutomaticClusterServiceMeshOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.putCertificateAuthority">putCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetCertificateAuthority">resetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetExternalIngressGatewayEnabled">resetExternalIngressGatewayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetInternalIngressGatewayEnabled">resetInternalIngressGatewayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetProxyRedirectMechanism">resetProxyRedirectMechanism</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateAuthority` <a name="putCertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.putCertificateAuthority"></a>

```java
public void putCertificateAuthority(KubernetesAutomaticClusterServiceMeshCertificateAuthority value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.putCertificateAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---

##### `resetCertificateAuthority` <a name="resetCertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetCertificateAuthority"></a>

```java
public void resetCertificateAuthority()
```

##### `resetExternalIngressGatewayEnabled` <a name="resetExternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetExternalIngressGatewayEnabled"></a>

```java
public void resetExternalIngressGatewayEnabled()
```

##### `resetInternalIngressGatewayEnabled` <a name="resetInternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetInternalIngressGatewayEnabled"></a>

```java
public void resetInternalIngressGatewayEnabled()
```

##### `resetProxyRedirectMechanism` <a name="resetProxyRedirectMechanism" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetProxyRedirectMechanism"></a>

```java
public void resetProxyRedirectMechanism()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference">KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabledInput">externalIngressGatewayEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabledInput">internalIngressGatewayEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanismInput">proxyRedirectMechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisionsInput">revisionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled">externalIngressGatewayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled">internalIngressGatewayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism">proxyRedirectMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisions">revisions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority"></a>

```java
public KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference getCertificateAuthority();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference">KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference</a>

---

##### `certificateAuthorityInput`<sup>Optional</sup> <a name="certificateAuthorityInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthorityInput"></a>

```java
public KubernetesAutomaticClusterServiceMeshCertificateAuthority getCertificateAuthorityInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---

##### `externalIngressGatewayEnabledInput`<sup>Optional</sup> <a name="externalIngressGatewayEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getExternalIngressGatewayEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalIngressGatewayEnabledInput`<sup>Optional</sup> <a name="internalIngressGatewayEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getInternalIngressGatewayEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proxyRedirectMechanismInput`<sup>Optional</sup> <a name="proxyRedirectMechanismInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanismInput"></a>

```java
public java.lang.String getProxyRedirectMechanismInput();
```

- *Type:* java.lang.String

---

##### `revisionsInput`<sup>Optional</sup> <a name="revisionsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisionsInput"></a>

```java
public java.util.List<java.lang.String> getRevisionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalIngressGatewayEnabled`<sup>Required</sup> <a name="externalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getExternalIngressGatewayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalIngressGatewayEnabled`<sup>Required</sup> <a name="internalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getInternalIngressGatewayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proxyRedirectMechanism`<sup>Required</sup> <a name="proxyRedirectMechanism" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism"></a>

```java
public java.lang.String getProxyRedirectMechanism();
```

- *Type:* java.lang.String

---

##### `revisions`<sup>Required</sup> <a name="revisions" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisions"></a>

```java
public java.util.List<java.lang.String> getRevisions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue"></a>

```java
public KubernetesAutomaticClusterServiceMesh getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

---


### KubernetesAutomaticClusterTimeoutsOutputReference <a name="KubernetesAutomaticClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterTimeoutsOutputReference;

new KubernetesAutomaticClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|KubernetesAutomaticClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

---


### KubernetesAutomaticClusterWebAppRoutingIngressOutputReference <a name="KubernetesAutomaticClusterWebAppRoutingIngressOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference;

new KubernetesAutomaticClusterWebAppRoutingIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDefaultNginxController">resetDefaultNginxController</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDnsZoneIds">resetDnsZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetIstioEnabled">resetIstioEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultNginxController` <a name="resetDefaultNginxController" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDefaultNginxController"></a>

```java
public void resetDefaultNginxController()
```

##### `resetDnsZoneIds` <a name="resetDnsZoneIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDnsZoneIds"></a>

```java
public void resetDnsZoneIds()
```

##### `resetIstioEnabled` <a name="resetIstioEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetIstioEnabled"></a>

```java
public void resetIstioEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity">webAppRoutingIdentity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxControllerInput">defaultNginxControllerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIdsInput">dnsZoneIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabledInput">istioEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController">defaultNginxController</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds">dnsZoneIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled">istioEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `webAppRoutingIdentity`<sup>Required</sup> <a name="webAppRoutingIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity"></a>

```java
public KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList getWebAppRoutingIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a>

---

##### `defaultNginxControllerInput`<sup>Optional</sup> <a name="defaultNginxControllerInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxControllerInput"></a>

```java
public java.lang.String getDefaultNginxControllerInput();
```

- *Type:* java.lang.String

---

##### `dnsZoneIdsInput`<sup>Optional</sup> <a name="dnsZoneIdsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIdsInput"></a>

```java
public java.util.List<java.lang.String> getDnsZoneIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `istioEnabledInput`<sup>Optional</sup> <a name="istioEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIstioEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultNginxController`<sup>Required</sup> <a name="defaultNginxController" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController"></a>

```java
public java.lang.String getDefaultNginxController();
```

- *Type:* java.lang.String

---

##### `dnsZoneIds`<sup>Required</sup> <a name="dnsZoneIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds"></a>

```java
public java.util.List<java.lang.String> getDnsZoneIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `istioEnabled`<sup>Required</sup> <a name="istioEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIstioEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue"></a>

```java
public KubernetesAutomaticClusterWebAppRoutingIngress getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

---


### KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList <a name="KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList;

new KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get"></a>

```java
public KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference <a name="KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_automatic_cluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference;

new KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue"></a>

```java
public KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a>

---



