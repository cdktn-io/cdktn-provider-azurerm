# `searchServiceDatasourceBlob` Submodule <a name="`searchServiceDatasourceBlob` Submodule" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchServiceDatasourceBlob <a name="SearchServiceDatasourceBlob" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob azurerm_search_service_datasource_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_string_wo: str,
  connection_string_wo_version: typing.Union[int, float],
  container_name: str,
  name: str,
  search_service_endpoint: str,
  container_query: str = None,
  description: str = None,
  encryption_key: SearchServiceDatasourceBlobEncryptionKey = None,
  id: str = None,
  soft_delete_column_name: str = None,
  soft_delete_marker_value: str = None,
  timeouts: SearchServiceDatasourceBlobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connectionStringWo">connection_string_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connectionStringWoVersion">connection_string_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.searchServiceEndpoint">search_service_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.containerQuery">container_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.softDeleteColumnName">soft_delete_column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.softDeleteMarkerValue">soft_delete_marker_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_string_wo`<sup>Required</sup> <a name="connection_string_wo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connectionStringWo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}.

---

##### `connection_string_wo_version`<sup>Required</sup> <a name="connection_string_wo_version" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.connectionStringWoVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}.

---

##### `search_service_endpoint`<sup>Required</sup> <a name="search_service_endpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.searchServiceEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}.

---

##### `container_query`<sup>Optional</sup> <a name="container_query" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.containerQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}.

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#encryption_key SearchServiceDatasourceBlob#encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `soft_delete_column_name`<sup>Optional</sup> <a name="soft_delete_column_name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.softDeleteColumnName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}.

---

##### `soft_delete_marker_value`<sup>Optional</sup> <a name="soft_delete_marker_value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.softDeleteMarkerValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#timeouts SearchServiceDatasourceBlob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey">put_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery">reset_container_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName">reset_soft_delete_column_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue">reset_soft_delete_marker_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_key` <a name="put_encryption_key" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey"></a>

```python
def put_encryption_key(
  key_vault_key_id: str,
  client_id: str = None,
  client_secret: str = None
) -> None
```

###### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}.

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}.

---

##### `reset_container_query` <a name="reset_container_query" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery"></a>

```python
def reset_container_query() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_soft_delete_column_name` <a name="reset_soft_delete_column_name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName"></a>

```python
def reset_soft_delete_column_name() -> None
```

##### `reset_soft_delete_marker_value` <a name="reset_soft_delete_marker_value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue"></a>

```python
def reset_soft_delete_marker_value() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SearchServiceDatasourceBlob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SearchServiceDatasourceBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SearchServiceDatasourceBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput">connection_string_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput">connection_string_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput">container_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput">encryption_key_input</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput">search_service_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput">soft_delete_column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput">soft_delete_marker_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo">connection_string_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion">connection_string_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery">container_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint">search_service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName">soft_delete_column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue">soft_delete_marker_value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey"></a>

```python
encryption_key: SearchServiceDatasourceBlobEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts"></a>

```python
timeouts: SearchServiceDatasourceBlobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a>

---

##### `connection_string_wo_input`<sup>Optional</sup> <a name="connection_string_wo_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput"></a>

```python
connection_string_wo_input: str
```

- *Type:* str

---

##### `connection_string_wo_version_input`<sup>Optional</sup> <a name="connection_string_wo_version_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput"></a>

```python
connection_string_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `container_query_input`<sup>Optional</sup> <a name="container_query_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput"></a>

```python
container_query_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput"></a>

```python
encryption_key_input: SearchServiceDatasourceBlobEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `search_service_endpoint_input`<sup>Optional</sup> <a name="search_service_endpoint_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput"></a>

```python
search_service_endpoint_input: str
```

- *Type:* str

---

##### `soft_delete_column_name_input`<sup>Optional</sup> <a name="soft_delete_column_name_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput"></a>

```python
soft_delete_column_name_input: str
```

- *Type:* str

---

##### `soft_delete_marker_value_input`<sup>Optional</sup> <a name="soft_delete_marker_value_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput"></a>

```python
soft_delete_marker_value_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SearchServiceDatasourceBlobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---

##### ~~`connection_string_wo`~~<sup>Required</sup> <a name="connection_string_wo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
connection_string_wo: str
```

- *Type:* str

---

##### `connection_string_wo_version`<sup>Required</sup> <a name="connection_string_wo_version" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion"></a>

```python
connection_string_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `container_query`<sup>Required</sup> <a name="container_query" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery"></a>

```python
container_query: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `search_service_endpoint`<sup>Required</sup> <a name="search_service_endpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint"></a>

```python
search_service_endpoint: str
```

- *Type:* str

---

##### `soft_delete_column_name`<sup>Required</sup> <a name="soft_delete_column_name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName"></a>

```python
soft_delete_column_name: str
```

- *Type:* str

---

##### `soft_delete_marker_value`<sup>Required</sup> <a name="soft_delete_marker_value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue"></a>

```python
soft_delete_marker_value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SearchServiceDatasourceBlobConfig <a name="SearchServiceDatasourceBlobConfig" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_string_wo: str,
  connection_string_wo_version: typing.Union[int, float],
  container_name: str,
  name: str,
  search_service_endpoint: str,
  container_query: str = None,
  description: str = None,
  encryption_key: SearchServiceDatasourceBlobEncryptionKey = None,
  id: str = None,
  soft_delete_column_name: str = None,
  soft_delete_marker_value: str = None,
  timeouts: SearchServiceDatasourceBlobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo">connection_string_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion">connection_string_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint">search_service_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery">container_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName">soft_delete_column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue">soft_delete_marker_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_string_wo`<sup>Required</sup> <a name="connection_string_wo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo"></a>

```python
connection_string_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}.

---

##### `connection_string_wo_version`<sup>Required</sup> <a name="connection_string_wo_version" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion"></a>

```python
connection_string_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}.

---

##### `search_service_endpoint`<sup>Required</sup> <a name="search_service_endpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint"></a>

```python
search_service_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}.

---

##### `container_query`<sup>Optional</sup> <a name="container_query" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery"></a>

```python
container_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}.

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey"></a>

```python
encryption_key: SearchServiceDatasourceBlobEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#encryption_key SearchServiceDatasourceBlob#encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `soft_delete_column_name`<sup>Optional</sup> <a name="soft_delete_column_name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName"></a>

```python
soft_delete_column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}.

---

##### `soft_delete_marker_value`<sup>Optional</sup> <a name="soft_delete_marker_value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue"></a>

```python
soft_delete_marker_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts"></a>

```python
timeouts: SearchServiceDatasourceBlobTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#timeouts SearchServiceDatasourceBlob#timeouts}

---

### SearchServiceDatasourceBlobEncryptionKey <a name="SearchServiceDatasourceBlobEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.Initializer"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey(
  key_vault_key_id: str,
  client_id: str = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}. |

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}.

---

### SearchServiceDatasourceBlobTimeouts <a name="SearchServiceDatasourceBlobTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchServiceDatasourceBlobEncryptionKeyOutputReference <a name="SearchServiceDatasourceBlobEncryptionKeyOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: SearchServiceDatasourceBlobEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---


### SearchServiceDatasourceBlobTimeoutsOutputReference <a name="SearchServiceDatasourceBlobTimeoutsOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import search_service_datasource_blob

searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SearchServiceDatasourceBlobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---



