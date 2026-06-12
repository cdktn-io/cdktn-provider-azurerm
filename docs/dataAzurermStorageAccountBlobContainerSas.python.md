# `dataAzurermStorageAccountBlobContainerSas` Submodule <a name="`dataAzurermStorageAccountBlobContainerSas` Submodule" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccountBlobContainerSas <a name="DataAzurermStorageAccountBlobContainerSas" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas azurerm_storage_account_blob_container_sas}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_string: str,
  container_name: str,
  expiry: str,
  start: str,
  cache_control: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  https_only: bool | IResolvable = None,
  id: str = None,
  ip_address: str = None,
  permissions: DataAzurermStorageAccountBlobContainerSasPermissions = None,
  timeouts: DataAzurermStorageAccountBlobContainerSasTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.expiry">expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.contentLanguage">content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.httpsOnly">https_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#id DataAzurermStorageAccountBlobContainerSas#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | permissions block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}.

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.expiry"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.cacheControl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}.

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.contentLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.httpsOnly"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#id DataAzurermStorageAccountBlobContainerSas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.ipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.permissions"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#timeouts DataAzurermStorageAccountBlobContainerSas#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentLanguage">reset_content_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_permissions` <a name="put_permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions"></a>

```python
def put_permissions(
  add: bool | IResolvable = None,
  create: bool | IResolvable = None,
  delete: bool | IResolvable = None,
  delete_version: bool | IResolvable = None,
  execute: bool | IResolvable = None,
  find: bool | IResolvable = None,
  list: bool | IResolvable = None,
  move: bool | IResolvable = None,
  ownership: bool | IResolvable = None,
  permissions: bool | IResolvable = None,
  read: bool | IResolvable = None,
  set_immutability_policy: bool | IResolvable = None,
  tags: bool | IResolvable = None,
  write: bool | IResolvable = None
) -> None
```

###### `add`<sup>Optional</sup> <a name="add" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.add"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#add DataAzurermStorageAccountBlobContainerSas#add}.

---

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.create"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#create DataAzurermStorageAccountBlobContainerSas#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.delete"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#delete DataAzurermStorageAccountBlobContainerSas#delete}.

---

###### `delete_version`<sup>Optional</sup> <a name="delete_version" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.deleteVersion"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#delete_version DataAzurermStorageAccountBlobContainerSas#delete_version}.

---

###### `execute`<sup>Optional</sup> <a name="execute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.execute"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#execute DataAzurermStorageAccountBlobContainerSas#execute}.

---

###### `find`<sup>Optional</sup> <a name="find" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.find"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#find DataAzurermStorageAccountBlobContainerSas#find}.

---

###### `list`<sup>Optional</sup> <a name="list" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.list"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#list DataAzurermStorageAccountBlobContainerSas#list}.

---

###### `move`<sup>Optional</sup> <a name="move" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.move"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#move DataAzurermStorageAccountBlobContainerSas#move}.

---

###### `ownership`<sup>Optional</sup> <a name="ownership" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.ownership"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#ownership DataAzurermStorageAccountBlobContainerSas#ownership}.

---

###### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.permissions"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.read"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}.

---

###### `set_immutability_policy`<sup>Optional</sup> <a name="set_immutability_policy" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.setImmutabilityPolicy"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#set_immutability_policy DataAzurermStorageAccountBlobContainerSas#set_immutability_policy}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.tags"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#tags DataAzurermStorageAccountBlobContainerSas#tags}.

---

###### `write`<sup>Optional</sup> <a name="write" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.write"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#write DataAzurermStorageAccountBlobContainerSas#write}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}.

---

##### `reset_cache_control` <a name="reset_cache_control" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_language` <a name="reset_content_language" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentLanguage"></a>

```python
def reset_content_language() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_https_only` <a name="reset_https_only" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermStorageAccountBlobContainerSas resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermStorageAccountBlobContainerSas resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermStorageAccountBlobContainerSas to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermStorageAccountBlobContainerSas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageAccountBlobContainerSas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference">DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.sas">sas</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference">DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguageInput">content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiryInput">expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnlyInput">https_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissionsInput">permissions_input</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnly">https_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.start">start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissions"></a>

```python
permissions: DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference">DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference</a>

---

##### `sas`<sup>Required</sup> <a name="sas" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.sas"></a>

```python
sas: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeouts"></a>

```python
timeouts: DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference">DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference</a>

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_language_input`<sup>Optional</sup> <a name="content_language_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguageInput"></a>

```python
content_language_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `expiry_input`<sup>Optional</sup> <a name="expiry_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiryInput"></a>

```python
expiry_input: str
```

- *Type:* str

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnlyInput"></a>

```python
https_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissionsInput"></a>

```python
permissions_input: DataAzurermStorageAccountBlobContainerSasPermissions
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermStorageAccountBlobContainerSasTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnly"></a>

```python
https_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.start"></a>

```python
start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountBlobContainerSasConfig <a name="DataAzurermStorageAccountBlobContainerSasConfig" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_string: str,
  container_name: str,
  expiry: str,
  start: str,
  cache_control: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  https_only: bool | IResolvable = None,
  id: str = None,
  ip_address: str = None,
  permissions: DataAzurermStorageAccountBlobContainerSasPermissions = None,
  timeouts: DataAzurermStorageAccountBlobContainerSasTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.expiry">expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentLanguage">content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.httpsOnly">https_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#id DataAzurermStorageAccountBlobContainerSas#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | permissions block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}.

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}.

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.httpsOnly"></a>

```python
https_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#id DataAzurermStorageAccountBlobContainerSas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.permissions"></a>

```python
permissions: DataAzurermStorageAccountBlobContainerSasPermissions
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.timeouts"></a>

```python
timeouts: DataAzurermStorageAccountBlobContainerSasTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#timeouts DataAzurermStorageAccountBlobContainerSas#timeouts}

---

### DataAzurermStorageAccountBlobContainerSasPermissions <a name="DataAzurermStorageAccountBlobContainerSasPermissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions(
  add: bool | IResolvable = None,
  create: bool | IResolvable = None,
  delete: bool | IResolvable = None,
  delete_version: bool | IResolvable = None,
  execute: bool | IResolvable = None,
  find: bool | IResolvable = None,
  list: bool | IResolvable = None,
  move: bool | IResolvable = None,
  ownership: bool | IResolvable = None,
  permissions: bool | IResolvable = None,
  read: bool | IResolvable = None,
  set_immutability_policy: bool | IResolvable = None,
  tags: bool | IResolvable = None,
  write: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.add">add</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#add DataAzurermStorageAccountBlobContainerSas#add}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.create">create</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#create DataAzurermStorageAccountBlobContainerSas#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.delete">delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#delete DataAzurermStorageAccountBlobContainerSas#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.deleteVersion">delete_version</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#delete_version DataAzurermStorageAccountBlobContainerSas#delete_version}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.execute">execute</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#execute DataAzurermStorageAccountBlobContainerSas#execute}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.find">find</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#find DataAzurermStorageAccountBlobContainerSas#find}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.list">list</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#list DataAzurermStorageAccountBlobContainerSas#list}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.move">move</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#move DataAzurermStorageAccountBlobContainerSas#move}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.ownership">ownership</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#ownership DataAzurermStorageAccountBlobContainerSas#ownership}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.permissions">permissions</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.read">read</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.setImmutabilityPolicy">set_immutability_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#set_immutability_policy DataAzurermStorageAccountBlobContainerSas#set_immutability_policy}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.tags">tags</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#tags DataAzurermStorageAccountBlobContainerSas#tags}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.write">write</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#write DataAzurermStorageAccountBlobContainerSas#write}. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.add"></a>

```python
add: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#add DataAzurermStorageAccountBlobContainerSas#add}.

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.create"></a>

```python
create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#create DataAzurermStorageAccountBlobContainerSas#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.delete"></a>

```python
delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#delete DataAzurermStorageAccountBlobContainerSas#delete}.

---

##### `delete_version`<sup>Optional</sup> <a name="delete_version" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.deleteVersion"></a>

```python
delete_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#delete_version DataAzurermStorageAccountBlobContainerSas#delete_version}.

---

##### `execute`<sup>Optional</sup> <a name="execute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.execute"></a>

```python
execute: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#execute DataAzurermStorageAccountBlobContainerSas#execute}.

---

##### `find`<sup>Optional</sup> <a name="find" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.find"></a>

```python
find: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#find DataAzurermStorageAccountBlobContainerSas#find}.

---

##### `list`<sup>Optional</sup> <a name="list" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.list"></a>

```python
list: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#list DataAzurermStorageAccountBlobContainerSas#list}.

---

##### `move`<sup>Optional</sup> <a name="move" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.move"></a>

```python
move: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#move DataAzurermStorageAccountBlobContainerSas#move}.

---

##### `ownership`<sup>Optional</sup> <a name="ownership" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.ownership"></a>

```python
ownership: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#ownership DataAzurermStorageAccountBlobContainerSas#ownership}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.permissions"></a>

```python
permissions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.read"></a>

```python
read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}.

---

##### `set_immutability_policy`<sup>Optional</sup> <a name="set_immutability_policy" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.setImmutabilityPolicy"></a>

```python
set_immutability_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#set_immutability_policy DataAzurermStorageAccountBlobContainerSas#set_immutability_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.tags"></a>

```python
tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#tags DataAzurermStorageAccountBlobContainerSas#tags}.

---

##### `write`<sup>Optional</sup> <a name="write" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.write"></a>

```python
write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#write DataAzurermStorageAccountBlobContainerSas#write}.

---

### DataAzurermStorageAccountBlobContainerSasTimeouts <a name="DataAzurermStorageAccountBlobContainerSasTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference <a name="DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetAdd">reset_add</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetDeleteVersion">reset_delete_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetExecute">reset_execute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetFind">reset_find</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetList">reset_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetMove">reset_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetOwnership">reset_ownership</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetSetImmutabilityPolicy">reset_set_immutability_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetWrite">reset_write</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add` <a name="reset_add" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetAdd"></a>

```python
def reset_add() -> None
```

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_delete_version` <a name="reset_delete_version" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetDeleteVersion"></a>

```python
def reset_delete_version() -> None
```

##### `reset_execute` <a name="reset_execute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetExecute"></a>

```python
def reset_execute() -> None
```

##### `reset_find` <a name="reset_find" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetFind"></a>

```python
def reset_find() -> None
```

##### `reset_list` <a name="reset_list" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetList"></a>

```python
def reset_list() -> None
```

##### `reset_move` <a name="reset_move" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetMove"></a>

```python
def reset_move() -> None
```

##### `reset_ownership` <a name="reset_ownership" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetOwnership"></a>

```python
def reset_ownership() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_set_immutability_policy` <a name="reset_set_immutability_policy" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetSetImmutabilityPolicy"></a>

```python
def reset_set_immutability_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_write` <a name="reset_write" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetWrite"></a>

```python
def reset_write() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.addInput">add_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.createInput">create_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteInput">delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteVersionInput">delete_version_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.executeInput">execute_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.findInput">find_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.listInput">list_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.moveInput">move_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.ownershipInput">ownership_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.permissionsInput">permissions_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.readInput">read_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.setImmutabilityPolicyInput">set_immutability_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.tagsInput">tags_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.writeInput">write_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.add">add</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.create">create</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.delete">delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteVersion">delete_version</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.execute">execute</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.find">find</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.list">list</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.move">move</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.ownership">ownership</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.permissions">permissions</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.read">read</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.setImmutabilityPolicy">set_immutability_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.tags">tags</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.write">write</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.addInput"></a>

```python
add_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.createInput"></a>

```python
create_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteInput"></a>

```python
delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_version_input`<sup>Optional</sup> <a name="delete_version_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteVersionInput"></a>

```python
delete_version_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execute_input`<sup>Optional</sup> <a name="execute_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.executeInput"></a>

```python
execute_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `find_input`<sup>Optional</sup> <a name="find_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.findInput"></a>

```python
find_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `list_input`<sup>Optional</sup> <a name="list_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.listInput"></a>

```python
list_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `move_input`<sup>Optional</sup> <a name="move_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.moveInput"></a>

```python
move_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ownership_input`<sup>Optional</sup> <a name="ownership_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.ownershipInput"></a>

```python
ownership_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.permissionsInput"></a>

```python
permissions_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.readInput"></a>

```python
read_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `set_immutability_policy_input`<sup>Optional</sup> <a name="set_immutability_policy_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.setImmutabilityPolicyInput"></a>

```python
set_immutability_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.tagsInput"></a>

```python
tags_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `write_input`<sup>Optional</sup> <a name="write_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.writeInput"></a>

```python
write_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.add"></a>

```python
add: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.create"></a>

```python
create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.delete"></a>

```python
delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_version`<sup>Required</sup> <a name="delete_version" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteVersion"></a>

```python
delete_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execute`<sup>Required</sup> <a name="execute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.execute"></a>

```python
execute: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `find`<sup>Required</sup> <a name="find" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.find"></a>

```python
find: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.list"></a>

```python
list: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `move`<sup>Required</sup> <a name="move" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.move"></a>

```python
move: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ownership`<sup>Required</sup> <a name="ownership" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.ownership"></a>

```python
ownership: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.permissions"></a>

```python
permissions: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.read"></a>

```python
read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `set_immutability_policy`<sup>Required</sup> <a name="set_immutability_policy" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.setImmutabilityPolicy"></a>

```python
set_immutability_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.tags"></a>

```python
tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.write"></a>

```python
write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageAccountBlobContainerSasPermissions
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

---


### DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference <a name="DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_blob_container_sas

dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermStorageAccountBlobContainerSasTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

---



