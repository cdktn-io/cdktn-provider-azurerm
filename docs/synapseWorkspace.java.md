# `synapseWorkspace` Submodule <a name="`synapseWorkspace` Submodule" id="@cdktn/provider-azurerm.synapseWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspace <a name="SynapseWorkspace" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace azurerm_synapse_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspace;

SynapseWorkspace.Builder.create(Construct scope, java.lang.String id)
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
    .storageDataLakeGen2FilesystemId(java.lang.String)
//  .azureadAuthenticationOnly(java.lang.Boolean|IResolvable)
//  .azureDevopsRepo(SynapseWorkspaceAzureDevopsRepo)
//  .computeSubnetId(java.lang.String)
//  .customerManagedKey(SynapseWorkspaceCustomerManagedKey)
//  .dataExfiltrationProtectionEnabled(java.lang.Boolean|IResolvable)
//  .githubRepo(SynapseWorkspaceGithubRepo)
//  .id(java.lang.String)
//  .identity(SynapseWorkspaceIdentity)
//  .linkingAllowedForAadTenantIds(java.util.List<java.lang.String>)
//  .managedResourceGroupName(java.lang.String)
//  .managedVirtualNetworkEnabled(java.lang.Boolean|IResolvable)
//  .publicNetworkAccessEnabled(java.lang.Boolean|IResolvable)
//  .purviewId(java.lang.String)
//  .sqlAdministratorLogin(java.lang.String)
//  .sqlAdministratorLoginPassword(java.lang.String)
//  .sqlIdentityControlEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SynapseWorkspaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#location SynapseWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#name SynapseWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#resource_group_name SynapseWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.storageDataLakeGen2FilesystemId">storageDataLakeGen2FilesystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#azuread_authentication_only SynapseWorkspace#azuread_authentication_only}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.azureDevopsRepo">azureDevopsRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | azure_devops_repo block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.computeSubnetId">computeSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#compute_subnet_id SynapseWorkspace#compute_subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.dataExfiltrationProtectionEnabled">dataExfiltrationProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.githubRepo">githubRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | github_repo block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#id SynapseWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.linkingAllowedForAadTenantIds">linkingAllowedForAadTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.managedVirtualNetworkEnabled">managedVirtualNetworkEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.purviewId">purviewId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#purview_id SynapseWorkspace#purview_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.sqlAdministratorLogin">sqlAdministratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_administrator_login SynapseWorkspace#sql_administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.sqlAdministratorLoginPassword">sqlAdministratorLoginPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.sqlIdentityControlEnabled">sqlIdentityControlEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#tags SynapseWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#location SynapseWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#name SynapseWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#resource_group_name SynapseWorkspace#resource_group_name}.

---

##### `storageDataLakeGen2FilesystemId`<sup>Required</sup> <a name="storageDataLakeGen2FilesystemId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.storageDataLakeGen2FilesystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}.

---

##### `azureadAuthenticationOnly`<sup>Optional</sup> <a name="azureadAuthenticationOnly" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.azureadAuthenticationOnly"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#azuread_authentication_only SynapseWorkspace#azuread_authentication_only}.

---

##### `azureDevopsRepo`<sup>Optional</sup> <a name="azureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.azureDevopsRepo"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

azure_devops_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#azure_devops_repo SynapseWorkspace#azure_devops_repo}

---

##### `computeSubnetId`<sup>Optional</sup> <a name="computeSubnetId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.computeSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#compute_subnet_id SynapseWorkspace#compute_subnet_id}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.customerManagedKey"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#customer_managed_key SynapseWorkspace#customer_managed_key}

---

##### `dataExfiltrationProtectionEnabled`<sup>Optional</sup> <a name="dataExfiltrationProtectionEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.dataExfiltrationProtectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}.

---

##### `githubRepo`<sup>Optional</sup> <a name="githubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.githubRepo"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

github_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#github_repo SynapseWorkspace#github_repo}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#id SynapseWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#identity SynapseWorkspace#identity}

---

##### `linkingAllowedForAadTenantIds`<sup>Optional</sup> <a name="linkingAllowedForAadTenantIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.linkingAllowedForAadTenantIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}.

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.managedResourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}.

---

##### `managedVirtualNetworkEnabled`<sup>Optional</sup> <a name="managedVirtualNetworkEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.managedVirtualNetworkEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}.

---

##### `purviewId`<sup>Optional</sup> <a name="purviewId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.purviewId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#purview_id SynapseWorkspace#purview_id}.

---

##### `sqlAdministratorLogin`<sup>Optional</sup> <a name="sqlAdministratorLogin" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.sqlAdministratorLogin"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_administrator_login SynapseWorkspace#sql_administrator_login}.

---

##### `sqlAdministratorLoginPassword`<sup>Optional</sup> <a name="sqlAdministratorLoginPassword" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.sqlAdministratorLoginPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}.

---

##### `sqlIdentityControlEnabled`<sup>Optional</sup> <a name="sqlIdentityControlEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.sqlIdentityControlEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#tags SynapseWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#timeouts SynapseWorkspace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putAzureDevopsRepo">putAzureDevopsRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putGithubRepo">putGithubRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureadAuthenticationOnly">resetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureDevopsRepo">resetAzureDevopsRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetComputeSubnetId">resetComputeSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetDataExfiltrationProtectionEnabled">resetDataExfiltrationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetGithubRepo">resetGithubRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetLinkingAllowedForAadTenantIds">resetLinkingAllowedForAadTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedResourceGroupName">resetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedVirtualNetworkEnabled">resetManagedVirtualNetworkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPurviewId">resetPurviewId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLogin">resetSqlAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLoginPassword">resetSqlAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlIdentityControlEnabled">resetSqlIdentityControlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureDevopsRepo` <a name="putAzureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putAzureDevopsRepo"></a>

```java
public void putAzureDevopsRepo(SynapseWorkspaceAzureDevopsRepo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putAzureDevopsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putCustomerManagedKey"></a>

```java
public void putCustomerManagedKey(SynapseWorkspaceCustomerManagedKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

---

##### `putGithubRepo` <a name="putGithubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putGithubRepo"></a>

```java
public void putGithubRepo(SynapseWorkspaceGithubRepo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putGithubRepo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putIdentity"></a>

```java
public void putIdentity(SynapseWorkspaceIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putTimeouts"></a>

```java
public void putTimeouts(SynapseWorkspaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

---

##### `resetAzureadAuthenticationOnly` <a name="resetAzureadAuthenticationOnly" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureadAuthenticationOnly"></a>

```java
public void resetAzureadAuthenticationOnly()
```

##### `resetAzureDevopsRepo` <a name="resetAzureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureDevopsRepo"></a>

```java
public void resetAzureDevopsRepo()
```

##### `resetComputeSubnetId` <a name="resetComputeSubnetId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetComputeSubnetId"></a>

```java
public void resetComputeSubnetId()
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetCustomerManagedKey"></a>

```java
public void resetCustomerManagedKey()
```

##### `resetDataExfiltrationProtectionEnabled` <a name="resetDataExfiltrationProtectionEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetDataExfiltrationProtectionEnabled"></a>

```java
public void resetDataExfiltrationProtectionEnabled()
```

##### `resetGithubRepo` <a name="resetGithubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetGithubRepo"></a>

```java
public void resetGithubRepo()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLinkingAllowedForAadTenantIds` <a name="resetLinkingAllowedForAadTenantIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetLinkingAllowedForAadTenantIds"></a>

```java
public void resetLinkingAllowedForAadTenantIds()
```

##### `resetManagedResourceGroupName` <a name="resetManagedResourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedResourceGroupName"></a>

```java
public void resetManagedResourceGroupName()
```

##### `resetManagedVirtualNetworkEnabled` <a name="resetManagedVirtualNetworkEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedVirtualNetworkEnabled"></a>

```java
public void resetManagedVirtualNetworkEnabled()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetPurviewId` <a name="resetPurviewId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPurviewId"></a>

```java
public void resetPurviewId()
```

##### `resetSqlAdministratorLogin` <a name="resetSqlAdministratorLogin" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLogin"></a>

```java
public void resetSqlAdministratorLogin()
```

##### `resetSqlAdministratorLoginPassword` <a name="resetSqlAdministratorLoginPassword" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLoginPassword"></a>

```java
public void resetSqlAdministratorLoginPassword()
```

##### `resetSqlIdentityControlEnabled` <a name="resetSqlIdentityControlEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlIdentityControlEnabled"></a>

```java
public void resetSqlIdentityControlEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SynapseWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspace;

SynapseWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspace;

SynapseWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspace;

SynapseWorkspace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspace;

SynapseWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SynapseWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SynapseWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SynapseWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SynapseWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SynapseWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepo">azureDevopsRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference">SynapseWorkspaceAzureDevopsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connectivityEndpoints">connectivityEndpoints</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference">SynapseWorkspaceCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepo">githubRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference">SynapseWorkspaceGithubRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference">SynapseWorkspaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference">SynapseWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnlyInput">azureadAuthenticationOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepoInput">azureDevopsRepoInput</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetIdInput">computeSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabledInput">dataExfiltrationProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepoInput">githubRepoInput</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIdsInput">linkingAllowedForAadTenantIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupNameInput">managedResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabledInput">managedVirtualNetworkEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewIdInput">purviewIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginInput">sqlAdministratorLoginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPasswordInput">sqlAdministratorLoginPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabledInput">sqlIdentityControlEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemIdInput">storageDataLakeGen2FilesystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetId">computeSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabled">dataExfiltrationProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIds">linkingAllowedForAadTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabled">managedVirtualNetworkEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewId">purviewId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLogin">sqlAdministratorLogin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPassword">sqlAdministratorLoginPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabled">sqlIdentityControlEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemId">storageDataLakeGen2FilesystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `azureDevopsRepo`<sup>Required</sup> <a name="azureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepo"></a>

```java
public SynapseWorkspaceAzureDevopsRepoOutputReference getAzureDevopsRepo();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference">SynapseWorkspaceAzureDevopsRepoOutputReference</a>

---

##### `connectivityEndpoints`<sup>Required</sup> <a name="connectivityEndpoints" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connectivityEndpoints"></a>

```java
public StringMap getConnectivityEndpoints();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKey"></a>

```java
public SynapseWorkspaceCustomerManagedKeyOutputReference getCustomerManagedKey();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference">SynapseWorkspaceCustomerManagedKeyOutputReference</a>

---

##### `githubRepo`<sup>Required</sup> <a name="githubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepo"></a>

```java
public SynapseWorkspaceGithubRepoOutputReference getGithubRepo();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference">SynapseWorkspaceGithubRepoOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identity"></a>

```java
public SynapseWorkspaceIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference">SynapseWorkspaceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeouts"></a>

```java
public SynapseWorkspaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference">SynapseWorkspaceTimeoutsOutputReference</a>

---

##### `azureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="azureadAuthenticationOnlyInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getAzureadAuthenticationOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `azureDevopsRepoInput`<sup>Optional</sup> <a name="azureDevopsRepoInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepoInput"></a>

```java
public SynapseWorkspaceAzureDevopsRepo getAzureDevopsRepoInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

---

##### `computeSubnetIdInput`<sup>Optional</sup> <a name="computeSubnetIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetIdInput"></a>

```java
public java.lang.String getComputeSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKeyInput"></a>

```java
public SynapseWorkspaceCustomerManagedKey getCustomerManagedKeyInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

---

##### `dataExfiltrationProtectionEnabledInput`<sup>Optional</sup> <a name="dataExfiltrationProtectionEnabledInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDataExfiltrationProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `githubRepoInput`<sup>Optional</sup> <a name="githubRepoInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepoInput"></a>

```java
public SynapseWorkspaceGithubRepo getGithubRepoInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identityInput"></a>

```java
public SynapseWorkspaceIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkingAllowedForAadTenantIdsInput`<sup>Optional</sup> <a name="linkingAllowedForAadTenantIdsInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIdsInput"></a>

```java
public java.util.List<java.lang.String> getLinkingAllowedForAadTenantIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedResourceGroupNameInput`<sup>Optional</sup> <a name="managedResourceGroupNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupNameInput"></a>

```java
public java.lang.String getManagedResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `managedVirtualNetworkEnabledInput`<sup>Optional</sup> <a name="managedVirtualNetworkEnabledInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getManagedVirtualNetworkEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `purviewIdInput`<sup>Optional</sup> <a name="purviewIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewIdInput"></a>

```java
public java.lang.String getPurviewIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sqlAdministratorLoginInput`<sup>Optional</sup> <a name="sqlAdministratorLoginInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginInput"></a>

```java
public java.lang.String getSqlAdministratorLoginInput();
```

- *Type:* java.lang.String

---

##### `sqlAdministratorLoginPasswordInput`<sup>Optional</sup> <a name="sqlAdministratorLoginPasswordInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPasswordInput"></a>

```java
public java.lang.String getSqlAdministratorLoginPasswordInput();
```

- *Type:* java.lang.String

---

##### `sqlIdentityControlEnabledInput`<sup>Optional</sup> <a name="sqlIdentityControlEnabledInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSqlIdentityControlEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageDataLakeGen2FilesystemIdInput`<sup>Optional</sup> <a name="storageDataLakeGen2FilesystemIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemIdInput"></a>

```java
public java.lang.String getStorageDataLakeGen2FilesystemIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeoutsInput"></a>

```java
public IResolvable|SynapseWorkspaceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

---

##### `azureadAuthenticationOnly`<sup>Required</sup> <a name="azureadAuthenticationOnly" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnly"></a>

```java
public java.lang.Boolean|IResolvable getAzureadAuthenticationOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `computeSubnetId`<sup>Required</sup> <a name="computeSubnetId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetId"></a>

```java
public java.lang.String getComputeSubnetId();
```

- *Type:* java.lang.String

---

##### `dataExfiltrationProtectionEnabled`<sup>Required</sup> <a name="dataExfiltrationProtectionEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataExfiltrationProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkingAllowedForAadTenantIds`<sup>Required</sup> <a name="linkingAllowedForAadTenantIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIds"></a>

```java
public java.util.List<java.lang.String> getLinkingAllowedForAadTenantIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupName"></a>

```java
public java.lang.String getManagedResourceGroupName();
```

- *Type:* java.lang.String

---

##### `managedVirtualNetworkEnabled`<sup>Required</sup> <a name="managedVirtualNetworkEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabled"></a>

```java
public java.lang.Boolean|IResolvable getManagedVirtualNetworkEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `purviewId`<sup>Required</sup> <a name="purviewId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewId"></a>

```java
public java.lang.String getPurviewId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sqlAdministratorLogin`<sup>Required</sup> <a name="sqlAdministratorLogin" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLogin"></a>

```java
public java.lang.String getSqlAdministratorLogin();
```

- *Type:* java.lang.String

---

##### `sqlAdministratorLoginPassword`<sup>Required</sup> <a name="sqlAdministratorLoginPassword" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPassword"></a>

```java
public java.lang.String getSqlAdministratorLoginPassword();
```

- *Type:* java.lang.String

---

##### `sqlIdentityControlEnabled`<sup>Required</sup> <a name="sqlIdentityControlEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSqlIdentityControlEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageDataLakeGen2FilesystemId`<sup>Required</sup> <a name="storageDataLakeGen2FilesystemId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemId"></a>

```java
public java.lang.String getStorageDataLakeGen2FilesystemId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceAzureDevopsRepo <a name="SynapseWorkspaceAzureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceAzureDevopsRepo;

SynapseWorkspaceAzureDevopsRepo.builder()
    .accountName(java.lang.String)
    .branchName(java.lang.String)
    .projectName(java.lang.String)
    .repositoryName(java.lang.String)
    .rootFolder(java.lang.String)
//  .lastCommitId(java.lang.String)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.projectName">projectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#project_name SynapseWorkspace#project_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.rootFolder">rootFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.lastCommitId">lastCommitId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#tenant_id SynapseWorkspace#tenant_id}. |

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#project_name SynapseWorkspace#project_name}.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}.

---

##### `rootFolder`<sup>Required</sup> <a name="rootFolder" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.rootFolder"></a>

```java
public java.lang.String getRootFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}.

---

##### `lastCommitId`<sup>Optional</sup> <a name="lastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.lastCommitId"></a>

```java
public java.lang.String getLastCommitId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#tenant_id SynapseWorkspace#tenant_id}.

---

### SynapseWorkspaceConfig <a name="SynapseWorkspaceConfig" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceConfig;

SynapseWorkspaceConfig.builder()
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
    .storageDataLakeGen2FilesystemId(java.lang.String)
//  .azureadAuthenticationOnly(java.lang.Boolean|IResolvable)
//  .azureDevopsRepo(SynapseWorkspaceAzureDevopsRepo)
//  .computeSubnetId(java.lang.String)
//  .customerManagedKey(SynapseWorkspaceCustomerManagedKey)
//  .dataExfiltrationProtectionEnabled(java.lang.Boolean|IResolvable)
//  .githubRepo(SynapseWorkspaceGithubRepo)
//  .id(java.lang.String)
//  .identity(SynapseWorkspaceIdentity)
//  .linkingAllowedForAadTenantIds(java.util.List<java.lang.String>)
//  .managedResourceGroupName(java.lang.String)
//  .managedVirtualNetworkEnabled(java.lang.Boolean|IResolvable)
//  .publicNetworkAccessEnabled(java.lang.Boolean|IResolvable)
//  .purviewId(java.lang.String)
//  .sqlAdministratorLogin(java.lang.String)
//  .sqlAdministratorLoginPassword(java.lang.String)
//  .sqlIdentityControlEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SynapseWorkspaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#location SynapseWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#name SynapseWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#resource_group_name SynapseWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.storageDataLakeGen2FilesystemId">storageDataLakeGen2FilesystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureadAuthenticationOnly">azureadAuthenticationOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#azuread_authentication_only SynapseWorkspace#azuread_authentication_only}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureDevopsRepo">azureDevopsRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | azure_devops_repo block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.computeSubnetId">computeSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#compute_subnet_id SynapseWorkspace#compute_subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dataExfiltrationProtectionEnabled">dataExfiltrationProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.githubRepo">githubRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | github_repo block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#id SynapseWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.linkingAllowedForAadTenantIds">linkingAllowedForAadTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedVirtualNetworkEnabled">managedVirtualNetworkEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.purviewId">purviewId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#purview_id SynapseWorkspace#purview_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLogin">sqlAdministratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_administrator_login SynapseWorkspace#sql_administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLoginPassword">sqlAdministratorLoginPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlIdentityControlEnabled">sqlIdentityControlEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#tags SynapseWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#location SynapseWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#name SynapseWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#resource_group_name SynapseWorkspace#resource_group_name}.

---

##### `storageDataLakeGen2FilesystemId`<sup>Required</sup> <a name="storageDataLakeGen2FilesystemId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.storageDataLakeGen2FilesystemId"></a>

```java
public java.lang.String getStorageDataLakeGen2FilesystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}.

---

##### `azureadAuthenticationOnly`<sup>Optional</sup> <a name="azureadAuthenticationOnly" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureadAuthenticationOnly"></a>

```java
public java.lang.Boolean|IResolvable getAzureadAuthenticationOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#azuread_authentication_only SynapseWorkspace#azuread_authentication_only}.

---

##### `azureDevopsRepo`<sup>Optional</sup> <a name="azureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureDevopsRepo"></a>

```java
public SynapseWorkspaceAzureDevopsRepo getAzureDevopsRepo();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

azure_devops_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#azure_devops_repo SynapseWorkspace#azure_devops_repo}

---

##### `computeSubnetId`<sup>Optional</sup> <a name="computeSubnetId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.computeSubnetId"></a>

```java
public java.lang.String getComputeSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#compute_subnet_id SynapseWorkspace#compute_subnet_id}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.customerManagedKey"></a>

```java
public SynapseWorkspaceCustomerManagedKey getCustomerManagedKey();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#customer_managed_key SynapseWorkspace#customer_managed_key}

---

##### `dataExfiltrationProtectionEnabled`<sup>Optional</sup> <a name="dataExfiltrationProtectionEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dataExfiltrationProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataExfiltrationProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}.

---

##### `githubRepo`<sup>Optional</sup> <a name="githubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.githubRepo"></a>

```java
public SynapseWorkspaceGithubRepo getGithubRepo();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

github_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#github_repo SynapseWorkspace#github_repo}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#id SynapseWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.identity"></a>

```java
public SynapseWorkspaceIdentity getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#identity SynapseWorkspace#identity}

---

##### `linkingAllowedForAadTenantIds`<sup>Optional</sup> <a name="linkingAllowedForAadTenantIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.linkingAllowedForAadTenantIds"></a>

```java
public java.util.List<java.lang.String> getLinkingAllowedForAadTenantIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}.

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedResourceGroupName"></a>

```java
public java.lang.String getManagedResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}.

---

##### `managedVirtualNetworkEnabled`<sup>Optional</sup> <a name="managedVirtualNetworkEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedVirtualNetworkEnabled"></a>

```java
public java.lang.Boolean|IResolvable getManagedVirtualNetworkEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}.

---

##### `purviewId`<sup>Optional</sup> <a name="purviewId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.purviewId"></a>

```java
public java.lang.String getPurviewId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#purview_id SynapseWorkspace#purview_id}.

---

##### `sqlAdministratorLogin`<sup>Optional</sup> <a name="sqlAdministratorLogin" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLogin"></a>

```java
public java.lang.String getSqlAdministratorLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_administrator_login SynapseWorkspace#sql_administrator_login}.

---

##### `sqlAdministratorLoginPassword`<sup>Optional</sup> <a name="sqlAdministratorLoginPassword" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLoginPassword"></a>

```java
public java.lang.String getSqlAdministratorLoginPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}.

---

##### `sqlIdentityControlEnabled`<sup>Optional</sup> <a name="sqlIdentityControlEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlIdentityControlEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSqlIdentityControlEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#tags SynapseWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.timeouts"></a>

```java
public SynapseWorkspaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#timeouts SynapseWorkspace#timeouts}

---

### SynapseWorkspaceCustomerManagedKey <a name="SynapseWorkspaceCustomerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceCustomerManagedKey;

SynapseWorkspaceCustomerManagedKey.builder()
    .keyVersionlessId(java.lang.String)
//  .keyName(java.lang.String)
//  .userAssignedIdentityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyVersionlessId">keyVersionlessId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#key_versionless_id SynapseWorkspace#key_versionless_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#key_name SynapseWorkspace#key_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#user_assigned_identity_id SynapseWorkspace#user_assigned_identity_id}. |

---

##### `keyVersionlessId`<sup>Required</sup> <a name="keyVersionlessId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyVersionlessId"></a>

```java
public java.lang.String getKeyVersionlessId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#key_versionless_id SynapseWorkspace#key_versionless_id}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#key_name SynapseWorkspace#key_name}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#user_assigned_identity_id SynapseWorkspace#user_assigned_identity_id}.

---

### SynapseWorkspaceGithubRepo <a name="SynapseWorkspaceGithubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceGithubRepo;

SynapseWorkspaceGithubRepo.builder()
    .accountName(java.lang.String)
    .branchName(java.lang.String)
    .repositoryName(java.lang.String)
    .rootFolder(java.lang.String)
//  .gitUrl(java.lang.String)
//  .lastCommitId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.rootFolder">rootFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.gitUrl">gitUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#git_url SynapseWorkspace#git_url}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.lastCommitId">lastCommitId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}. |

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}.

---

##### `rootFolder`<sup>Required</sup> <a name="rootFolder" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.rootFolder"></a>

```java
public java.lang.String getRootFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}.

---

##### `gitUrl`<sup>Optional</sup> <a name="gitUrl" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.gitUrl"></a>

```java
public java.lang.String getGitUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#git_url SynapseWorkspace#git_url}.

---

##### `lastCommitId`<sup>Optional</sup> <a name="lastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.lastCommitId"></a>

```java
public java.lang.String getLastCommitId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}.

---

### SynapseWorkspaceIdentity <a name="SynapseWorkspaceIdentity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceIdentity;

SynapseWorkspaceIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#type SynapseWorkspace#type}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#identity_ids SynapseWorkspace#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#type SynapseWorkspace#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#identity_ids SynapseWorkspace#identity_ids}.

---

### SynapseWorkspaceTimeouts <a name="SynapseWorkspaceTimeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceTimeouts;

SynapseWorkspaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#create SynapseWorkspace#create}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#delete SynapseWorkspace#delete}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#read SynapseWorkspace#read}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#update SynapseWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#create SynapseWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#delete SynapseWorkspace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#read SynapseWorkspace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/synapse_workspace#update SynapseWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceAzureDevopsRepoOutputReference <a name="SynapseWorkspaceAzureDevopsRepoOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceAzureDevopsRepoOutputReference;

new SynapseWorkspaceAzureDevopsRepoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetLastCommitId">resetLastCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLastCommitId` <a name="resetLastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetLastCommitId"></a>

```java
public void resetLastCommitId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitIdInput">lastCommitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectNameInput">projectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolderInput">rootFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitId">lastCommitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectName">projectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolder">rootFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `lastCommitIdInput`<sup>Optional</sup> <a name="lastCommitIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitIdInput"></a>

```java
public java.lang.String getLastCommitIdInput();
```

- *Type:* java.lang.String

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectNameInput"></a>

```java
public java.lang.String getProjectNameInput();
```

- *Type:* java.lang.String

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryNameInput"></a>

```java
public java.lang.String getRepositoryNameInput();
```

- *Type:* java.lang.String

---

##### `rootFolderInput`<sup>Optional</sup> <a name="rootFolderInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolderInput"></a>

```java
public java.lang.String getRootFolderInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `lastCommitId`<sup>Required</sup> <a name="lastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitId"></a>

```java
public java.lang.String getLastCommitId();
```

- *Type:* java.lang.String

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

##### `rootFolder`<sup>Required</sup> <a name="rootFolder" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolder"></a>

```java
public java.lang.String getRootFolder();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.internalValue"></a>

```java
public SynapseWorkspaceAzureDevopsRepo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

---


### SynapseWorkspaceCustomerManagedKeyOutputReference <a name="SynapseWorkspaceCustomerManagedKeyOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceCustomerManagedKeyOutputReference;

new SynapseWorkspaceCustomerManagedKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyName` <a name="resetKeyName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetUserAssignedIdentityId"></a>

```java
public void resetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessIdInput">keyVersionlessIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessId">keyVersionlessId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `keyVersionlessIdInput`<sup>Optional</sup> <a name="keyVersionlessIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessIdInput"></a>

```java
public java.lang.String getKeyVersionlessIdInput();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```java
public java.lang.String getUserAssignedIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `keyVersionlessId`<sup>Required</sup> <a name="keyVersionlessId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessId"></a>

```java
public java.lang.String getKeyVersionlessId();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.internalValue"></a>

```java
public SynapseWorkspaceCustomerManagedKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

---


### SynapseWorkspaceGithubRepoOutputReference <a name="SynapseWorkspaceGithubRepoOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceGithubRepoOutputReference;

new SynapseWorkspaceGithubRepoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetGitUrl">resetGitUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetLastCommitId">resetLastCommitId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGitUrl` <a name="resetGitUrl" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetGitUrl"></a>

```java
public void resetGitUrl()
```

##### `resetLastCommitId` <a name="resetLastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetLastCommitId"></a>

```java
public void resetLastCommitId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrlInput">gitUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitIdInput">lastCommitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolderInput">rootFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrl">gitUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitId">lastCommitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolder">rootFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `gitUrlInput`<sup>Optional</sup> <a name="gitUrlInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrlInput"></a>

```java
public java.lang.String getGitUrlInput();
```

- *Type:* java.lang.String

---

##### `lastCommitIdInput`<sup>Optional</sup> <a name="lastCommitIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitIdInput"></a>

```java
public java.lang.String getLastCommitIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryNameInput"></a>

```java
public java.lang.String getRepositoryNameInput();
```

- *Type:* java.lang.String

---

##### `rootFolderInput`<sup>Optional</sup> <a name="rootFolderInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolderInput"></a>

```java
public java.lang.String getRootFolderInput();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `gitUrl`<sup>Required</sup> <a name="gitUrl" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrl"></a>

```java
public java.lang.String getGitUrl();
```

- *Type:* java.lang.String

---

##### `lastCommitId`<sup>Required</sup> <a name="lastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitId"></a>

```java
public java.lang.String getLastCommitId();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

##### `rootFolder`<sup>Required</sup> <a name="rootFolder" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolder"></a>

```java
public java.lang.String getRootFolder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.internalValue"></a>

```java
public SynapseWorkspaceGithubRepo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

---


### SynapseWorkspaceIdentityOutputReference <a name="SynapseWorkspaceIdentityOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceIdentityOutputReference;

new SynapseWorkspaceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.internalValue"></a>

```java
public SynapseWorkspaceIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

---


### SynapseWorkspaceTimeoutsOutputReference <a name="SynapseWorkspaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace.SynapseWorkspaceTimeoutsOutputReference;

new SynapseWorkspaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SynapseWorkspaceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

---



