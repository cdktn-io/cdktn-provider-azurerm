# `sharedImageVersion` Submodule <a name="`sharedImageVersion` Submodule" id="@cdktn/provider-azurerm.sharedImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImageVersion <a name="SharedImageVersion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version azurerm_shared_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersion;

SharedImageVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .galleryName(java.lang.String)
    .imageName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .targetRegion(IResolvable|java.util.List<SharedImageVersionTargetRegion>)
//  .blobUri(java.lang.String)
//  .deletionOfReplicatedLocationsEnabled(java.lang.Boolean|IResolvable)
//  .endOfLifeDate(java.lang.String)
//  .excludeFromLatest(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .managedImageId(java.lang.String)
//  .osDiskSnapshotId(java.lang.String)
//  .replicationMode(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SharedImageVersionTimeouts)
//  .uefi(SharedImageVersionUefi)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.galleryName">galleryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#location SharedImageVersion#location}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.targetRegion">targetRegion</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>></code> | target_region block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.blobUri">blobUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.deletionOfReplicatedLocationsEnabled">deletionOfReplicatedLocationsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.endOfLifeDate">endOfLifeDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.excludeFromLatest">excludeFromLatest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#id SharedImageVersion#id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.managedImageId">managedImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.osDiskSnapshotId">osDiskSnapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.replicationMode">replicationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.uefi">uefi</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | uefi block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.galleryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.imageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#location SharedImageVersion#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}.

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.targetRegion"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>>

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#target_region SharedImageVersion#target_region}

---

##### `blobUri`<sup>Optional</sup> <a name="blobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.blobUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}.

---

##### `deletionOfReplicatedLocationsEnabled`<sup>Optional</sup> <a name="deletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.deletionOfReplicatedLocationsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}.

---

##### `endOfLifeDate`<sup>Optional</sup> <a name="endOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.endOfLifeDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}.

---

##### `excludeFromLatest`<sup>Optional</sup> <a name="excludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.excludeFromLatest"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#id SharedImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedImageId`<sup>Optional</sup> <a name="managedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.managedImageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}.

---

##### `osDiskSnapshotId`<sup>Optional</sup> <a name="osDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.osDiskSnapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}.

---

##### `replicationMode`<sup>Optional</sup> <a name="replicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.replicationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#timeouts SharedImageVersion#timeouts}

---

##### `uefi`<sup>Optional</sup> <a name="uefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.uefi"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

uefi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#uefi SharedImageVersion#uefi}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion">putTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putUefi">putUefi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri">resetBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled">resetDeletionOfReplicatedLocationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate">resetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest">resetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId">resetManagedImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId">resetOsDiskSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode">resetReplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetUefi">resetUefi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetRegion` <a name="putTargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion"></a>

```java
public void putTargetRegion(IResolvable|java.util.List<SharedImageVersionTargetRegion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts"></a>

```java
public void putTimeouts(SharedImageVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---

##### `putUefi` <a name="putUefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putUefi"></a>

```java
public void putUefi(SharedImageVersionUefi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putUefi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

---

##### `resetBlobUri` <a name="resetBlobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri"></a>

```java
public void resetBlobUri()
```

##### `resetDeletionOfReplicatedLocationsEnabled` <a name="resetDeletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled"></a>

```java
public void resetDeletionOfReplicatedLocationsEnabled()
```

##### `resetEndOfLifeDate` <a name="resetEndOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate"></a>

```java
public void resetEndOfLifeDate()
```

##### `resetExcludeFromLatest` <a name="resetExcludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest"></a>

```java
public void resetExcludeFromLatest()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId"></a>

```java
public void resetId()
```

##### `resetManagedImageId` <a name="resetManagedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId"></a>

```java
public void resetManagedImageId()
```

##### `resetOsDiskSnapshotId` <a name="resetOsDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId"></a>

```java
public void resetOsDiskSnapshotId()
```

##### `resetReplicationMode` <a name="resetReplicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode"></a>

```java
public void resetReplicationMode()
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId"></a>

```java
public void resetStorageAccountId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUefi` <a name="resetUefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetUefi"></a>

```java
public void resetUefi()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SharedImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersion;

SharedImageVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersion;

SharedImageVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersion;

SharedImageVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersion;

SharedImageVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SharedImageVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SharedImageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SharedImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SharedImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SharedImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion">targetRegion</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefi">uefi</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference">SharedImageVersionUefiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput">blobUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput">deletionOfReplicatedLocationsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput">endOfLifeDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput">excludeFromLatestInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput">galleryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput">managedImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput">osDiskSnapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput">replicationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput">targetRegionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefiInput">uefiInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri">blobUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled">deletionOfReplicatedLocationsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate">endOfLifeDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest">excludeFromLatest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName">galleryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId">managedImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId">osDiskSnapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode">replicationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion"></a>

```java
public SharedImageVersionTargetRegionList getTargetRegion();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts"></a>

```java
public SharedImageVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a>

---

##### `uefi`<sup>Required</sup> <a name="uefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefi"></a>

```java
public SharedImageVersionUefiOutputReference getUefi();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference">SharedImageVersionUefiOutputReference</a>

---

##### `blobUriInput`<sup>Optional</sup> <a name="blobUriInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput"></a>

```java
public java.lang.String getBlobUriInput();
```

- *Type:* java.lang.String

---

##### `deletionOfReplicatedLocationsEnabledInput`<sup>Optional</sup> <a name="deletionOfReplicatedLocationsEnabledInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionOfReplicatedLocationsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endOfLifeDateInput`<sup>Optional</sup> <a name="endOfLifeDateInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput"></a>

```java
public java.lang.String getEndOfLifeDateInput();
```

- *Type:* java.lang.String

---

##### `excludeFromLatestInput`<sup>Optional</sup> <a name="excludeFromLatestInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeFromLatestInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `galleryNameInput`<sup>Optional</sup> <a name="galleryNameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput"></a>

```java
public java.lang.String getGalleryNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedImageIdInput`<sup>Optional</sup> <a name="managedImageIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput"></a>

```java
public java.lang.String getManagedImageIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osDiskSnapshotIdInput`<sup>Optional</sup> <a name="osDiskSnapshotIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput"></a>

```java
public java.lang.String getOsDiskSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `replicationModeInput`<sup>Optional</sup> <a name="replicationModeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput"></a>

```java
public java.lang.String getReplicationModeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetRegionInput`<sup>Optional</sup> <a name="targetRegionInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput"></a>

```java
public IResolvable|java.util.List<SharedImageVersionTargetRegion> getTargetRegionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput"></a>

```java
public IResolvable|SharedImageVersionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---

##### `uefiInput`<sup>Optional</sup> <a name="uefiInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefiInput"></a>

```java
public SharedImageVersionUefi getUefiInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

---

##### `blobUri`<sup>Required</sup> <a name="blobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri"></a>

```java
public java.lang.String getBlobUri();
```

- *Type:* java.lang.String

---

##### `deletionOfReplicatedLocationsEnabled`<sup>Required</sup> <a name="deletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionOfReplicatedLocationsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endOfLifeDate`<sup>Required</sup> <a name="endOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate"></a>

```java
public java.lang.String getEndOfLifeDate();
```

- *Type:* java.lang.String

---

##### `excludeFromLatest`<sup>Required</sup> <a name="excludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest"></a>

```java
public java.lang.Boolean|IResolvable getExcludeFromLatest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName"></a>

```java
public java.lang.String getGalleryName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedImageId`<sup>Required</sup> <a name="managedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId"></a>

```java
public java.lang.String getManagedImageId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osDiskSnapshotId`<sup>Required</sup> <a name="osDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId"></a>

```java
public java.lang.String getOsDiskSnapshotId();
```

- *Type:* java.lang.String

---

##### `replicationMode`<sup>Required</sup> <a name="replicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode"></a>

```java
public java.lang.String getReplicationMode();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageVersionConfig <a name="SharedImageVersionConfig" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionConfig;

SharedImageVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .galleryName(java.lang.String)
    .imageName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .targetRegion(IResolvable|java.util.List<SharedImageVersionTargetRegion>)
//  .blobUri(java.lang.String)
//  .deletionOfReplicatedLocationsEnabled(java.lang.Boolean|IResolvable)
//  .endOfLifeDate(java.lang.String)
//  .excludeFromLatest(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .managedImageId(java.lang.String)
//  .osDiskSnapshotId(java.lang.String)
//  .replicationMode(java.lang.String)
//  .storageAccountId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SharedImageVersionTimeouts)
//  .uefi(SharedImageVersionUefi)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName">galleryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#location SharedImageVersion#location}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion">targetRegion</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>></code> | target_region block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri">blobUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled">deletionOfReplicatedLocationsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate">endOfLifeDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest">excludeFromLatest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#id SharedImageVersion#id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId">managedImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId">osDiskSnapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode">replicationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.uefi">uefi</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | uefi block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName"></a>

```java
public java.lang.String getGalleryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#location SharedImageVersion#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}.

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion"></a>

```java
public IResolvable|java.util.List<SharedImageVersionTargetRegion> getTargetRegion();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>>

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#target_region SharedImageVersion#target_region}

---

##### `blobUri`<sup>Optional</sup> <a name="blobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri"></a>

```java
public java.lang.String getBlobUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}.

---

##### `deletionOfReplicatedLocationsEnabled`<sup>Optional</sup> <a name="deletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionOfReplicatedLocationsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}.

---

##### `endOfLifeDate`<sup>Optional</sup> <a name="endOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate"></a>

```java
public java.lang.String getEndOfLifeDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}.

---

##### `excludeFromLatest`<sup>Optional</sup> <a name="excludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest"></a>

```java
public java.lang.Boolean|IResolvable getExcludeFromLatest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#id SharedImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedImageId`<sup>Optional</sup> <a name="managedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId"></a>

```java
public java.lang.String getManagedImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}.

---

##### `osDiskSnapshotId`<sup>Optional</sup> <a name="osDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId"></a>

```java
public java.lang.String getOsDiskSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}.

---

##### `replicationMode`<sup>Optional</sup> <a name="replicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode"></a>

```java
public java.lang.String getReplicationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts"></a>

```java
public SharedImageVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#timeouts SharedImageVersion#timeouts}

---

##### `uefi`<sup>Optional</sup> <a name="uefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.uefi"></a>

```java
public SharedImageVersionUefi getUefi();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

uefi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#uefi SharedImageVersion#uefi}

---

### SharedImageVersionTargetRegion <a name="SharedImageVersionTargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionTargetRegion;

SharedImageVersionTargetRegion.builder()
    .name(java.lang.String)
    .regionalReplicaCount(java.lang.Number)
//  .diskEncryptionSetId(java.lang.String)
//  .excludeFromLatestEnabled(java.lang.Boolean|IResolvable)
//  .storageAccountType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount">regionalReplicaCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled">excludeFromLatestEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `regionalReplicaCount`<sup>Required</sup> <a name="regionalReplicaCount" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount"></a>

```java
public java.lang.Number getRegionalReplicaCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}.

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}.

---

##### `excludeFromLatestEnabled`<sup>Optional</sup> <a name="excludeFromLatestEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled"></a>

```java
public java.lang.Boolean|IResolvable getExcludeFromLatestEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}.

---

### SharedImageVersionTimeouts <a name="SharedImageVersionTimeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionTimeouts;

SharedImageVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#create SharedImageVersion#create}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#read SharedImageVersion#read}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#update SharedImageVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#create SharedImageVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#read SharedImageVersion#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#update SharedImageVersion#update}.

---

### SharedImageVersionUefi <a name="SharedImageVersionUefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefi;

SharedImageVersionUefi.builder()
    .signatureTemplateNames(java.util.List<java.lang.String>)
//  .additionalSignatures(SharedImageVersionUefiAdditionalSignatures)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.signatureTemplateNames">signatureTemplateNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#signature_template_names SharedImageVersion#signature_template_names}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.additionalSignatures">additionalSignatures</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a></code> | additional_signatures block. |

---

##### `signatureTemplateNames`<sup>Required</sup> <a name="signatureTemplateNames" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.signatureTemplateNames"></a>

```java
public java.util.List<java.lang.String> getSignatureTemplateNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#signature_template_names SharedImageVersion#signature_template_names}.

---

##### `additionalSignatures`<sup>Optional</sup> <a name="additionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.additionalSignatures"></a>

```java
public SharedImageVersionUefiAdditionalSignatures getAdditionalSignatures();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

additional_signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#additional_signatures SharedImageVersion#additional_signatures}

---

### SharedImageVersionUefiAdditionalSignatures <a name="SharedImageVersionUefiAdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignatures;

SharedImageVersionUefiAdditionalSignatures.builder()
//  .db(IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDb>)
//  .dbx(IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDbx>)
//  .kek(IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesKek>)
//  .pk(SharedImageVersionUefiAdditionalSignaturesPk)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.db">db</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>></code> | db block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.dbx">dbx</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>></code> | dbx block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.kek">kek</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>></code> | kek block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.pk">pk</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a></code> | pk block. |

---

##### `db`<sup>Optional</sup> <a name="db" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.db"></a>

```java
public IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDb> getDb();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>>

db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#db SharedImageVersion#db}

---

##### `dbx`<sup>Optional</sup> <a name="dbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.dbx"></a>

```java
public IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDbx> getDbx();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>>

dbx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#dbx SharedImageVersion#dbx}

---

##### `kek`<sup>Optional</sup> <a name="kek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.kek"></a>

```java
public IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesKek> getKek();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>>

kek block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#kek SharedImageVersion#kek}

---

##### `pk`<sup>Optional</sup> <a name="pk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.pk"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesPk getPk();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

pk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#pk SharedImageVersion#pk}

---

### SharedImageVersionUefiAdditionalSignaturesDb <a name="SharedImageVersionUefiAdditionalSignaturesDb" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesDb;

SharedImageVersionUefiAdditionalSignaturesDb.builder()
    .type(java.lang.String)
    .valuesBase64(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.valuesBase64">valuesBase64</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `valuesBase64`<sup>Required</sup> <a name="valuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.valuesBase64"></a>

```java
public java.util.List<java.lang.String> getValuesBase64();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

### SharedImageVersionUefiAdditionalSignaturesDbx <a name="SharedImageVersionUefiAdditionalSignaturesDbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesDbx;

SharedImageVersionUefiAdditionalSignaturesDbx.builder()
    .type(java.lang.String)
    .valuesBase64(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.valuesBase64">valuesBase64</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `valuesBase64`<sup>Required</sup> <a name="valuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.valuesBase64"></a>

```java
public java.util.List<java.lang.String> getValuesBase64();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

### SharedImageVersionUefiAdditionalSignaturesKek <a name="SharedImageVersionUefiAdditionalSignaturesKek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesKek;

SharedImageVersionUefiAdditionalSignaturesKek.builder()
    .type(java.lang.String)
    .valuesBase64(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.valuesBase64">valuesBase64</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `valuesBase64`<sup>Required</sup> <a name="valuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.valuesBase64"></a>

```java
public java.util.List<java.lang.String> getValuesBase64();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

### SharedImageVersionUefiAdditionalSignaturesPk <a name="SharedImageVersionUefiAdditionalSignaturesPk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesPk;

SharedImageVersionUefiAdditionalSignaturesPk.builder()
    .type(java.lang.String)
    .valuesBase64(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.valuesBase64">valuesBase64</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `valuesBase64`<sup>Required</sup> <a name="valuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.valuesBase64"></a>

```java
public java.util.List<java.lang.String> getValuesBase64();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageVersionTargetRegionList <a name="SharedImageVersionTargetRegionList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionTargetRegionList;

new SharedImageVersionTargetRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get"></a>

```java
public SharedImageVersionTargetRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SharedImageVersionTargetRegion> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>>

---


### SharedImageVersionTargetRegionOutputReference <a name="SharedImageVersionTargetRegionOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionTargetRegionOutputReference;

new SharedImageVersionTargetRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled">resetExcludeFromLatestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId"></a>

```java
public void resetDiskEncryptionSetId()
```

##### `resetExcludeFromLatestEnabled` <a name="resetExcludeFromLatestEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled"></a>

```java
public void resetExcludeFromLatestEnabled()
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```java
public void resetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput">excludeFromLatestEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput">regionalReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled">excludeFromLatestEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount">regionalReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput"></a>

```java
public java.lang.String getDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `excludeFromLatestEnabledInput`<sup>Optional</sup> <a name="excludeFromLatestEnabledInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeFromLatestEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionalReplicaCountInput`<sup>Optional</sup> <a name="regionalReplicaCountInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```java
public java.lang.Number getRegionalReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `excludeFromLatestEnabled`<sup>Required</sup> <a name="excludeFromLatestEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled"></a>

```java
public java.lang.Boolean|IResolvable getExcludeFromLatestEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regionalReplicaCount`<sup>Required</sup> <a name="regionalReplicaCount" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```java
public java.lang.Number getRegionalReplicaCount();
```

- *Type:* java.lang.Number

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue"></a>

```java
public IResolvable|SharedImageVersionTargetRegion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion">SharedImageVersionTargetRegion</a>

---


### SharedImageVersionTimeoutsOutputReference <a name="SharedImageVersionTimeoutsOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionTimeoutsOutputReference;

new SharedImageVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SharedImageVersionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---


### SharedImageVersionUefiAdditionalSignaturesDbList <a name="SharedImageVersionUefiAdditionalSignaturesDbList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesDbList;

new SharedImageVersionUefiAdditionalSignaturesDbList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.get"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesDbOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDb> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>>

---


### SharedImageVersionUefiAdditionalSignaturesDbOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesDbOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesDbOutputReference;

new SharedImageVersionUefiAdditionalSignaturesDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64Input">valuesBase64Input</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64">valuesBase64</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesBase64Input`<sup>Optional</sup> <a name="valuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64Input"></a>

```java
public java.util.List<java.lang.String> getValuesBase64Input();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `valuesBase64`<sup>Required</sup> <a name="valuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64"></a>

```java
public java.util.List<java.lang.String> getValuesBase64();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.internalValue"></a>

```java
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDb getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>

---


### SharedImageVersionUefiAdditionalSignaturesDbxList <a name="SharedImageVersionUefiAdditionalSignaturesDbxList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesDbxList;

new SharedImageVersionUefiAdditionalSignaturesDbxList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.get"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesDbxOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDbx> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>>

---


### SharedImageVersionUefiAdditionalSignaturesDbxOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesDbxOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference;

new SharedImageVersionUefiAdditionalSignaturesDbxOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64Input">valuesBase64Input</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64">valuesBase64</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesBase64Input`<sup>Optional</sup> <a name="valuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64Input"></a>

```java
public java.util.List<java.lang.String> getValuesBase64Input();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `valuesBase64`<sup>Required</sup> <a name="valuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64"></a>

```java
public java.util.List<java.lang.String> getValuesBase64();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.internalValue"></a>

```java
public IResolvable|SharedImageVersionUefiAdditionalSignaturesDbx getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>

---


### SharedImageVersionUefiAdditionalSignaturesKekList <a name="SharedImageVersionUefiAdditionalSignaturesKekList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesKekList;

new SharedImageVersionUefiAdditionalSignaturesKekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.get"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesKekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesKek> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>>

---


### SharedImageVersionUefiAdditionalSignaturesKekOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesKekOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesKekOutputReference;

new SharedImageVersionUefiAdditionalSignaturesKekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64Input">valuesBase64Input</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64">valuesBase64</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesBase64Input`<sup>Optional</sup> <a name="valuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64Input"></a>

```java
public java.util.List<java.lang.String> getValuesBase64Input();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `valuesBase64`<sup>Required</sup> <a name="valuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64"></a>

```java
public java.util.List<java.lang.String> getValuesBase64();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.internalValue"></a>

```java
public IResolvable|SharedImageVersionUefiAdditionalSignaturesKek getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>

---


### SharedImageVersionUefiAdditionalSignaturesOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesOutputReference;

new SharedImageVersionUefiAdditionalSignaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDb">putDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDbx">putDbx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putKek">putKek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putPk">putPk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDb">resetDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDbx">resetDbx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetKek">resetKek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetPk">resetPk</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDb` <a name="putDb" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDb"></a>

```java
public void putDb(IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDb> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDb.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>>

---

##### `putDbx` <a name="putDbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDbx"></a>

```java
public void putDbx(IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDbx> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDbx.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>>

---

##### `putKek` <a name="putKek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putKek"></a>

```java
public void putKek(IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesKek> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putKek.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>>

---

##### `putPk` <a name="putPk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putPk"></a>

```java
public void putPk(SharedImageVersionUefiAdditionalSignaturesPk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putPk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

---

##### `resetDb` <a name="resetDb" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDb"></a>

```java
public void resetDb()
```

##### `resetDbx` <a name="resetDbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDbx"></a>

```java
public void resetDbx()
```

##### `resetKek` <a name="resetKek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetKek"></a>

```java
public void resetKek()
```

##### `resetPk` <a name="resetPk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetPk"></a>

```java
public void resetPk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.db">db</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList">SharedImageVersionUefiAdditionalSignaturesDbList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbx">dbx</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList">SharedImageVersionUefiAdditionalSignaturesDbxList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kek">kek</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList">SharedImageVersionUefiAdditionalSignaturesKekList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pk">pk</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference">SharedImageVersionUefiAdditionalSignaturesPkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbInput">dbInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbxInput">dbxInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kekInput">kekInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pkInput">pkInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.db"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesDbList getDb();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList">SharedImageVersionUefiAdditionalSignaturesDbList</a>

---

##### `dbx`<sup>Required</sup> <a name="dbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbx"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesDbxList getDbx();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList">SharedImageVersionUefiAdditionalSignaturesDbxList</a>

---

##### `kek`<sup>Required</sup> <a name="kek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kek"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesKekList getKek();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList">SharedImageVersionUefiAdditionalSignaturesKekList</a>

---

##### `pk`<sup>Required</sup> <a name="pk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pk"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesPkOutputReference getPk();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference">SharedImageVersionUefiAdditionalSignaturesPkOutputReference</a>

---

##### `dbInput`<sup>Optional</sup> <a name="dbInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbInput"></a>

```java
public IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDb> getDbInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb">SharedImageVersionUefiAdditionalSignaturesDb</a>>

---

##### `dbxInput`<sup>Optional</sup> <a name="dbxInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbxInput"></a>

```java
public IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesDbx> getDbxInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx">SharedImageVersionUefiAdditionalSignaturesDbx</a>>

---

##### `kekInput`<sup>Optional</sup> <a name="kekInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kekInput"></a>

```java
public IResolvable|java.util.List<SharedImageVersionUefiAdditionalSignaturesKek> getKekInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek">SharedImageVersionUefiAdditionalSignaturesKek</a>>

---

##### `pkInput`<sup>Optional</sup> <a name="pkInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pkInput"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesPk getPkInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.internalValue"></a>

```java
public SharedImageVersionUefiAdditionalSignatures getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

---


### SharedImageVersionUefiAdditionalSignaturesPkOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesPkOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiAdditionalSignaturesPkOutputReference;

new SharedImageVersionUefiAdditionalSignaturesPkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64Input">valuesBase64Input</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64">valuesBase64</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesBase64Input`<sup>Optional</sup> <a name="valuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64Input"></a>

```java
public java.util.List<java.lang.String> getValuesBase64Input();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `valuesBase64`<sup>Required</sup> <a name="valuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64"></a>

```java
public java.util.List<java.lang.String> getValuesBase64();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.internalValue"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesPk getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

---


### SharedImageVersionUefiOutputReference <a name="SharedImageVersionUefiOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.shared_image_version.SharedImageVersionUefiOutputReference;

new SharedImageVersionUefiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.putAdditionalSignatures">putAdditionalSignatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resetAdditionalSignatures">resetAdditionalSignatures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalSignatures` <a name="putAdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.putAdditionalSignatures"></a>

```java
public void putAdditionalSignatures(SharedImageVersionUefiAdditionalSignatures value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.putAdditionalSignatures.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

---

##### `resetAdditionalSignatures` <a name="resetAdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resetAdditionalSignatures"></a>

```java
public void resetAdditionalSignatures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignatures">additionalSignatures</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference">SharedImageVersionUefiAdditionalSignaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignaturesInput">additionalSignaturesInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNamesInput">signatureTemplateNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNames">signatureTemplateNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalSignatures`<sup>Required</sup> <a name="additionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignatures"></a>

```java
public SharedImageVersionUefiAdditionalSignaturesOutputReference getAdditionalSignatures();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference">SharedImageVersionUefiAdditionalSignaturesOutputReference</a>

---

##### `additionalSignaturesInput`<sup>Optional</sup> <a name="additionalSignaturesInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignaturesInput"></a>

```java
public SharedImageVersionUefiAdditionalSignatures getAdditionalSignaturesInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

---

##### `signatureTemplateNamesInput`<sup>Optional</sup> <a name="signatureTemplateNamesInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNamesInput"></a>

```java
public java.util.List<java.lang.String> getSignatureTemplateNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signatureTemplateNames`<sup>Required</sup> <a name="signatureTemplateNames" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNames"></a>

```java
public java.util.List<java.lang.String> getSignatureTemplateNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.internalValue"></a>

```java
public SharedImageVersionUefi getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

---



