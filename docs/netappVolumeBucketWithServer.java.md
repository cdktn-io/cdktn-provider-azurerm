# `netappVolumeBucketWithServer` Submodule <a name="`netappVolumeBucketWithServer` Submodule" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeBucketWithServer <a name="NetappVolumeBucketWithServer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server azurerm_netapp_volume_bucket_with_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServer;

NetappVolumeBucketWithServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .server(NetappVolumeBucketWithServerServer)
    .volumeId(java.lang.String)
//  .fileSystemCifsUsername(java.lang.String)
//  .fileSystemNfsUser(NetappVolumeBucketWithServerFileSystemNfsUser)
//  .id(java.lang.String)
//  .keyVault(NetappVolumeBucketWithServerKeyVault)
//  .path(java.lang.String)
//  .permissions(java.lang.String)
//  .timeouts(NetappVolumeBucketWithServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.server">server</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | server block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.fileSystemCifsUsername">fileSystemCifsUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.fileSystemNfsUser">fileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | file_system_nfs_user block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.keyVault">keyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.permissions">permissions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.server"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#server NetappVolumeBucketWithServer#server}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.volumeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}.

---

##### `fileSystemCifsUsername`<sup>Optional</sup> <a name="fileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.fileSystemCifsUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}.

---

##### `fileSystemNfsUser`<sup>Optional</sup> <a name="fileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.fileSystemNfsUser"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

file_system_nfs_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#file_system_nfs_user NetappVolumeBucketWithServer#file_system_nfs_user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVault`<sup>Optional</sup> <a name="keyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.keyVault"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#key_vault NetappVolumeBucketWithServer#key_vault}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.permissions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#timeouts NetappVolumeBucketWithServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser">putFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault">putKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer">putServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemCifsUsername">resetFileSystemCifsUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemNfsUser">resetFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetKeyVault">resetKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFileSystemNfsUser` <a name="putFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser"></a>

```java
public void putFileSystemNfsUser(NetappVolumeBucketWithServerFileSystemNfsUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

---

##### `putKeyVault` <a name="putKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault"></a>

```java
public void putKeyVault(NetappVolumeBucketWithServerKeyVault value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

---

##### `putServer` <a name="putServer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer"></a>

```java
public void putServer(NetappVolumeBucketWithServerServer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts"></a>

```java
public void putTimeouts(NetappVolumeBucketWithServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

---

##### `resetFileSystemCifsUsername` <a name="resetFileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemCifsUsername"></a>

```java
public void resetFileSystemCifsUsername()
```

##### `resetFileSystemNfsUser` <a name="resetFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemNfsUser"></a>

```java
public void resetFileSystemNfsUser()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetId"></a>

```java
public void resetId()
```

##### `resetKeyVault` <a name="resetKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetKeyVault"></a>

```java
public void resetKeyVault()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPath"></a>

```java
public void resetPath()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServer;

NetappVolumeBucketWithServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServer;

NetappVolumeBucketWithServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServer;

NetappVolumeBucketWithServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServer;

NetappVolumeBucketWithServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetappVolumeBucketWithServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetappVolumeBucketWithServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetappVolumeBucketWithServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetappVolumeBucketWithServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUser">fileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference">NetappVolumeBucketWithServerFileSystemNfsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVault">keyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference">NetappVolumeBucketWithServerKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.server">server</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference">NetappVolumeBucketWithServerServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateCommonName">serverCertificateCommonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateExpiryDate">serverCertificateExpiryDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverIpAddress">serverIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference">NetappVolumeBucketWithServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsernameInput">fileSystemCifsUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUserInput">fileSystemNfsUserInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVaultInput">keyVaultInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissionsInput">permissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverInput">serverInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsername">fileSystemCifsUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fileSystemNfsUser`<sup>Required</sup> <a name="fileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUser"></a>

```java
public NetappVolumeBucketWithServerFileSystemNfsUserOutputReference getFileSystemNfsUser();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference">NetappVolumeBucketWithServerFileSystemNfsUserOutputReference</a>

---

##### `keyVault`<sup>Required</sup> <a name="keyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVault"></a>

```java
public NetappVolumeBucketWithServerKeyVaultOutputReference getKeyVault();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference">NetappVolumeBucketWithServerKeyVaultOutputReference</a>

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.server"></a>

```java
public NetappVolumeBucketWithServerServerOutputReference getServer();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference">NetappVolumeBucketWithServerServerOutputReference</a>

---

##### `serverCertificateCommonName`<sup>Required</sup> <a name="serverCertificateCommonName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateCommonName"></a>

```java
public java.lang.String getServerCertificateCommonName();
```

- *Type:* java.lang.String

---

##### `serverCertificateExpiryDate`<sup>Required</sup> <a name="serverCertificateExpiryDate" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateExpiryDate"></a>

```java
public java.lang.String getServerCertificateExpiryDate();
```

- *Type:* java.lang.String

---

##### `serverIpAddress`<sup>Required</sup> <a name="serverIpAddress" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverIpAddress"></a>

```java
public java.lang.String getServerIpAddress();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeouts"></a>

```java
public NetappVolumeBucketWithServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference">NetappVolumeBucketWithServerTimeoutsOutputReference</a>

---

##### `fileSystemCifsUsernameInput`<sup>Optional</sup> <a name="fileSystemCifsUsernameInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsernameInput"></a>

```java
public java.lang.String getFileSystemCifsUsernameInput();
```

- *Type:* java.lang.String

---

##### `fileSystemNfsUserInput`<sup>Optional</sup> <a name="fileSystemNfsUserInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUserInput"></a>

```java
public NetappVolumeBucketWithServerFileSystemNfsUser getFileSystemNfsUserInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultInput`<sup>Optional</sup> <a name="keyVaultInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVaultInput"></a>

```java
public NetappVolumeBucketWithServerKeyVault getKeyVaultInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissionsInput"></a>

```java
public java.lang.String getPermissionsInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverInput"></a>

```java
public NetappVolumeBucketWithServerServer getServerInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeoutsInput"></a>

```java
public IResolvable|NetappVolumeBucketWithServerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `fileSystemCifsUsername`<sup>Required</sup> <a name="fileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsername"></a>

```java
public java.lang.String getFileSystemCifsUsername();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeBucketWithServerConfig <a name="NetappVolumeBucketWithServerConfig" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServerConfig;

NetappVolumeBucketWithServerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .server(NetappVolumeBucketWithServerServer)
    .volumeId(java.lang.String)
//  .fileSystemCifsUsername(java.lang.String)
//  .fileSystemNfsUser(NetappVolumeBucketWithServerFileSystemNfsUser)
//  .id(java.lang.String)
//  .keyVault(NetappVolumeBucketWithServerKeyVault)
//  .path(java.lang.String)
//  .permissions(java.lang.String)
//  .timeouts(NetappVolumeBucketWithServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.server">server</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | server block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemCifsUsername">fileSystemCifsUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemNfsUser">fileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | file_system_nfs_user block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.keyVault">keyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.permissions">permissions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.server"></a>

```java
public NetappVolumeBucketWithServerServer getServer();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#server NetappVolumeBucketWithServer#server}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}.

---

##### `fileSystemCifsUsername`<sup>Optional</sup> <a name="fileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemCifsUsername"></a>

```java
public java.lang.String getFileSystemCifsUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}.

---

##### `fileSystemNfsUser`<sup>Optional</sup> <a name="fileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemNfsUser"></a>

```java
public NetappVolumeBucketWithServerFileSystemNfsUser getFileSystemNfsUser();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

file_system_nfs_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#file_system_nfs_user NetappVolumeBucketWithServer#file_system_nfs_user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVault`<sup>Optional</sup> <a name="keyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.keyVault"></a>

```java
public NetappVolumeBucketWithServerKeyVault getKeyVault();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#key_vault NetappVolumeBucketWithServer#key_vault}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.timeouts"></a>

```java
public NetappVolumeBucketWithServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#timeouts NetappVolumeBucketWithServer#timeouts}

---

### NetappVolumeBucketWithServerFileSystemNfsUser <a name="NetappVolumeBucketWithServerFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServerFileSystemNfsUser;

NetappVolumeBucketWithServerFileSystemNfsUser.builder()
    .groupId(java.lang.Number)
    .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#group_id NetappVolumeBucketWithServer#group_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.userId">userId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#user_id NetappVolumeBucketWithServer#user_id}. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#group_id NetappVolumeBucketWithServer#group_id}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#user_id NetappVolumeBucketWithServer#user_id}.

---

### NetappVolumeBucketWithServerKeyVault <a name="NetappVolumeBucketWithServerKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServerKeyVault;

NetappVolumeBucketWithServerKeyVault.builder()
    .certificateKeyVaultUri(java.lang.String)
    .certificateName(java.lang.String)
    .credentialsKeyVaultUri(java.lang.String)
    .credentialsSecretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateKeyVaultUri">certificateKeyVaultUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#certificate_key_vault_uri NetappVolumeBucketWithServer#certificate_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#certificate_name NetappVolumeBucketWithServer#certificate_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsKeyVaultUri">credentialsKeyVaultUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#credentials_key_vault_uri NetappVolumeBucketWithServer#credentials_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsSecretName">credentialsSecretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#credentials_secret_name NetappVolumeBucketWithServer#credentials_secret_name}. |

---

##### `certificateKeyVaultUri`<sup>Required</sup> <a name="certificateKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateKeyVaultUri"></a>

```java
public java.lang.String getCertificateKeyVaultUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#certificate_key_vault_uri NetappVolumeBucketWithServer#certificate_key_vault_uri}.

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#certificate_name NetappVolumeBucketWithServer#certificate_name}.

---

##### `credentialsKeyVaultUri`<sup>Required</sup> <a name="credentialsKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsKeyVaultUri"></a>

```java
public java.lang.String getCredentialsKeyVaultUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#credentials_key_vault_uri NetappVolumeBucketWithServer#credentials_key_vault_uri}.

---

##### `credentialsSecretName`<sup>Required</sup> <a name="credentialsSecretName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsSecretName"></a>

```java
public java.lang.String getCredentialsSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#credentials_secret_name NetappVolumeBucketWithServer#credentials_secret_name}.

---

### NetappVolumeBucketWithServerServer <a name="NetappVolumeBucketWithServerServer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServerServer;

NetappVolumeBucketWithServerServer.builder()
    .fqdn(java.lang.String)
//  .certificatePem(java.lang.String)
//  .onCertificateConflictAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#fqdn NetappVolumeBucketWithServer#fqdn}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.certificatePem">certificatePem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#certificate_pem NetappVolumeBucketWithServer#certificate_pem}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.onCertificateConflictAction">onCertificateConflictAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#on_certificate_conflict_action NetappVolumeBucketWithServer#on_certificate_conflict_action}. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#fqdn NetappVolumeBucketWithServer#fqdn}.

---

##### `certificatePem`<sup>Optional</sup> <a name="certificatePem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.certificatePem"></a>

```java
public java.lang.String getCertificatePem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#certificate_pem NetappVolumeBucketWithServer#certificate_pem}.

---

##### `onCertificateConflictAction`<sup>Optional</sup> <a name="onCertificateConflictAction" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.onCertificateConflictAction"></a>

```java
public java.lang.String getOnCertificateConflictAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#on_certificate_conflict_action NetappVolumeBucketWithServer#on_certificate_conflict_action}.

---

### NetappVolumeBucketWithServerTimeouts <a name="NetappVolumeBucketWithServerTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServerTimeouts;

NetappVolumeBucketWithServerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#create NetappVolumeBucketWithServer#create}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#delete NetappVolumeBucketWithServer#delete}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#read NetappVolumeBucketWithServer#read}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#update NetappVolumeBucketWithServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#create NetappVolumeBucketWithServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#delete NetappVolumeBucketWithServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#read NetappVolumeBucketWithServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket_with_server#update NetappVolumeBucketWithServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeBucketWithServerFileSystemNfsUserOutputReference <a name="NetappVolumeBucketWithServerFileSystemNfsUserOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference;

new NetappVolumeBucketWithServerFileSystemNfsUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue"></a>

```java
public NetappVolumeBucketWithServerFileSystemNfsUser getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

---


### NetappVolumeBucketWithServerKeyVaultOutputReference <a name="NetappVolumeBucketWithServerKeyVaultOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServerKeyVaultOutputReference;

new NetappVolumeBucketWithServerKeyVaultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUriInput">certificateKeyVaultUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUriInput">credentialsKeyVaultUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretNameInput">credentialsSecretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri">certificateKeyVaultUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri">credentialsKeyVaultUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName">credentialsSecretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateKeyVaultUriInput`<sup>Optional</sup> <a name="certificateKeyVaultUriInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUriInput"></a>

```java
public java.lang.String getCertificateKeyVaultUriInput();
```

- *Type:* java.lang.String

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `credentialsKeyVaultUriInput`<sup>Optional</sup> <a name="credentialsKeyVaultUriInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUriInput"></a>

```java
public java.lang.String getCredentialsKeyVaultUriInput();
```

- *Type:* java.lang.String

---

##### `credentialsSecretNameInput`<sup>Optional</sup> <a name="credentialsSecretNameInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretNameInput"></a>

```java
public java.lang.String getCredentialsSecretNameInput();
```

- *Type:* java.lang.String

---

##### `certificateKeyVaultUri`<sup>Required</sup> <a name="certificateKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri"></a>

```java
public java.lang.String getCertificateKeyVaultUri();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `credentialsKeyVaultUri`<sup>Required</sup> <a name="credentialsKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri"></a>

```java
public java.lang.String getCredentialsKeyVaultUri();
```

- *Type:* java.lang.String

---

##### `credentialsSecretName`<sup>Required</sup> <a name="credentialsSecretName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName"></a>

```java
public java.lang.String getCredentialsSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue"></a>

```java
public NetappVolumeBucketWithServerKeyVault getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

---


### NetappVolumeBucketWithServerServerOutputReference <a name="NetappVolumeBucketWithServerServerOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServerServerOutputReference;

new NetappVolumeBucketWithServerServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetCertificatePem">resetCertificatePem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetOnCertificateConflictAction">resetOnCertificateConflictAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificatePem` <a name="resetCertificatePem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetCertificatePem"></a>

```java
public void resetCertificatePem()
```

##### `resetOnCertificateConflictAction` <a name="resetOnCertificateConflictAction" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetOnCertificateConflictAction"></a>

```java
public void resetOnCertificateConflictAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePemInput">certificatePemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictActionInput">onCertificateConflictActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePem">certificatePem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction">onCertificateConflictAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificatePemInput`<sup>Optional</sup> <a name="certificatePemInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePemInput"></a>

```java
public java.lang.String getCertificatePemInput();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `onCertificateConflictActionInput`<sup>Optional</sup> <a name="onCertificateConflictActionInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictActionInput"></a>

```java
public java.lang.String getOnCertificateConflictActionInput();
```

- *Type:* java.lang.String

---

##### `certificatePem`<sup>Required</sup> <a name="certificatePem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePem"></a>

```java
public java.lang.String getCertificatePem();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `onCertificateConflictAction`<sup>Required</sup> <a name="onCertificateConflictAction" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction"></a>

```java
public java.lang.String getOnCertificateConflictAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.internalValue"></a>

```java
public NetappVolumeBucketWithServerServer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

---


### NetappVolumeBucketWithServerTimeoutsOutputReference <a name="NetappVolumeBucketWithServerTimeoutsOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.netapp_volume_bucket_with_server.NetappVolumeBucketWithServerTimeoutsOutputReference;

new NetappVolumeBucketWithServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetappVolumeBucketWithServerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

---



