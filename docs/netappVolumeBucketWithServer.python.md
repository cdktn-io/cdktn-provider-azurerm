# `netappVolumeBucketWithServer` Submodule <a name="`netappVolumeBucketWithServer` Submodule" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeBucketWithServer <a name="NetappVolumeBucketWithServer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server azurerm_netapp_volume_bucket_with_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  server: NetappVolumeBucketWithServerServer,
  volume_id: str,
  file_system_cifs_username: str = None,
  file_system_nfs_user: NetappVolumeBucketWithServerFileSystemNfsUser = None,
  id: str = None,
  key_vault: NetappVolumeBucketWithServerKeyVault = None,
  path: str = None,
  permissions: str = None,
  timeouts: NetappVolumeBucketWithServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.server">server</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | server block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.fileSystemCifsUsername">file_system_cifs_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.fileSystemNfsUser">file_system_nfs_user</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | file_system_nfs_user block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.keyVault">key_vault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.permissions">permissions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.server"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#server NetappVolumeBucketWithServer#server}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.volumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}.

---

##### `file_system_cifs_username`<sup>Optional</sup> <a name="file_system_cifs_username" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.fileSystemCifsUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}.

---

##### `file_system_nfs_user`<sup>Optional</sup> <a name="file_system_nfs_user" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.fileSystemNfsUser"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

file_system_nfs_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#file_system_nfs_user NetappVolumeBucketWithServer#file_system_nfs_user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault`<sup>Optional</sup> <a name="key_vault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.keyVault"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#key_vault NetappVolumeBucketWithServer#key_vault}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.permissions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#timeouts NetappVolumeBucketWithServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser">put_file_system_nfs_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault">put_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer">put_server</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemCifsUsername">reset_file_system_cifs_username</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemNfsUser">reset_file_system_nfs_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetKeyVault">reset_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_file_system_nfs_user` <a name="put_file_system_nfs_user" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser"></a>

```python
def put_file_system_nfs_user(
  group_id: typing.Union[int, float],
  user_id: typing.Union[int, float]
) -> None
```

###### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser.parameter.groupId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#group_id NetappVolumeBucketWithServer#group_id}.

---

###### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser.parameter.userId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#user_id NetappVolumeBucketWithServer#user_id}.

---

##### `put_key_vault` <a name="put_key_vault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault"></a>

```python
def put_key_vault(
  certificate_key_vault_uri: str,
  certificate_name: str,
  credentials_key_vault_uri: str,
  credentials_secret_name: str
) -> None
```

###### `certificate_key_vault_uri`<sup>Required</sup> <a name="certificate_key_vault_uri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault.parameter.certificateKeyVaultUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_key_vault_uri NetappVolumeBucketWithServer#certificate_key_vault_uri}.

---

###### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault.parameter.certificateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_name NetappVolumeBucketWithServer#certificate_name}.

---

###### `credentials_key_vault_uri`<sup>Required</sup> <a name="credentials_key_vault_uri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault.parameter.credentialsKeyVaultUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_key_vault_uri NetappVolumeBucketWithServer#credentials_key_vault_uri}.

---

###### `credentials_secret_name`<sup>Required</sup> <a name="credentials_secret_name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault.parameter.credentialsSecretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_secret_name NetappVolumeBucketWithServer#credentials_secret_name}.

---

##### `put_server` <a name="put_server" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer"></a>

```python
def put_server(
  fqdn: str,
  certificate_pem: str = None,
  on_certificate_conflict_action: str = None
) -> None
```

###### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer.parameter.fqdn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#fqdn NetappVolumeBucketWithServer#fqdn}.

---

###### `certificate_pem`<sup>Optional</sup> <a name="certificate_pem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer.parameter.certificatePem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_pem NetappVolumeBucketWithServer#certificate_pem}.

---

###### `on_certificate_conflict_action`<sup>Optional</sup> <a name="on_certificate_conflict_action" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer.parameter.onCertificateConflictAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#on_certificate_conflict_action NetappVolumeBucketWithServer#on_certificate_conflict_action}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#create NetappVolumeBucketWithServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#delete NetappVolumeBucketWithServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#read NetappVolumeBucketWithServer#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#update NetappVolumeBucketWithServer#update}.

---

##### `reset_file_system_cifs_username` <a name="reset_file_system_cifs_username" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemCifsUsername"></a>

```python
def reset_file_system_cifs_username() -> None
```

##### `reset_file_system_nfs_user` <a name="reset_file_system_nfs_user" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemNfsUser"></a>

```python
def reset_file_system_nfs_user() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_vault` <a name="reset_key_vault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetKeyVault"></a>

```python
def reset_key_vault() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isConstruct"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServer.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappVolumeBucketWithServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappVolumeBucketWithServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetappVolumeBucketWithServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUser">file_system_nfs_user</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference">NetappVolumeBucketWithServerFileSystemNfsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVault">key_vault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference">NetappVolumeBucketWithServerKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.server">server</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference">NetappVolumeBucketWithServerServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateCommonName">server_certificate_common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateExpiryDate">server_certificate_expiry_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverIpAddress">server_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference">NetappVolumeBucketWithServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsernameInput">file_system_cifs_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUserInput">file_system_nfs_user_input</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVaultInput">key_vault_input</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverInput">server_input</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsername">file_system_cifs_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `file_system_nfs_user`<sup>Required</sup> <a name="file_system_nfs_user" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUser"></a>

```python
file_system_nfs_user: NetappVolumeBucketWithServerFileSystemNfsUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference">NetappVolumeBucketWithServerFileSystemNfsUserOutputReference</a>

---

##### `key_vault`<sup>Required</sup> <a name="key_vault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVault"></a>

```python
key_vault: NetappVolumeBucketWithServerKeyVaultOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference">NetappVolumeBucketWithServerKeyVaultOutputReference</a>

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.server"></a>

```python
server: NetappVolumeBucketWithServerServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference">NetappVolumeBucketWithServerServerOutputReference</a>

---

##### `server_certificate_common_name`<sup>Required</sup> <a name="server_certificate_common_name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateCommonName"></a>

```python
server_certificate_common_name: str
```

- *Type:* str

---

##### `server_certificate_expiry_date`<sup>Required</sup> <a name="server_certificate_expiry_date" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateExpiryDate"></a>

```python
server_certificate_expiry_date: str
```

- *Type:* str

---

##### `server_ip_address`<sup>Required</sup> <a name="server_ip_address" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverIpAddress"></a>

```python
server_ip_address: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeouts"></a>

```python
timeouts: NetappVolumeBucketWithServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference">NetappVolumeBucketWithServerTimeoutsOutputReference</a>

---

##### `file_system_cifs_username_input`<sup>Optional</sup> <a name="file_system_cifs_username_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsernameInput"></a>

```python
file_system_cifs_username_input: str
```

- *Type:* str

---

##### `file_system_nfs_user_input`<sup>Optional</sup> <a name="file_system_nfs_user_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUserInput"></a>

```python
file_system_nfs_user_input: NetappVolumeBucketWithServerFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_input`<sup>Optional</sup> <a name="key_vault_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVaultInput"></a>

```python
key_vault_input: NetappVolumeBucketWithServerKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverInput"></a>

```python
server_input: NetappVolumeBucketWithServerServer
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetappVolumeBucketWithServerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `file_system_cifs_username`<sup>Required</sup> <a name="file_system_cifs_username" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsername"></a>

```python
file_system_cifs_username: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeBucketWithServerConfig <a name="NetappVolumeBucketWithServerConfig" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  server: NetappVolumeBucketWithServerServer,
  volume_id: str,
  file_system_cifs_username: str = None,
  file_system_nfs_user: NetappVolumeBucketWithServerFileSystemNfsUser = None,
  id: str = None,
  key_vault: NetappVolumeBucketWithServerKeyVault = None,
  path: str = None,
  permissions: str = None,
  timeouts: NetappVolumeBucketWithServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.server">server</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | server block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemCifsUsername">file_system_cifs_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemNfsUser">file_system_nfs_user</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | file_system_nfs_user block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.keyVault">key_vault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.permissions">permissions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.server"></a>

```python
server: NetappVolumeBucketWithServerServer
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#server NetappVolumeBucketWithServer#server}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}.

---

##### `file_system_cifs_username`<sup>Optional</sup> <a name="file_system_cifs_username" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemCifsUsername"></a>

```python
file_system_cifs_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}.

---

##### `file_system_nfs_user`<sup>Optional</sup> <a name="file_system_nfs_user" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemNfsUser"></a>

```python
file_system_nfs_user: NetappVolumeBucketWithServerFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

file_system_nfs_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#file_system_nfs_user NetappVolumeBucketWithServer#file_system_nfs_user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault`<sup>Optional</sup> <a name="key_vault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.keyVault"></a>

```python
key_vault: NetappVolumeBucketWithServerKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#key_vault NetappVolumeBucketWithServer#key_vault}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.timeouts"></a>

```python
timeouts: NetappVolumeBucketWithServerTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#timeouts NetappVolumeBucketWithServer#timeouts}

---

### NetappVolumeBucketWithServerFileSystemNfsUser <a name="NetappVolumeBucketWithServerFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser(
  group_id: typing.Union[int, float],
  user_id: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#group_id NetappVolumeBucketWithServer#group_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#user_id NetappVolumeBucketWithServer#user_id}. |

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#group_id NetappVolumeBucketWithServer#group_id}.

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#user_id NetappVolumeBucketWithServer#user_id}.

---

### NetappVolumeBucketWithServerKeyVault <a name="NetappVolumeBucketWithServerKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault(
  certificate_key_vault_uri: str,
  certificate_name: str,
  credentials_key_vault_uri: str,
  credentials_secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateKeyVaultUri">certificate_key_vault_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_key_vault_uri NetappVolumeBucketWithServer#certificate_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateName">certificate_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_name NetappVolumeBucketWithServer#certificate_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsKeyVaultUri">credentials_key_vault_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_key_vault_uri NetappVolumeBucketWithServer#credentials_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsSecretName">credentials_secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_secret_name NetappVolumeBucketWithServer#credentials_secret_name}. |

---

##### `certificate_key_vault_uri`<sup>Required</sup> <a name="certificate_key_vault_uri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateKeyVaultUri"></a>

```python
certificate_key_vault_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_key_vault_uri NetappVolumeBucketWithServer#certificate_key_vault_uri}.

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_name NetappVolumeBucketWithServer#certificate_name}.

---

##### `credentials_key_vault_uri`<sup>Required</sup> <a name="credentials_key_vault_uri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsKeyVaultUri"></a>

```python
credentials_key_vault_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_key_vault_uri NetappVolumeBucketWithServer#credentials_key_vault_uri}.

---

##### `credentials_secret_name`<sup>Required</sup> <a name="credentials_secret_name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsSecretName"></a>

```python
credentials_secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_secret_name NetappVolumeBucketWithServer#credentials_secret_name}.

---

### NetappVolumeBucketWithServerServer <a name="NetappVolumeBucketWithServerServer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer(
  fqdn: str,
  certificate_pem: str = None,
  on_certificate_conflict_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#fqdn NetappVolumeBucketWithServer#fqdn}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.certificatePem">certificate_pem</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_pem NetappVolumeBucketWithServer#certificate_pem}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.onCertificateConflictAction">on_certificate_conflict_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#on_certificate_conflict_action NetappVolumeBucketWithServer#on_certificate_conflict_action}. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#fqdn NetappVolumeBucketWithServer#fqdn}.

---

##### `certificate_pem`<sup>Optional</sup> <a name="certificate_pem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.certificatePem"></a>

```python
certificate_pem: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_pem NetappVolumeBucketWithServer#certificate_pem}.

---

##### `on_certificate_conflict_action`<sup>Optional</sup> <a name="on_certificate_conflict_action" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.onCertificateConflictAction"></a>

```python
on_certificate_conflict_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#on_certificate_conflict_action NetappVolumeBucketWithServer#on_certificate_conflict_action}.

---

### NetappVolumeBucketWithServerTimeouts <a name="NetappVolumeBucketWithServerTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#create NetappVolumeBucketWithServer#create}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#delete NetappVolumeBucketWithServer#delete}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#read NetappVolumeBucketWithServer#read}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#update NetappVolumeBucketWithServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#create NetappVolumeBucketWithServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#delete NetappVolumeBucketWithServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#read NetappVolumeBucketWithServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#update NetappVolumeBucketWithServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeBucketWithServerFileSystemNfsUserOutputReference <a name="NetappVolumeBucketWithServerFileSystemNfsUserOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeBucketWithServerFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

---


### NetappVolumeBucketWithServerKeyVaultOutputReference <a name="NetappVolumeBucketWithServerKeyVaultOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUriInput">certificate_key_vault_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUriInput">credentials_key_vault_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretNameInput">credentials_secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri">certificate_key_vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri">credentials_key_vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName">credentials_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_key_vault_uri_input`<sup>Optional</sup> <a name="certificate_key_vault_uri_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUriInput"></a>

```python
certificate_key_vault_uri_input: str
```

- *Type:* str

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `credentials_key_vault_uri_input`<sup>Optional</sup> <a name="credentials_key_vault_uri_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUriInput"></a>

```python
credentials_key_vault_uri_input: str
```

- *Type:* str

---

##### `credentials_secret_name_input`<sup>Optional</sup> <a name="credentials_secret_name_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretNameInput"></a>

```python
credentials_secret_name_input: str
```

- *Type:* str

---

##### `certificate_key_vault_uri`<sup>Required</sup> <a name="certificate_key_vault_uri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri"></a>

```python
certificate_key_vault_uri: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `credentials_key_vault_uri`<sup>Required</sup> <a name="credentials_key_vault_uri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri"></a>

```python
credentials_key_vault_uri: str
```

- *Type:* str

---

##### `credentials_secret_name`<sup>Required</sup> <a name="credentials_secret_name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName"></a>

```python
credentials_secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeBucketWithServerKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

---


### NetappVolumeBucketWithServerServerOutputReference <a name="NetappVolumeBucketWithServerServerOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetCertificatePem">reset_certificate_pem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetOnCertificateConflictAction">reset_on_certificate_conflict_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_pem` <a name="reset_certificate_pem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetCertificatePem"></a>

```python
def reset_certificate_pem() -> None
```

##### `reset_on_certificate_conflict_action` <a name="reset_on_certificate_conflict_action" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetOnCertificateConflictAction"></a>

```python
def reset_on_certificate_conflict_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePemInput">certificate_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictActionInput">on_certificate_conflict_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePem">certificate_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction">on_certificate_conflict_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_pem_input`<sup>Optional</sup> <a name="certificate_pem_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePemInput"></a>

```python
certificate_pem_input: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `on_certificate_conflict_action_input`<sup>Optional</sup> <a name="on_certificate_conflict_action_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictActionInput"></a>

```python
on_certificate_conflict_action_input: str
```

- *Type:* str

---

##### `certificate_pem`<sup>Required</sup> <a name="certificate_pem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePem"></a>

```python
certificate_pem: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `on_certificate_conflict_action`<sup>Required</sup> <a name="on_certificate_conflict_action" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction"></a>

```python
on_certificate_conflict_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeBucketWithServerServer
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

---


### NetappVolumeBucketWithServerTimeoutsOutputReference <a name="NetappVolumeBucketWithServerTimeoutsOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import netapp_volume_bucket_with_server

netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetappVolumeBucketWithServerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

---



