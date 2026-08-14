# `networkManagerConnectivityConfiguration` Submodule <a name="`networkManagerConnectivityConfiguration` Submodule" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerConnectivityConfiguration <a name="NetworkManagerConnectivityConfiguration" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration azurerm_network_manager_connectivity_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfiguration;

NetworkManagerConnectivityConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appliesToGroup(IResolvable|java.util.List<NetworkManagerConnectivityConfigurationAppliesToGroup>)
    .connectivityTopology(java.lang.String)
    .name(java.lang.String)
    .networkManagerId(java.lang.String)
//  .connectedGroupAddressOverlapEnabled(java.lang.Boolean|IResolvable)
//  .connectedGroupPrivateEndpointsScale(java.lang.String)
//  .deleteExistingPeeringEnabled(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .globalMeshEnabled(java.lang.Boolean|IResolvable)
//  .hub(NetworkManagerConnectivityConfigurationHub)
//  .id(java.lang.String)
//  .peeringEnforcementEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(NetworkManagerConnectivityConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.appliesToGroup">appliesToGroup</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>></code> | applies_to_group block. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connectivityTopology">connectivityTopology</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.networkManagerId">networkManagerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connectedGroupAddressOverlapEnabled">connectedGroupAddressOverlapEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connected_group_address_overlap_enabled NetworkManagerConnectivityConfiguration#connected_group_address_overlap_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connectedGroupPrivateEndpointsScale">connectedGroupPrivateEndpointsScale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connected_group_private_endpoints_scale NetworkManagerConnectivityConfiguration#connected_group_private_endpoints_scale}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.deleteExistingPeeringEnabled">deleteExistingPeeringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.globalMeshEnabled">globalMeshEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.hub">hub</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | hub block. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.peeringEnforcementEnabled">peeringEnforcementEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#peering_enforcement_enabled NetworkManagerConnectivityConfiguration#peering_enforcement_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appliesToGroup`<sup>Required</sup> <a name="appliesToGroup" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.appliesToGroup"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>>

applies_to_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#applies_to_group NetworkManagerConnectivityConfiguration#applies_to_group}

---

##### `connectivityTopology`<sup>Required</sup> <a name="connectivityTopology" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connectivityTopology"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}.

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.networkManagerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}.

---

##### `connectedGroupAddressOverlapEnabled`<sup>Optional</sup> <a name="connectedGroupAddressOverlapEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connectedGroupAddressOverlapEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connected_group_address_overlap_enabled NetworkManagerConnectivityConfiguration#connected_group_address_overlap_enabled}.

---

##### `connectedGroupPrivateEndpointsScale`<sup>Optional</sup> <a name="connectedGroupPrivateEndpointsScale" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.connectedGroupPrivateEndpointsScale"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connected_group_private_endpoints_scale NetworkManagerConnectivityConfiguration#connected_group_private_endpoints_scale}.

---

##### `deleteExistingPeeringEnabled`<sup>Optional</sup> <a name="deleteExistingPeeringEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.deleteExistingPeeringEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}.

---

##### `globalMeshEnabled`<sup>Optional</sup> <a name="globalMeshEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.globalMeshEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}.

---

##### `hub`<sup>Optional</sup> <a name="hub" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.hub"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#hub NetworkManagerConnectivityConfiguration#hub}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peeringEnforcementEnabled`<sup>Optional</sup> <a name="peeringEnforcementEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.peeringEnforcementEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#peering_enforcement_enabled NetworkManagerConnectivityConfiguration#peering_enforcement_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#timeouts NetworkManagerConnectivityConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putAppliesToGroup">putAppliesToGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub">putHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetConnectedGroupAddressOverlapEnabled">resetConnectedGroupAddressOverlapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetConnectedGroupPrivateEndpointsScale">resetConnectedGroupPrivateEndpointsScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDeleteExistingPeeringEnabled">resetDeleteExistingPeeringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetGlobalMeshEnabled">resetGlobalMeshEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetHub">resetHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetPeeringEnforcementEnabled">resetPeeringEnforcementEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppliesToGroup` <a name="putAppliesToGroup" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putAppliesToGroup"></a>

```java
public void putAppliesToGroup(IResolvable|java.util.List<NetworkManagerConnectivityConfigurationAppliesToGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putAppliesToGroup.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>>

---

##### `putHub` <a name="putHub" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub"></a>

```java
public void putHub(NetworkManagerConnectivityConfigurationHub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts"></a>

```java
public void putTimeouts(NetworkManagerConnectivityConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>

---

##### `resetConnectedGroupAddressOverlapEnabled` <a name="resetConnectedGroupAddressOverlapEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetConnectedGroupAddressOverlapEnabled"></a>

```java
public void resetConnectedGroupAddressOverlapEnabled()
```

##### `resetConnectedGroupPrivateEndpointsScale` <a name="resetConnectedGroupPrivateEndpointsScale" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetConnectedGroupPrivateEndpointsScale"></a>

```java
public void resetConnectedGroupPrivateEndpointsScale()
```

##### `resetDeleteExistingPeeringEnabled` <a name="resetDeleteExistingPeeringEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDeleteExistingPeeringEnabled"></a>

```java
public void resetDeleteExistingPeeringEnabled()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGlobalMeshEnabled` <a name="resetGlobalMeshEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetGlobalMeshEnabled"></a>

```java
public void resetGlobalMeshEnabled()
```

##### `resetHub` <a name="resetHub" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetHub"></a>

```java
public void resetHub()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetPeeringEnforcementEnabled` <a name="resetPeeringEnforcementEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetPeeringEnforcementEnabled"></a>

```java
public void resetPeeringEnforcementEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkManagerConnectivityConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfiguration;

NetworkManagerConnectivityConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfiguration;

NetworkManagerConnectivityConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfiguration;

NetworkManagerConnectivityConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfiguration;

NetworkManagerConnectivityConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkManagerConnectivityConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkManagerConnectivityConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkManagerConnectivityConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkManagerConnectivityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagerConnectivityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroup">appliesToGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList">NetworkManagerConnectivityConfigurationAppliesToGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hub">hub</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference">NetworkManagerConnectivityConfigurationHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference">NetworkManagerConnectivityConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroupInput">appliesToGroupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectedGroupAddressOverlapEnabledInput">connectedGroupAddressOverlapEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectedGroupPrivateEndpointsScaleInput">connectedGroupPrivateEndpointsScaleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopologyInput">connectivityTopologyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabledInput">deleteExistingPeeringEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabledInput">globalMeshEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hubInput">hubInput</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerIdInput">networkManagerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.peeringEnforcementEnabledInput">peeringEnforcementEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectedGroupAddressOverlapEnabled">connectedGroupAddressOverlapEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectedGroupPrivateEndpointsScale">connectedGroupPrivateEndpointsScale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopology">connectivityTopology</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled">deleteExistingPeeringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabled">globalMeshEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerId">networkManagerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.peeringEnforcementEnabled">peeringEnforcementEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appliesToGroup`<sup>Required</sup> <a name="appliesToGroup" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroup"></a>

```java
public NetworkManagerConnectivityConfigurationAppliesToGroupList getAppliesToGroup();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList">NetworkManagerConnectivityConfigurationAppliesToGroupList</a>

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hub"></a>

```java
public NetworkManagerConnectivityConfigurationHubOutputReference getHub();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference">NetworkManagerConnectivityConfigurationHubOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeouts"></a>

```java
public NetworkManagerConnectivityConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference">NetworkManagerConnectivityConfigurationTimeoutsOutputReference</a>

---

##### `appliesToGroupInput`<sup>Optional</sup> <a name="appliesToGroupInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroupInput"></a>

```java
public IResolvable|java.util.List<NetworkManagerConnectivityConfigurationAppliesToGroup> getAppliesToGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>>

---

##### `connectedGroupAddressOverlapEnabledInput`<sup>Optional</sup> <a name="connectedGroupAddressOverlapEnabledInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectedGroupAddressOverlapEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getConnectedGroupAddressOverlapEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `connectedGroupPrivateEndpointsScaleInput`<sup>Optional</sup> <a name="connectedGroupPrivateEndpointsScaleInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectedGroupPrivateEndpointsScaleInput"></a>

```java
public java.lang.String getConnectedGroupPrivateEndpointsScaleInput();
```

- *Type:* java.lang.String

---

##### `connectivityTopologyInput`<sup>Optional</sup> <a name="connectivityTopologyInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopologyInput"></a>

```java
public java.lang.String getConnectivityTopologyInput();
```

- *Type:* java.lang.String

---

##### `deleteExistingPeeringEnabledInput`<sup>Optional</sup> <a name="deleteExistingPeeringEnabledInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteExistingPeeringEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalMeshEnabledInput`<sup>Optional</sup> <a name="globalMeshEnabledInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGlobalMeshEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hubInput`<sup>Optional</sup> <a name="hubInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hubInput"></a>

```java
public NetworkManagerConnectivityConfigurationHub getHubInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkManagerIdInput`<sup>Optional</sup> <a name="networkManagerIdInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerIdInput"></a>

```java
public java.lang.String getNetworkManagerIdInput();
```

- *Type:* java.lang.String

---

##### `peeringEnforcementEnabledInput`<sup>Optional</sup> <a name="peeringEnforcementEnabledInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.peeringEnforcementEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPeeringEnforcementEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeoutsInput"></a>

```java
public IResolvable|NetworkManagerConnectivityConfigurationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>

---

##### `connectedGroupAddressOverlapEnabled`<sup>Required</sup> <a name="connectedGroupAddressOverlapEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectedGroupAddressOverlapEnabled"></a>

```java
public java.lang.Boolean|IResolvable getConnectedGroupAddressOverlapEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `connectedGroupPrivateEndpointsScale`<sup>Required</sup> <a name="connectedGroupPrivateEndpointsScale" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectedGroupPrivateEndpointsScale"></a>

```java
public java.lang.String getConnectedGroupPrivateEndpointsScale();
```

- *Type:* java.lang.String

---

##### `connectivityTopology`<sup>Required</sup> <a name="connectivityTopology" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopology"></a>

```java
public java.lang.String getConnectivityTopology();
```

- *Type:* java.lang.String

---

##### `deleteExistingPeeringEnabled`<sup>Required</sup> <a name="deleteExistingPeeringEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeleteExistingPeeringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `globalMeshEnabled`<sup>Required</sup> <a name="globalMeshEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGlobalMeshEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerId"></a>

```java
public java.lang.String getNetworkManagerId();
```

- *Type:* java.lang.String

---

##### `peeringEnforcementEnabled`<sup>Required</sup> <a name="peeringEnforcementEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.peeringEnforcementEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPeeringEnforcementEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerConnectivityConfigurationAppliesToGroup <a name="NetworkManagerConnectivityConfigurationAppliesToGroup" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfigurationAppliesToGroup;

NetworkManagerConnectivityConfigurationAppliesToGroup.builder()
    .groupConnectivity(java.lang.String)
    .networkGroupId(java.lang.String)
//  .globalMeshEnabled(java.lang.Boolean|IResolvable)
//  .useHubGateway(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.groupConnectivity">groupConnectivity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#group_connectivity NetworkManagerConnectivityConfiguration#group_connectivity}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.networkGroupId">networkGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#network_group_id NetworkManagerConnectivityConfiguration#network_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.globalMeshEnabled">globalMeshEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.useHubGateway">useHubGateway</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#use_hub_gateway NetworkManagerConnectivityConfiguration#use_hub_gateway}. |

---

##### `groupConnectivity`<sup>Required</sup> <a name="groupConnectivity" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.groupConnectivity"></a>

```java
public java.lang.String getGroupConnectivity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#group_connectivity NetworkManagerConnectivityConfiguration#group_connectivity}.

---

##### `networkGroupId`<sup>Required</sup> <a name="networkGroupId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.networkGroupId"></a>

```java
public java.lang.String getNetworkGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#network_group_id NetworkManagerConnectivityConfiguration#network_group_id}.

---

##### `globalMeshEnabled`<sup>Optional</sup> <a name="globalMeshEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.globalMeshEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGlobalMeshEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}.

---

##### `useHubGateway`<sup>Optional</sup> <a name="useHubGateway" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.useHubGateway"></a>

```java
public java.lang.Boolean|IResolvable getUseHubGateway();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#use_hub_gateway NetworkManagerConnectivityConfiguration#use_hub_gateway}.

---

### NetworkManagerConnectivityConfigurationConfig <a name="NetworkManagerConnectivityConfigurationConfig" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfigurationConfig;

NetworkManagerConnectivityConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appliesToGroup(IResolvable|java.util.List<NetworkManagerConnectivityConfigurationAppliesToGroup>)
    .connectivityTopology(java.lang.String)
    .name(java.lang.String)
    .networkManagerId(java.lang.String)
//  .connectedGroupAddressOverlapEnabled(java.lang.Boolean|IResolvable)
//  .connectedGroupPrivateEndpointsScale(java.lang.String)
//  .deleteExistingPeeringEnabled(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .globalMeshEnabled(java.lang.Boolean|IResolvable)
//  .hub(NetworkManagerConnectivityConfigurationHub)
//  .id(java.lang.String)
//  .peeringEnforcementEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(NetworkManagerConnectivityConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.appliesToGroup">appliesToGroup</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>></code> | applies_to_group block. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectivityTopology">connectivityTopology</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.networkManagerId">networkManagerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectedGroupAddressOverlapEnabled">connectedGroupAddressOverlapEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connected_group_address_overlap_enabled NetworkManagerConnectivityConfiguration#connected_group_address_overlap_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectedGroupPrivateEndpointsScale">connectedGroupPrivateEndpointsScale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connected_group_private_endpoints_scale NetworkManagerConnectivityConfiguration#connected_group_private_endpoints_scale}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.deleteExistingPeeringEnabled">deleteExistingPeeringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.globalMeshEnabled">globalMeshEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.hub">hub</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | hub block. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.peeringEnforcementEnabled">peeringEnforcementEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#peering_enforcement_enabled NetworkManagerConnectivityConfiguration#peering_enforcement_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appliesToGroup`<sup>Required</sup> <a name="appliesToGroup" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.appliesToGroup"></a>

```java
public IResolvable|java.util.List<NetworkManagerConnectivityConfigurationAppliesToGroup> getAppliesToGroup();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>>

applies_to_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#applies_to_group NetworkManagerConnectivityConfiguration#applies_to_group}

---

##### `connectivityTopology`<sup>Required</sup> <a name="connectivityTopology" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectivityTopology"></a>

```java
public java.lang.String getConnectivityTopology();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}.

---

##### `networkManagerId`<sup>Required</sup> <a name="networkManagerId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.networkManagerId"></a>

```java
public java.lang.String getNetworkManagerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}.

---

##### `connectedGroupAddressOverlapEnabled`<sup>Optional</sup> <a name="connectedGroupAddressOverlapEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectedGroupAddressOverlapEnabled"></a>

```java
public java.lang.Boolean|IResolvable getConnectedGroupAddressOverlapEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connected_group_address_overlap_enabled NetworkManagerConnectivityConfiguration#connected_group_address_overlap_enabled}.

---

##### `connectedGroupPrivateEndpointsScale`<sup>Optional</sup> <a name="connectedGroupPrivateEndpointsScale" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectedGroupPrivateEndpointsScale"></a>

```java
public java.lang.String getConnectedGroupPrivateEndpointsScale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#connected_group_private_endpoints_scale NetworkManagerConnectivityConfiguration#connected_group_private_endpoints_scale}.

---

##### `deleteExistingPeeringEnabled`<sup>Optional</sup> <a name="deleteExistingPeeringEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.deleteExistingPeeringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeleteExistingPeeringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}.

---

##### `globalMeshEnabled`<sup>Optional</sup> <a name="globalMeshEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.globalMeshEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGlobalMeshEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}.

---

##### `hub`<sup>Optional</sup> <a name="hub" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.hub"></a>

```java
public NetworkManagerConnectivityConfigurationHub getHub();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#hub NetworkManagerConnectivityConfiguration#hub}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peeringEnforcementEnabled`<sup>Optional</sup> <a name="peeringEnforcementEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.peeringEnforcementEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPeeringEnforcementEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#peering_enforcement_enabled NetworkManagerConnectivityConfiguration#peering_enforcement_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.timeouts"></a>

```java
public NetworkManagerConnectivityConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#timeouts NetworkManagerConnectivityConfiguration#timeouts}

---

### NetworkManagerConnectivityConfigurationHub <a name="NetworkManagerConnectivityConfigurationHub" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfigurationHub;

NetworkManagerConnectivityConfigurationHub.builder()
    .resourceId(java.lang.String)
    .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#resource_id NetworkManagerConnectivityConfiguration#resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#resource_type NetworkManagerConnectivityConfiguration#resource_type}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#resource_id NetworkManagerConnectivityConfiguration#resource_id}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#resource_type NetworkManagerConnectivityConfiguration#resource_type}.

---

### NetworkManagerConnectivityConfigurationTimeouts <a name="NetworkManagerConnectivityConfigurationTimeouts" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfigurationTimeouts;

NetworkManagerConnectivityConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#create NetworkManagerConnectivityConfiguration#create}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#delete NetworkManagerConnectivityConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#read NetworkManagerConnectivityConfiguration#read}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#update NetworkManagerConnectivityConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#create NetworkManagerConnectivityConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#delete NetworkManagerConnectivityConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#read NetworkManagerConnectivityConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_manager_connectivity_configuration#update NetworkManagerConnectivityConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerConnectivityConfigurationAppliesToGroupList <a name="NetworkManagerConnectivityConfigurationAppliesToGroupList" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfigurationAppliesToGroupList;

new NetworkManagerConnectivityConfigurationAppliesToGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.get"></a>

```java
public NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkManagerConnectivityConfigurationAppliesToGroup> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>>

---


### NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference <a name="NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference;

new NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetGlobalMeshEnabled">resetGlobalMeshEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetUseHubGateway">resetUseHubGateway</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlobalMeshEnabled` <a name="resetGlobalMeshEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetGlobalMeshEnabled"></a>

```java
public void resetGlobalMeshEnabled()
```

##### `resetUseHubGateway` <a name="resetUseHubGateway" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetUseHubGateway"></a>

```java
public void resetUseHubGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabledInput">globalMeshEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivityInput">groupConnectivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupIdInput">networkGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGatewayInput">useHubGatewayInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled">globalMeshEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity">groupConnectivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId">networkGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway">useHubGateway</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `globalMeshEnabledInput`<sup>Optional</sup> <a name="globalMeshEnabledInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGlobalMeshEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupConnectivityInput`<sup>Optional</sup> <a name="groupConnectivityInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivityInput"></a>

```java
public java.lang.String getGroupConnectivityInput();
```

- *Type:* java.lang.String

---

##### `networkGroupIdInput`<sup>Optional</sup> <a name="networkGroupIdInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupIdInput"></a>

```java
public java.lang.String getNetworkGroupIdInput();
```

- *Type:* java.lang.String

---

##### `useHubGatewayInput`<sup>Optional</sup> <a name="useHubGatewayInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGatewayInput"></a>

```java
public java.lang.Boolean|IResolvable getUseHubGatewayInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `globalMeshEnabled`<sup>Required</sup> <a name="globalMeshEnabled" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGlobalMeshEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `groupConnectivity`<sup>Required</sup> <a name="groupConnectivity" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity"></a>

```java
public java.lang.String getGroupConnectivity();
```

- *Type:* java.lang.String

---

##### `networkGroupId`<sup>Required</sup> <a name="networkGroupId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId"></a>

```java
public java.lang.String getNetworkGroupId();
```

- *Type:* java.lang.String

---

##### `useHubGateway`<sup>Required</sup> <a name="useHubGateway" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway"></a>

```java
public java.lang.Boolean|IResolvable getUseHubGateway();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkManagerConnectivityConfigurationAppliesToGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup">NetworkManagerConnectivityConfigurationAppliesToGroup</a>

---


### NetworkManagerConnectivityConfigurationHubOutputReference <a name="NetworkManagerConnectivityConfigurationHubOutputReference" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfigurationHubOutputReference;

new NetworkManagerConnectivityConfigurationHubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue"></a>

```java
public NetworkManagerConnectivityConfigurationHub getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

---


### NetworkManagerConnectivityConfigurationTimeoutsOutputReference <a name="NetworkManagerConnectivityConfigurationTimeoutsOutputReference" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.network_manager_connectivity_configuration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference;

new NetworkManagerConnectivityConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkManagerConnectivityConfigurationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>

---



