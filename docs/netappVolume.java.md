# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktn/provider-azurerm.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktn/provider-azurerm.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume azurerm_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolume;

NetappVolume.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .poolName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serviceLevel(java.lang.String)
    .storageQuotaInGb(java.lang.Number)
    .subnetId(java.lang.String)
    .volumePath(java.lang.String)
//  .acceptGrowCapacityPoolForShortTermCloneSplit(java.lang.String)
//  .azureVmwareDataStoreEnabled(java.lang.Boolean|IResolvable)
//  .coolAccess(NetappVolumeCoolAccess)
//  .createFromSnapshotResourceId(java.lang.String)
//  .dataProtectionAdvancedRansomware(NetappVolumeDataProtectionAdvancedRansomware)
//  .dataProtectionBackupPolicy(NetappVolumeDataProtectionBackupPolicy)
//  .dataProtectionReplication(NetappVolumeDataProtectionReplication)
//  .dataProtectionSnapshotPolicy(NetappVolumeDataProtectionSnapshotPolicy)
//  .encryptionKeySource(java.lang.String)
//  .exportPolicyRule(IResolvable|java.util.List<NetappVolumeExportPolicyRule>)
//  .id(java.lang.String)
//  .kerberosEnabled(java.lang.Boolean|IResolvable)
//  .keyVaultPrivateEndpointId(java.lang.String)
//  .largeVolumeEnabled(java.lang.Boolean|IResolvable)
//  .networkFeatures(java.lang.String)
//  .protocols(java.util.List<java.lang.String>)
//  .securityStyle(java.lang.String)
//  .smb3ProtocolEncryptionEnabled(java.lang.Boolean|IResolvable)
//  .smbAccessBasedEnumerationEnabled(java.lang.Boolean|IResolvable)
//  .smbContinuousAvailabilityEnabled(java.lang.Boolean|IResolvable)
//  .smbNonBrowsableEnabled(java.lang.Boolean|IResolvable)
//  .snapshotDirectoryVisible(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .throughputInMibps(java.lang.Number)
//  .timeouts(NetappVolumeTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#location NetappVolume#location}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#name NetappVolume#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.storageQuotaInGb">storageQuotaInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.volumePath">volumePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.acceptGrowCapacityPoolForShortTermCloneSplit">acceptGrowCapacityPoolForShortTermCloneSplit</a></code> | <code>java.lang.String</code> | While auto splitting the short term clone volume, if the parent pool does not have enough space to accommodate the volume after split, it will be automatically resized, which will lead to increased billing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.azureVmwareDataStoreEnabled">azureVmwareDataStoreEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.coolAccess">coolAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | cool_access block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.createFromSnapshotResourceId">createFromSnapshotResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionAdvancedRansomware">dataProtectionAdvancedRansomware</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | data_protection_advanced_ransomware block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionBackupPolicy">dataProtectionBackupPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | data_protection_backup_policy block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionReplication">dataProtectionReplication</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionSnapshotPolicy">dataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.encryptionKeySource">encryptionKeySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.exportPolicyRule">exportPolicyRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>></code> | export_policy_rule block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.kerberosEnabled">kerberosEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable to allow Kerberos secured volumes. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.keyVaultPrivateEndpointId">keyVaultPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.largeVolumeEnabled">largeVolumeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the volume is a large volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.networkFeatures">networkFeatures</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.smb3ProtocolEncryptionEnabled">smb3ProtocolEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.smbAccessBasedEnumerationEnabled">smbAccessBasedEnumerationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable access based enumeration setting for SMB/Dual Protocol volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.smbContinuousAvailabilityEnabled">smbContinuousAvailabilityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Continuous availability option should be used only for SQL and FSLogix workloads. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.smbNonBrowsableEnabled">smbNonBrowsableEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.snapshotDirectoryVisible">snapshotDirectoryVisible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#tags NetappVolume#tags}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.throughputInMibps">throughputInMibps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#zone NetappVolume#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#location NetappVolume#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#name NetappVolume#name}.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.poolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}.

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.serviceLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}.

---

##### `storageQuotaInGb`<sup>Required</sup> <a name="storageQuotaInGb" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.storageQuotaInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}.

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.volumePath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}.

---

##### `acceptGrowCapacityPoolForShortTermCloneSplit`<sup>Optional</sup> <a name="acceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.acceptGrowCapacityPoolForShortTermCloneSplit"></a>

- *Type:* java.lang.String

While auto splitting the short term clone volume, if the parent pool does not have enough space to accommodate the volume after split, it will be automatically resized, which will lead to increased billing.

To accept capacity pool size auto grow and create a short term clone volume, set the property as accepted. Can only be used in conjunction with `create_from_snapshot_resource_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#accept_grow_capacity_pool_for_short_term_clone_split NetappVolume#accept_grow_capacity_pool_for_short_term_clone_split}

---

##### `azureVmwareDataStoreEnabled`<sup>Optional</sup> <a name="azureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.azureVmwareDataStoreEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}.

---

##### `coolAccess`<sup>Optional</sup> <a name="coolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.coolAccess"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

cool_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#cool_access NetappVolume#cool_access}

---

##### `createFromSnapshotResourceId`<sup>Optional</sup> <a name="createFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.createFromSnapshotResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}.

---

##### `dataProtectionAdvancedRansomware`<sup>Optional</sup> <a name="dataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionAdvancedRansomware"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

data_protection_advanced_ransomware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#data_protection_advanced_ransomware NetappVolume#data_protection_advanced_ransomware}

---

##### `dataProtectionBackupPolicy`<sup>Optional</sup> <a name="dataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionBackupPolicy"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

data_protection_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#data_protection_backup_policy NetappVolume#data_protection_backup_policy}

---

##### `dataProtectionReplication`<sup>Optional</sup> <a name="dataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionReplication"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#data_protection_replication NetappVolume#data_protection_replication}

---

##### `dataProtectionSnapshotPolicy`<sup>Optional</sup> <a name="dataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.dataProtectionSnapshotPolicy"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#data_protection_snapshot_policy NetappVolume#data_protection_snapshot_policy}

---

##### `encryptionKeySource`<sup>Optional</sup> <a name="encryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.encryptionKeySource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}.

---

##### `exportPolicyRule`<sup>Optional</sup> <a name="exportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.exportPolicyRule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#export_policy_rule NetappVolume#export_policy_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosEnabled`<sup>Optional</sup> <a name="kerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.kerberosEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable to allow Kerberos secured volumes.

Requires appropriate export rules as well as the parent `azurerm_netapp_account` having a defined AD connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `keyVaultPrivateEndpointId`<sup>Optional</sup> <a name="keyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.keyVaultPrivateEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}.

---

##### `largeVolumeEnabled`<sup>Optional</sup> <a name="largeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.largeVolumeEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the volume is a large volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#large_volume_enabled NetappVolume#large_volume_enabled}

---

##### `networkFeatures`<sup>Optional</sup> <a name="networkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.networkFeatures"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.protocols"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}.

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.securityStyle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}.

---

##### `smb3ProtocolEncryptionEnabled`<sup>Optional</sup> <a name="smb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.smb3ProtocolEncryptionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#smb3_protocol_encryption_enabled NetappVolume#smb3_protocol_encryption_enabled}

---

##### `smbAccessBasedEnumerationEnabled`<sup>Optional</sup> <a name="smbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.smbAccessBasedEnumerationEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable access based enumeration setting for SMB/Dual Protocol volume.

When enabled, users who do not have permission to access a shared folder or file underneath it, do not see that shared resource displayed in their environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#smb_access_based_enumeration_enabled NetappVolume#smb_access_based_enumeration_enabled}

---

##### `smbContinuousAvailabilityEnabled`<sup>Optional</sup> <a name="smbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.smbContinuousAvailabilityEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Continuous availability option should be used only for SQL and FSLogix workloads.

Using it for any other SMB workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#smb_continuous_availability_enabled NetappVolume#smb_continuous_availability_enabled}

---

##### `smbNonBrowsableEnabled`<sup>Optional</sup> <a name="smbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.smbNonBrowsableEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#smb_non_browsable_enabled NetappVolume#smb_non_browsable_enabled}

---

##### `snapshotDirectoryVisible`<sup>Optional</sup> <a name="snapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.snapshotDirectoryVisible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#tags NetappVolume#tags}.

---

##### `throughputInMibps`<sup>Optional</sup> <a name="throughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.throughputInMibps"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#zone NetappVolume#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putCoolAccess">putCoolAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionAdvancedRansomware">putDataProtectionAdvancedRansomware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy">putDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication">putDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy">putDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule">putExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAcceptGrowCapacityPoolForShortTermCloneSplit">resetAcceptGrowCapacityPoolForShortTermCloneSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled">resetAzureVmwareDataStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCoolAccess">resetCoolAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId">resetCreateFromSnapshotResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionAdvancedRansomware">resetDataProtectionAdvancedRansomware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionBackupPolicy">resetDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication">resetDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy">resetDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetEncryptionKeySource">resetEncryptionKeySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule">resetExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKerberosEnabled">resetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKeyVaultPrivateEndpointId">resetKeyVaultPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetLargeVolumeEnabled">resetLargeVolumeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures">resetNetworkFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle">resetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmb3ProtocolEncryptionEnabled">resetSmb3ProtocolEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbAccessBasedEnumerationEnabled">resetSmbAccessBasedEnumerationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbContinuousAvailabilityEnabled">resetSmbContinuousAvailabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbNonBrowsableEnabled">resetSmbNonBrowsableEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible">resetSnapshotDirectoryVisible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps">resetThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCoolAccess` <a name="putCoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putCoolAccess"></a>

```java
public void putCoolAccess(NetappVolumeCoolAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putCoolAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

---

##### `putDataProtectionAdvancedRansomware` <a name="putDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionAdvancedRansomware"></a>

```java
public void putDataProtectionAdvancedRansomware(NetappVolumeDataProtectionAdvancedRansomware value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionAdvancedRansomware.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

---

##### `putDataProtectionBackupPolicy` <a name="putDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy"></a>

```java
public void putDataProtectionBackupPolicy(NetappVolumeDataProtectionBackupPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---

##### `putDataProtectionReplication` <a name="putDataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication"></a>

```java
public void putDataProtectionReplication(NetappVolumeDataProtectionReplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `putDataProtectionSnapshotPolicy` <a name="putDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy"></a>

```java
public void putDataProtectionSnapshotPolicy(NetappVolumeDataProtectionSnapshotPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `putExportPolicyRule` <a name="putExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule"></a>

```java
public void putExportPolicyRule(IResolvable|java.util.List<NetappVolumeExportPolicyRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putTimeouts"></a>

```java
public void putTimeouts(NetappVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `resetAcceptGrowCapacityPoolForShortTermCloneSplit` <a name="resetAcceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAcceptGrowCapacityPoolForShortTermCloneSplit"></a>

```java
public void resetAcceptGrowCapacityPoolForShortTermCloneSplit()
```

##### `resetAzureVmwareDataStoreEnabled` <a name="resetAzureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled"></a>

```java
public void resetAzureVmwareDataStoreEnabled()
```

##### `resetCoolAccess` <a name="resetCoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCoolAccess"></a>

```java
public void resetCoolAccess()
```

##### `resetCreateFromSnapshotResourceId` <a name="resetCreateFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId"></a>

```java
public void resetCreateFromSnapshotResourceId()
```

##### `resetDataProtectionAdvancedRansomware` <a name="resetDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionAdvancedRansomware"></a>

```java
public void resetDataProtectionAdvancedRansomware()
```

##### `resetDataProtectionBackupPolicy` <a name="resetDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionBackupPolicy"></a>

```java
public void resetDataProtectionBackupPolicy()
```

##### `resetDataProtectionReplication` <a name="resetDataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication"></a>

```java
public void resetDataProtectionReplication()
```

##### `resetDataProtectionSnapshotPolicy` <a name="resetDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy"></a>

```java
public void resetDataProtectionSnapshotPolicy()
```

##### `resetEncryptionKeySource` <a name="resetEncryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetEncryptionKeySource"></a>

```java
public void resetEncryptionKeySource()
```

##### `resetExportPolicyRule` <a name="resetExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule"></a>

```java
public void resetExportPolicyRule()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetId"></a>

```java
public void resetId()
```

##### `resetKerberosEnabled` <a name="resetKerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKerberosEnabled"></a>

```java
public void resetKerberosEnabled()
```

##### `resetKeyVaultPrivateEndpointId` <a name="resetKeyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKeyVaultPrivateEndpointId"></a>

```java
public void resetKeyVaultPrivateEndpointId()
```

##### `resetLargeVolumeEnabled` <a name="resetLargeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetLargeVolumeEnabled"></a>

```java
public void resetLargeVolumeEnabled()
```

##### `resetNetworkFeatures` <a name="resetNetworkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures"></a>

```java
public void resetNetworkFeatures()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetSecurityStyle` <a name="resetSecurityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle"></a>

```java
public void resetSecurityStyle()
```

##### `resetSmb3ProtocolEncryptionEnabled` <a name="resetSmb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmb3ProtocolEncryptionEnabled"></a>

```java
public void resetSmb3ProtocolEncryptionEnabled()
```

##### `resetSmbAccessBasedEnumerationEnabled` <a name="resetSmbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbAccessBasedEnumerationEnabled"></a>

```java
public void resetSmbAccessBasedEnumerationEnabled()
```

##### `resetSmbContinuousAvailabilityEnabled` <a name="resetSmbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbContinuousAvailabilityEnabled"></a>

```java
public void resetSmbContinuousAvailabilityEnabled()
```

##### `resetSmbNonBrowsableEnabled` <a name="resetSmbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbNonBrowsableEnabled"></a>

```java
public void resetSmbNonBrowsableEnabled()
```

##### `resetSnapshotDirectoryVisible` <a name="resetSnapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible"></a>

```java
public void resetSnapshotDirectoryVisible()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTags"></a>

```java
public void resetTags()
```

##### `resetThroughputInMibps` <a name="resetThroughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps"></a>

```java
public void resetThroughputInMibps()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetappVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolume;

NetappVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolume;

NetappVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolume;

NetappVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolume;

NetappVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetappVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetappVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetappVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccess">coolAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference">NetappVolumeCoolAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomware">dataProtectionAdvancedRansomware</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference">NetappVolumeDataProtectionAdvancedRansomwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicy">dataProtectionBackupPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference">NetappVolumeDataProtectionBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication">dataProtectionReplication</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy">dataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule">exportPolicyRule</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.mountTarget">mountTarget</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList">NetappVolumeMountTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplitInput">acceptGrowCapacityPoolForShortTermCloneSplitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput">azureVmwareDataStoreEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccessInput">coolAccessInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput">createFromSnapshotResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomwareInput">dataProtectionAdvancedRansomwareInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicyInput">dataProtectionBackupPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput">dataProtectionReplicationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput">dataProtectionSnapshotPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySourceInput">encryptionKeySourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput">exportPolicyRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabledInput">kerberosEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointIdInput">keyVaultPrivateEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabledInput">largeVolumeEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput">networkFeaturesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput">poolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput">securityStyleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput">serviceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabledInput">smb3ProtocolEncryptionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabledInput">smbAccessBasedEnumerationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabledInput">smbContinuousAvailabilityEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabledInput">smbNonBrowsableEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput">snapshotDirectoryVisibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput">storageQuotaInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput">throughputInMibpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput">volumePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplit">acceptGrowCapacityPoolForShortTermCloneSplit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled">azureVmwareDataStoreEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId">createFromSnapshotResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySource">encryptionKeySource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabled">kerberosEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointId">keyVaultPrivateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabled">largeVolumeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures">networkFeatures</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolName">poolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabled">smb3ProtocolEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabled">smbAccessBasedEnumerationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabled">smbContinuousAvailabilityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabled">smbNonBrowsableEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible">snapshotDirectoryVisible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb">storageQuotaInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps">throughputInMibps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePath">volumePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coolAccess`<sup>Required</sup> <a name="coolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccess"></a>

```java
public NetappVolumeCoolAccessOutputReference getCoolAccess();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference">NetappVolumeCoolAccessOutputReference</a>

---

##### `dataProtectionAdvancedRansomware`<sup>Required</sup> <a name="dataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomware"></a>

```java
public NetappVolumeDataProtectionAdvancedRansomwareOutputReference getDataProtectionAdvancedRansomware();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference">NetappVolumeDataProtectionAdvancedRansomwareOutputReference</a>

---

##### `dataProtectionBackupPolicy`<sup>Required</sup> <a name="dataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicy"></a>

```java
public NetappVolumeDataProtectionBackupPolicyOutputReference getDataProtectionBackupPolicy();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference">NetappVolumeDataProtectionBackupPolicyOutputReference</a>

---

##### `dataProtectionReplication`<sup>Required</sup> <a name="dataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication"></a>

```java
public NetappVolumeDataProtectionReplicationOutputReference getDataProtectionReplication();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a>

---

##### `dataProtectionSnapshotPolicy`<sup>Required</sup> <a name="dataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy"></a>

```java
public NetappVolumeDataProtectionSnapshotPolicyOutputReference getDataProtectionSnapshotPolicy();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a>

---

##### `exportPolicyRule`<sup>Required</sup> <a name="exportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule"></a>

```java
public NetappVolumeExportPolicyRuleList getExportPolicyRule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a>

---

##### `mountTarget`<sup>Required</sup> <a name="mountTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.mountTarget"></a>

```java
public NetappVolumeMountTargetList getMountTarget();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList">NetappVolumeMountTargetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeouts"></a>

```java
public NetappVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `acceptGrowCapacityPoolForShortTermCloneSplitInput`<sup>Optional</sup> <a name="acceptGrowCapacityPoolForShortTermCloneSplitInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplitInput"></a>

```java
public java.lang.String getAcceptGrowCapacityPoolForShortTermCloneSplitInput();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `azureVmwareDataStoreEnabledInput`<sup>Optional</sup> <a name="azureVmwareDataStoreEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAzureVmwareDataStoreEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `coolAccessInput`<sup>Optional</sup> <a name="coolAccessInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccessInput"></a>

```java
public NetappVolumeCoolAccess getCoolAccessInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

---

##### `createFromSnapshotResourceIdInput`<sup>Optional</sup> <a name="createFromSnapshotResourceIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput"></a>

```java
public java.lang.String getCreateFromSnapshotResourceIdInput();
```

- *Type:* java.lang.String

---

##### `dataProtectionAdvancedRansomwareInput`<sup>Optional</sup> <a name="dataProtectionAdvancedRansomwareInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomwareInput"></a>

```java
public NetappVolumeDataProtectionAdvancedRansomware getDataProtectionAdvancedRansomwareInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

---

##### `dataProtectionBackupPolicyInput`<sup>Optional</sup> <a name="dataProtectionBackupPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicyInput"></a>

```java
public NetappVolumeDataProtectionBackupPolicy getDataProtectionBackupPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---

##### `dataProtectionReplicationInput`<sup>Optional</sup> <a name="dataProtectionReplicationInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput"></a>

```java
public NetappVolumeDataProtectionReplication getDataProtectionReplicationInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `dataProtectionSnapshotPolicyInput`<sup>Optional</sup> <a name="dataProtectionSnapshotPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput"></a>

```java
public NetappVolumeDataProtectionSnapshotPolicy getDataProtectionSnapshotPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `encryptionKeySourceInput`<sup>Optional</sup> <a name="encryptionKeySourceInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySourceInput"></a>

```java
public java.lang.String getEncryptionKeySourceInput();
```

- *Type:* java.lang.String

---

##### `exportPolicyRuleInput`<sup>Optional</sup> <a name="exportPolicyRuleInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput"></a>

```java
public IResolvable|java.util.List<NetappVolumeExportPolicyRule> getExportPolicyRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kerberosEnabledInput`<sup>Optional</sup> <a name="kerberosEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getKerberosEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyVaultPrivateEndpointIdInput`<sup>Optional</sup> <a name="keyVaultPrivateEndpointIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointIdInput"></a>

```java
public java.lang.String getKeyVaultPrivateEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `largeVolumeEnabledInput`<sup>Optional</sup> <a name="largeVolumeEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getLargeVolumeEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkFeaturesInput`<sup>Optional</sup> <a name="networkFeaturesInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput"></a>

```java
public java.lang.String getNetworkFeaturesInput();
```

- *Type:* java.lang.String

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput"></a>

```java
public java.lang.String getPoolNameInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `securityStyleInput`<sup>Optional</sup> <a name="securityStyleInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput"></a>

```java
public java.lang.String getSecurityStyleInput();
```

- *Type:* java.lang.String

---

##### `serviceLevelInput`<sup>Optional</sup> <a name="serviceLevelInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput"></a>

```java
public java.lang.String getServiceLevelInput();
```

- *Type:* java.lang.String

---

##### `smb3ProtocolEncryptionEnabledInput`<sup>Optional</sup> <a name="smb3ProtocolEncryptionEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSmb3ProtocolEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `smbAccessBasedEnumerationEnabledInput`<sup>Optional</sup> <a name="smbAccessBasedEnumerationEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSmbAccessBasedEnumerationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `smbContinuousAvailabilityEnabledInput`<sup>Optional</sup> <a name="smbContinuousAvailabilityEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSmbContinuousAvailabilityEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `smbNonBrowsableEnabledInput`<sup>Optional</sup> <a name="smbNonBrowsableEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSmbNonBrowsableEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshotDirectoryVisibleInput`<sup>Optional</sup> <a name="snapshotDirectoryVisibleInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotDirectoryVisibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageQuotaInGbInput`<sup>Optional</sup> <a name="storageQuotaInGbInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput"></a>

```java
public java.lang.Number getStorageQuotaInGbInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputInMibpsInput`<sup>Optional</sup> <a name="throughputInMibpsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput"></a>

```java
public java.lang.Number getThroughputInMibpsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput"></a>

```java
public IResolvable|NetappVolumeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `volumePathInput`<sup>Optional</sup> <a name="volumePathInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput"></a>

```java
public java.lang.String getVolumePathInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `acceptGrowCapacityPoolForShortTermCloneSplit`<sup>Required</sup> <a name="acceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplit"></a>

```java
public java.lang.String getAcceptGrowCapacityPoolForShortTermCloneSplit();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `azureVmwareDataStoreEnabled`<sup>Required</sup> <a name="azureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAzureVmwareDataStoreEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `createFromSnapshotResourceId`<sup>Required</sup> <a name="createFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId"></a>

```java
public java.lang.String getCreateFromSnapshotResourceId();
```

- *Type:* java.lang.String

---

##### `encryptionKeySource`<sup>Required</sup> <a name="encryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySource"></a>

```java
public java.lang.String getEncryptionKeySource();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kerberosEnabled`<sup>Required</sup> <a name="kerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberosEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyVaultPrivateEndpointId`<sup>Required</sup> <a name="keyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointId"></a>

```java
public java.lang.String getKeyVaultPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `largeVolumeEnabled`<sup>Required</sup> <a name="largeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLargeVolumeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkFeatures`<sup>Required</sup> <a name="networkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures"></a>

```java
public java.lang.String getNetworkFeatures();
```

- *Type:* java.lang.String

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel"></a>

```java
public java.lang.String getServiceLevel();
```

- *Type:* java.lang.String

---

##### `smb3ProtocolEncryptionEnabled`<sup>Required</sup> <a name="smb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmb3ProtocolEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `smbAccessBasedEnumerationEnabled`<sup>Required</sup> <a name="smbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmbAccessBasedEnumerationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `smbContinuousAvailabilityEnabled`<sup>Required</sup> <a name="smbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmbContinuousAvailabilityEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `smbNonBrowsableEnabled`<sup>Required</sup> <a name="smbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmbNonBrowsableEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshotDirectoryVisible`<sup>Required</sup> <a name="snapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotDirectoryVisible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageQuotaInGb`<sup>Required</sup> <a name="storageQuotaInGb" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb"></a>

```java
public java.lang.Number getStorageQuotaInGb();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputInMibps`<sup>Required</sup> <a name="throughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps"></a>

```java
public java.lang.Number getThroughputInMibps();
```

- *Type:* java.lang.Number

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePath"></a>

```java
public java.lang.String getVolumePath();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeConfig;

NetappVolumeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .poolName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serviceLevel(java.lang.String)
    .storageQuotaInGb(java.lang.Number)
    .subnetId(java.lang.String)
    .volumePath(java.lang.String)
//  .acceptGrowCapacityPoolForShortTermCloneSplit(java.lang.String)
//  .azureVmwareDataStoreEnabled(java.lang.Boolean|IResolvable)
//  .coolAccess(NetappVolumeCoolAccess)
//  .createFromSnapshotResourceId(java.lang.String)
//  .dataProtectionAdvancedRansomware(NetappVolumeDataProtectionAdvancedRansomware)
//  .dataProtectionBackupPolicy(NetappVolumeDataProtectionBackupPolicy)
//  .dataProtectionReplication(NetappVolumeDataProtectionReplication)
//  .dataProtectionSnapshotPolicy(NetappVolumeDataProtectionSnapshotPolicy)
//  .encryptionKeySource(java.lang.String)
//  .exportPolicyRule(IResolvable|java.util.List<NetappVolumeExportPolicyRule>)
//  .id(java.lang.String)
//  .kerberosEnabled(java.lang.Boolean|IResolvable)
//  .keyVaultPrivateEndpointId(java.lang.String)
//  .largeVolumeEnabled(java.lang.Boolean|IResolvable)
//  .networkFeatures(java.lang.String)
//  .protocols(java.util.List<java.lang.String>)
//  .securityStyle(java.lang.String)
//  .smb3ProtocolEncryptionEnabled(java.lang.Boolean|IResolvable)
//  .smbAccessBasedEnumerationEnabled(java.lang.Boolean|IResolvable)
//  .smbContinuousAvailabilityEnabled(java.lang.Boolean|IResolvable)
//  .smbNonBrowsableEnabled(java.lang.Boolean|IResolvable)
//  .snapshotDirectoryVisible(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .throughputInMibps(java.lang.Number)
//  .timeouts(NetappVolumeTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#location NetappVolume#location}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#name NetappVolume#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb">storageQuotaInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath">volumePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.acceptGrowCapacityPoolForShortTermCloneSplit">acceptGrowCapacityPoolForShortTermCloneSplit</a></code> | <code>java.lang.String</code> | While auto splitting the short term clone volume, if the parent pool does not have enough space to accommodate the volume after split, it will be automatically resized, which will lead to increased billing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled">azureVmwareDataStoreEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.coolAccess">coolAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | cool_access block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId">createFromSnapshotResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionAdvancedRansomware">dataProtectionAdvancedRansomware</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | data_protection_advanced_ransomware block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionBackupPolicy">dataProtectionBackupPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | data_protection_backup_policy block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication">dataProtectionReplication</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy">dataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.encryptionKeySource">encryptionKeySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule">exportPolicyRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>></code> | export_policy_rule block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.kerberosEnabled">kerberosEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable to allow Kerberos secured volumes. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.keyVaultPrivateEndpointId">keyVaultPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.largeVolumeEnabled">largeVolumeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the volume is a large volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures">networkFeatures</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smb3ProtocolEncryptionEnabled">smb3ProtocolEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbAccessBasedEnumerationEnabled">smbAccessBasedEnumerationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable access based enumeration setting for SMB/Dual Protocol volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbContinuousAvailabilityEnabled">smbContinuousAvailabilityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Continuous availability option should be used only for SQL and FSLogix workloads. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbNonBrowsableEnabled">smbNonBrowsableEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible">snapshotDirectoryVisible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#tags NetappVolume#tags}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps">throughputInMibps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#zone NetappVolume#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#location NetappVolume#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#name NetappVolume#name}.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}.

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel"></a>

```java
public java.lang.String getServiceLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}.

---

##### `storageQuotaInGb`<sup>Required</sup> <a name="storageQuotaInGb" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb"></a>

```java
public java.lang.Number getStorageQuotaInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}.

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath"></a>

```java
public java.lang.String getVolumePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}.

---

##### `acceptGrowCapacityPoolForShortTermCloneSplit`<sup>Optional</sup> <a name="acceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.acceptGrowCapacityPoolForShortTermCloneSplit"></a>

```java
public java.lang.String getAcceptGrowCapacityPoolForShortTermCloneSplit();
```

- *Type:* java.lang.String

While auto splitting the short term clone volume, if the parent pool does not have enough space to accommodate the volume after split, it will be automatically resized, which will lead to increased billing.

To accept capacity pool size auto grow and create a short term clone volume, set the property as accepted. Can only be used in conjunction with `create_from_snapshot_resource_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#accept_grow_capacity_pool_for_short_term_clone_split NetappVolume#accept_grow_capacity_pool_for_short_term_clone_split}

---

##### `azureVmwareDataStoreEnabled`<sup>Optional</sup> <a name="azureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAzureVmwareDataStoreEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}.

---

##### `coolAccess`<sup>Optional</sup> <a name="coolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.coolAccess"></a>

```java
public NetappVolumeCoolAccess getCoolAccess();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

cool_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#cool_access NetappVolume#cool_access}

---

##### `createFromSnapshotResourceId`<sup>Optional</sup> <a name="createFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId"></a>

```java
public java.lang.String getCreateFromSnapshotResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}.

---

##### `dataProtectionAdvancedRansomware`<sup>Optional</sup> <a name="dataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionAdvancedRansomware"></a>

```java
public NetappVolumeDataProtectionAdvancedRansomware getDataProtectionAdvancedRansomware();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

data_protection_advanced_ransomware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#data_protection_advanced_ransomware NetappVolume#data_protection_advanced_ransomware}

---

##### `dataProtectionBackupPolicy`<sup>Optional</sup> <a name="dataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionBackupPolicy"></a>

```java
public NetappVolumeDataProtectionBackupPolicy getDataProtectionBackupPolicy();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

data_protection_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#data_protection_backup_policy NetappVolume#data_protection_backup_policy}

---

##### `dataProtectionReplication`<sup>Optional</sup> <a name="dataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication"></a>

```java
public NetappVolumeDataProtectionReplication getDataProtectionReplication();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#data_protection_replication NetappVolume#data_protection_replication}

---

##### `dataProtectionSnapshotPolicy`<sup>Optional</sup> <a name="dataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy"></a>

```java
public NetappVolumeDataProtectionSnapshotPolicy getDataProtectionSnapshotPolicy();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#data_protection_snapshot_policy NetappVolume#data_protection_snapshot_policy}

---

##### `encryptionKeySource`<sup>Optional</sup> <a name="encryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.encryptionKeySource"></a>

```java
public java.lang.String getEncryptionKeySource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}.

---

##### `exportPolicyRule`<sup>Optional</sup> <a name="exportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule"></a>

```java
public IResolvable|java.util.List<NetappVolumeExportPolicyRule> getExportPolicyRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#export_policy_rule NetappVolume#export_policy_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosEnabled`<sup>Optional</sup> <a name="kerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.kerberosEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberosEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable to allow Kerberos secured volumes.

Requires appropriate export rules as well as the parent `azurerm_netapp_account` having a defined AD connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `keyVaultPrivateEndpointId`<sup>Optional</sup> <a name="keyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.keyVaultPrivateEndpointId"></a>

```java
public java.lang.String getKeyVaultPrivateEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}.

---

##### `largeVolumeEnabled`<sup>Optional</sup> <a name="largeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.largeVolumeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLargeVolumeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the volume is a large volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#large_volume_enabled NetappVolume#large_volume_enabled}

---

##### `networkFeatures`<sup>Optional</sup> <a name="networkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures"></a>

```java
public java.lang.String getNetworkFeatures();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}.

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}.

---

##### `smb3ProtocolEncryptionEnabled`<sup>Optional</sup> <a name="smb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smb3ProtocolEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmb3ProtocolEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#smb3_protocol_encryption_enabled NetappVolume#smb3_protocol_encryption_enabled}

---

##### `smbAccessBasedEnumerationEnabled`<sup>Optional</sup> <a name="smbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbAccessBasedEnumerationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmbAccessBasedEnumerationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable access based enumeration setting for SMB/Dual Protocol volume.

When enabled, users who do not have permission to access a shared folder or file underneath it, do not see that shared resource displayed in their environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#smb_access_based_enumeration_enabled NetappVolume#smb_access_based_enumeration_enabled}

---

##### `smbContinuousAvailabilityEnabled`<sup>Optional</sup> <a name="smbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbContinuousAvailabilityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmbContinuousAvailabilityEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Continuous availability option should be used only for SQL and FSLogix workloads.

Using it for any other SMB workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#smb_continuous_availability_enabled NetappVolume#smb_continuous_availability_enabled}

---

##### `smbNonBrowsableEnabled`<sup>Optional</sup> <a name="smbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbNonBrowsableEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSmbNonBrowsableEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#smb_non_browsable_enabled NetappVolume#smb_non_browsable_enabled}

---

##### `snapshotDirectoryVisible`<sup>Optional</sup> <a name="snapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotDirectoryVisible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#tags NetappVolume#tags}.

---

##### `throughputInMibps`<sup>Optional</sup> <a name="throughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps"></a>

```java
public java.lang.Number getThroughputInMibps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```java
public NetappVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#zone NetappVolume#zone}.

---

### NetappVolumeCoolAccess <a name="NetappVolumeCoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeCoolAccess;

NetappVolumeCoolAccess.builder()
    .coolnessPeriodInDays(java.lang.Number)
    .retrievalPolicy(java.lang.String)
    .tieringPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.coolnessPeriodInDays">coolnessPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#coolness_period_in_days NetappVolume#coolness_period_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.retrievalPolicy">retrievalPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#retrieval_policy NetappVolume#retrieval_policy}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.tieringPolicy">tieringPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}. |

---

##### `coolnessPeriodInDays`<sup>Required</sup> <a name="coolnessPeriodInDays" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.coolnessPeriodInDays"></a>

```java
public java.lang.Number getCoolnessPeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#coolness_period_in_days NetappVolume#coolness_period_in_days}.

---

##### `retrievalPolicy`<sup>Required</sup> <a name="retrievalPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.retrievalPolicy"></a>

```java
public java.lang.String getRetrievalPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#retrieval_policy NetappVolume#retrieval_policy}.

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.tieringPolicy"></a>

```java
public java.lang.String getTieringPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}.

---

### NetappVolumeDataProtectionAdvancedRansomware <a name="NetappVolumeDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeDataProtectionAdvancedRansomware;

NetappVolumeDataProtectionAdvancedRansomware.builder()
    .protectionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware.property.protectionEnabled">protectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable or disable the Advanced Ransomware Protection feature. |

---

##### `protectionEnabled`<sup>Required</sup> <a name="protectionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware.property.protectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable or disable the Advanced Ransomware Protection feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#protection_enabled NetappVolume#protection_enabled}

---

### NetappVolumeDataProtectionBackupPolicy <a name="NetappVolumeDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeDataProtectionBackupPolicy;

NetappVolumeDataProtectionBackupPolicy.builder()
    .backupPolicyId(java.lang.String)
    .backupVaultId(java.lang.String)
//  .policyEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | The ID of the backup policy to associate with this volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | The ID of the backup vault to associate with this volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.policyEnabled">policyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to false, the backup policy will not be enabled on this volume, thus disabling scheduled backups. |

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

The ID of the backup policy to associate with this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#backup_policy_id NetappVolume#backup_policy_id}

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

The ID of the backup vault to associate with this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#backup_vault_id NetappVolume#backup_vault_id}

---

##### `policyEnabled`<sup>Optional</sup> <a name="policyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.policyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPolicyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to false, the backup policy will not be enabled on this volume, thus disabling scheduled backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#policy_enabled NetappVolume#policy_enabled}

---

### NetappVolumeDataProtectionReplication <a name="NetappVolumeDataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeDataProtectionReplication;

NetappVolumeDataProtectionReplication.builder()
    .remoteVolumeLocation(java.lang.String)
    .remoteVolumeResourceId(java.lang.String)
    .replicationFrequency(java.lang.String)
//  .endpointType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation">remoteVolumeLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId">remoteVolumeResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency">replicationFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}. |

---

##### `remoteVolumeLocation`<sup>Required</sup> <a name="remoteVolumeLocation" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation"></a>

```java
public java.lang.String getRemoteVolumeLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}.

---

##### `remoteVolumeResourceId`<sup>Required</sup> <a name="remoteVolumeResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId"></a>

```java
public java.lang.String getRemoteVolumeResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}.

---

##### `replicationFrequency`<sup>Required</sup> <a name="replicationFrequency" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency"></a>

```java
public java.lang.String getReplicationFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}.

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}.

---

### NetappVolumeDataProtectionSnapshotPolicy <a name="NetappVolumeDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeDataProtectionSnapshotPolicy;

NetappVolumeDataProtectionSnapshotPolicy.builder()
    .snapshotPolicyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId">snapshotPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}. |

---

##### `snapshotPolicyId`<sup>Required</sup> <a name="snapshotPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId"></a>

```java
public java.lang.String getSnapshotPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}.

---

### NetappVolumeExportPolicyRule <a name="NetappVolumeExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeExportPolicyRule;

NetappVolumeExportPolicyRule.builder()
    .allowedClients(java.util.List<java.lang.String>)
    .ruleIndex(java.lang.Number)
//  .kerberos5IReadOnlyEnabled(java.lang.Boolean|IResolvable)
//  .kerberos5IReadWriteEnabled(java.lang.Boolean|IResolvable)
//  .kerberos5PReadOnlyEnabled(java.lang.Boolean|IResolvable)
//  .kerberos5PReadWriteEnabled(java.lang.Boolean|IResolvable)
//  .kerberos5ReadOnlyEnabled(java.lang.Boolean|IResolvable)
//  .kerberos5ReadWriteEnabled(java.lang.Boolean|IResolvable)
//  .protocol(java.util.List<java.lang.String>)
//  .rootAccessEnabled(java.lang.Boolean|IResolvable)
//  .unixReadOnly(java.lang.Boolean|IResolvable)
//  .unixReadWrite(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex">ruleIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadOnlyEnabled">kerberos5IReadOnlyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5i_read_only_enabled NetappVolume#kerberos_5i_read_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadWriteEnabled">kerberos5IReadWriteEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5i_read_write_enabled NetappVolume#kerberos_5i_read_write_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadOnlyEnabled">kerberos5PReadOnlyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5p_read_only_enabled NetappVolume#kerberos_5p_read_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadWriteEnabled">kerberos5PReadWriteEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5p_read_write_enabled NetappVolume#kerberos_5p_read_write_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadOnlyEnabled">kerberos5ReadOnlyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5_read_only_enabled NetappVolume#kerberos_5_read_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadWriteEnabled">kerberos5ReadWriteEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5_read_write_enabled NetappVolume#kerberos_5_read_write_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocol">protocol</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#protocol NetappVolume#protocol}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled">rootAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly">unixReadOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite">unixReadWrite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}. |

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}.

---

##### `ruleIndex`<sup>Required</sup> <a name="ruleIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex"></a>

```java
public java.lang.Number getRuleIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}.

---

##### `kerberos5IReadOnlyEnabled`<sup>Optional</sup> <a name="kerberos5IReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadOnlyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5IReadOnlyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5i_read_only_enabled NetappVolume#kerberos_5i_read_only_enabled}.

---

##### `kerberos5IReadWriteEnabled`<sup>Optional</sup> <a name="kerberos5IReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadWriteEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5IReadWriteEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5i_read_write_enabled NetappVolume#kerberos_5i_read_write_enabled}.

---

##### `kerberos5PReadOnlyEnabled`<sup>Optional</sup> <a name="kerberos5PReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadOnlyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5PReadOnlyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5p_read_only_enabled NetappVolume#kerberos_5p_read_only_enabled}.

---

##### `kerberos5PReadWriteEnabled`<sup>Optional</sup> <a name="kerberos5PReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadWriteEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5PReadWriteEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5p_read_write_enabled NetappVolume#kerberos_5p_read_write_enabled}.

---

##### `kerberos5ReadOnlyEnabled`<sup>Optional</sup> <a name="kerberos5ReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadOnlyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5ReadOnlyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5_read_only_enabled NetappVolume#kerberos_5_read_only_enabled}.

---

##### `kerberos5ReadWriteEnabled`<sup>Optional</sup> <a name="kerberos5ReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadWriteEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5ReadWriteEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#kerberos_5_read_write_enabled NetappVolume#kerberos_5_read_write_enabled}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocol"></a>

```java
public java.util.List<java.lang.String> getProtocol();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#protocol NetappVolume#protocol}.

---

##### `rootAccessEnabled`<sup>Optional</sup> <a name="rootAccessEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRootAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}.

---

##### `unixReadOnly`<sup>Optional</sup> <a name="unixReadOnly" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly"></a>

```java
public java.lang.Boolean|IResolvable getUnixReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}.

---

##### `unixReadWrite`<sup>Optional</sup> <a name="unixReadWrite" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite"></a>

```java
public java.lang.Boolean|IResolvable getUnixReadWrite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}.

---

### NetappVolumeMountTarget <a name="NetappVolumeMountTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTarget.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeMountTarget;

NetappVolumeMountTarget.builder()
    .build();
```


### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeTimeouts;

NetappVolumeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#read NetappVolume#read}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#read NetappVolume#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeCoolAccessOutputReference <a name="NetappVolumeCoolAccessOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeCoolAccessOutputReference;

new NetappVolumeCoolAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDaysInput">coolnessPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicyInput">retrievalPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicyInput">tieringPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDays">coolnessPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicy">retrievalPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicy">tieringPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coolnessPeriodInDaysInput`<sup>Optional</sup> <a name="coolnessPeriodInDaysInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDaysInput"></a>

```java
public java.lang.Number getCoolnessPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `retrievalPolicyInput`<sup>Optional</sup> <a name="retrievalPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicyInput"></a>

```java
public java.lang.String getRetrievalPolicyInput();
```

- *Type:* java.lang.String

---

##### `tieringPolicyInput`<sup>Optional</sup> <a name="tieringPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicyInput"></a>

```java
public java.lang.String getTieringPolicyInput();
```

- *Type:* java.lang.String

---

##### `coolnessPeriodInDays`<sup>Required</sup> <a name="coolnessPeriodInDays" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDays"></a>

```java
public java.lang.Number getCoolnessPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `retrievalPolicy`<sup>Required</sup> <a name="retrievalPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicy"></a>

```java
public java.lang.String getRetrievalPolicy();
```

- *Type:* java.lang.String

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicy"></a>

```java
public java.lang.String getTieringPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.internalValue"></a>

```java
public NetappVolumeCoolAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

---


### NetappVolumeDataProtectionAdvancedRansomwareOutputReference <a name="NetappVolumeDataProtectionAdvancedRansomwareOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference;

new NetappVolumeDataProtectionAdvancedRansomwareOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabledInput">protectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabled">protectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protectionEnabledInput`<sup>Optional</sup> <a name="protectionEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `protectionEnabled`<sup>Required</sup> <a name="protectionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.internalValue"></a>

```java
public NetappVolumeDataProtectionAdvancedRansomware getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

---


### NetappVolumeDataProtectionBackupPolicyOutputReference <a name="NetappVolumeDataProtectionBackupPolicyOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeDataProtectionBackupPolicyOutputReference;

new NetappVolumeDataProtectionBackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resetPolicyEnabled">resetPolicyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyEnabled` <a name="resetPolicyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resetPolicyEnabled"></a>

```java
public void resetPolicyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultIdInput">backupVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabledInput">policyEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled">policyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyIdInput"></a>

```java
public java.lang.String getBackupPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `backupVaultIdInput`<sup>Optional</sup> <a name="backupVaultIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultIdInput"></a>

```java
public java.lang.String getBackupVaultIdInput();
```

- *Type:* java.lang.String

---

##### `policyEnabledInput`<sup>Optional</sup> <a name="policyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPolicyEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

---

##### `policyEnabled`<sup>Required</sup> <a name="policyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPolicyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue"></a>

```java
public NetappVolumeDataProtectionBackupPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---


### NetappVolumeDataProtectionReplicationOutputReference <a name="NetappVolumeDataProtectionReplicationOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeDataProtectionReplicationOutputReference;

new NetappVolumeDataProtectionReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType">resetEndpointType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType"></a>

```java
public void resetEndpointType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput">remoteVolumeLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput">remoteVolumeResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput">replicationFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">remoteVolumeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">remoteVolumeResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">replicationFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `remoteVolumeLocationInput`<sup>Optional</sup> <a name="remoteVolumeLocationInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput"></a>

```java
public java.lang.String getRemoteVolumeLocationInput();
```

- *Type:* java.lang.String

---

##### `remoteVolumeResourceIdInput`<sup>Optional</sup> <a name="remoteVolumeResourceIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput"></a>

```java
public java.lang.String getRemoteVolumeResourceIdInput();
```

- *Type:* java.lang.String

---

##### `replicationFrequencyInput`<sup>Optional</sup> <a name="replicationFrequencyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput"></a>

```java
public java.lang.String getReplicationFrequencyInput();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `remoteVolumeLocation`<sup>Required</sup> <a name="remoteVolumeLocation" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```java
public java.lang.String getRemoteVolumeLocation();
```

- *Type:* java.lang.String

---

##### `remoteVolumeResourceId`<sup>Required</sup> <a name="remoteVolumeResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```java
public java.lang.String getRemoteVolumeResourceId();
```

- *Type:* java.lang.String

---

##### `replicationFrequency`<sup>Required</sup> <a name="replicationFrequency" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```java
public java.lang.String getReplicationFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```java
public NetappVolumeDataProtectionReplication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---


### NetappVolumeDataProtectionSnapshotPolicyOutputReference <a name="NetappVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeDataProtectionSnapshotPolicyOutputReference;

new NetappVolumeDataProtectionSnapshotPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput">snapshotPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">snapshotPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snapshotPolicyIdInput`<sup>Optional</sup> <a name="snapshotPolicyIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput"></a>

```java
public java.lang.String getSnapshotPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotPolicyId`<sup>Required</sup> <a name="snapshotPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```java
public java.lang.String getSnapshotPolicyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```java
public NetappVolumeDataProtectionSnapshotPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---


### NetappVolumeExportPolicyRuleList <a name="NetappVolumeExportPolicyRuleList" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeExportPolicyRuleList;

new NetappVolumeExportPolicyRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get"></a>

```java
public NetappVolumeExportPolicyRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetappVolumeExportPolicyRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>>

---


### NetappVolumeExportPolicyRuleOutputReference <a name="NetappVolumeExportPolicyRuleOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeExportPolicyRuleOutputReference;

new NetappVolumeExportPolicyRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadOnlyEnabled">resetKerberos5IReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadWriteEnabled">resetKerberos5IReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadOnlyEnabled">resetKerberos5PReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadWriteEnabled">resetKerberos5PReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadOnlyEnabled">resetKerberos5ReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadWriteEnabled">resetKerberos5ReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled">resetRootAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly">resetUnixReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite">resetUnixReadWrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKerberos5IReadOnlyEnabled` <a name="resetKerberos5IReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadOnlyEnabled"></a>

```java
public void resetKerberos5IReadOnlyEnabled()
```

##### `resetKerberos5IReadWriteEnabled` <a name="resetKerberos5IReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadWriteEnabled"></a>

```java
public void resetKerberos5IReadWriteEnabled()
```

##### `resetKerberos5PReadOnlyEnabled` <a name="resetKerberos5PReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadOnlyEnabled"></a>

```java
public void resetKerberos5PReadOnlyEnabled()
```

##### `resetKerberos5PReadWriteEnabled` <a name="resetKerberos5PReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadWriteEnabled"></a>

```java
public void resetKerberos5PReadWriteEnabled()
```

##### `resetKerberos5ReadOnlyEnabled` <a name="resetKerberos5ReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadOnlyEnabled"></a>

```java
public void resetKerberos5ReadOnlyEnabled()
```

##### `resetKerberos5ReadWriteEnabled` <a name="resetKerberos5ReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadWriteEnabled"></a>

```java
public void resetKerberos5ReadWriteEnabled()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetRootAccessEnabled` <a name="resetRootAccessEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled"></a>

```java
public void resetRootAccessEnabled()
```

##### `resetUnixReadOnly` <a name="resetUnixReadOnly" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly"></a>

```java
public void resetUnixReadOnly()
```

##### `resetUnixReadWrite` <a name="resetUnixReadWrite" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite"></a>

```java
public void resetUnixReadWrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabledInput">kerberos5IReadOnlyEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabledInput">kerberos5IReadWriteEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabledInput">kerberos5PReadOnlyEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabledInput">kerberos5PReadWriteEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabledInput">kerberos5ReadOnlyEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabledInput">kerberos5ReadWriteEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput">rootAccessEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput">ruleIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput">unixReadOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput">unixReadWriteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients">allowedClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabled">kerberos5IReadOnlyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabled">kerberos5IReadWriteEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabled">kerberos5PReadOnlyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabled">kerberos5PReadWriteEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabled">kerberos5ReadOnlyEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabled">kerberos5ReadWriteEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocol">protocol</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">rootAccessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex">ruleIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly">unixReadOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite">unixReadWrite</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kerberos5IReadOnlyEnabledInput`<sup>Optional</sup> <a name="kerberos5IReadOnlyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5IReadOnlyEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5IReadWriteEnabledInput`<sup>Optional</sup> <a name="kerberos5IReadWriteEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5IReadWriteEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5PReadOnlyEnabledInput`<sup>Optional</sup> <a name="kerberos5PReadOnlyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5PReadOnlyEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5PReadWriteEnabledInput`<sup>Optional</sup> <a name="kerberos5PReadWriteEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5PReadWriteEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5ReadOnlyEnabledInput`<sup>Optional</sup> <a name="kerberos5ReadOnlyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5ReadOnlyEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5ReadWriteEnabledInput`<sup>Optional</sup> <a name="kerberos5ReadWriteEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5ReadWriteEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolInput"></a>

```java
public java.util.List<java.lang.String> getProtocolInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rootAccessEnabledInput`<sup>Optional</sup> <a name="rootAccessEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRootAccessEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ruleIndexInput`<sup>Optional</sup> <a name="ruleIndexInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput"></a>

```java
public java.lang.Number getRuleIndexInput();
```

- *Type:* java.lang.Number

---

##### `unixReadOnlyInput`<sup>Optional</sup> <a name="unixReadOnlyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getUnixReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `unixReadWriteInput`<sup>Optional</sup> <a name="unixReadWriteInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput"></a>

```java
public java.lang.Boolean|IResolvable getUnixReadWriteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```java
public java.util.List<java.lang.String> getAllowedClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kerberos5IReadOnlyEnabled`<sup>Required</sup> <a name="kerberos5IReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5IReadOnlyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5IReadWriteEnabled`<sup>Required</sup> <a name="kerberos5IReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5IReadWriteEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5PReadOnlyEnabled`<sup>Required</sup> <a name="kerberos5PReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5PReadOnlyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5PReadWriteEnabled`<sup>Required</sup> <a name="kerberos5PReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5PReadWriteEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5ReadOnlyEnabled`<sup>Required</sup> <a name="kerberos5ReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5ReadOnlyEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kerberos5ReadWriteEnabled`<sup>Required</sup> <a name="kerberos5ReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabled"></a>

```java
public java.lang.Boolean|IResolvable getKerberos5ReadWriteEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocol"></a>

```java
public java.util.List<java.lang.String> getProtocol();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rootAccessEnabled`<sup>Required</sup> <a name="rootAccessEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRootAccessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ruleIndex`<sup>Required</sup> <a name="ruleIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```java
public java.lang.Number getRuleIndex();
```

- *Type:* java.lang.Number

---

##### `unixReadOnly`<sup>Required</sup> <a name="unixReadOnly" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```java
public java.lang.Boolean|IResolvable getUnixReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `unixReadWrite`<sup>Required</sup> <a name="unixReadWrite" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```java
public java.lang.Boolean|IResolvable getUnixReadWrite();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|NetappVolumeExportPolicyRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>

---


### NetappVolumeMountTargetList <a name="NetappVolumeMountTargetList" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeMountTargetList;

new NetappVolumeMountTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.get"></a>

```java
public NetappVolumeMountTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetappVolumeMountTargetOutputReference <a name="NetappVolumeMountTargetOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeMountTargetOutputReference;

new NetappVolumeMountTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.smbServerFqdn">smbServerFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTarget">NetappVolumeMountTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `smbServerFqdn`<sup>Required</sup> <a name="smbServerFqdn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.smbServerFqdn"></a>

```java
public java.lang.String getSmbServerFqdn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.internalValue"></a>

```java
public NetappVolumeMountTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTarget">NetappVolumeMountTarget</a>

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume.NetappVolumeTimeoutsOutputReference;

new NetappVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetappVolumeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---



