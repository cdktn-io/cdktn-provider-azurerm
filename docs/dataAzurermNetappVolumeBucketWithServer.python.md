# `dataAzurermNetappVolumeBucketWithServer` Submodule <a name="`dataAzurermNetappVolumeBucketWithServer` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappVolumeBucketWithServer <a name="DataAzurermNetappVolumeBucketWithServer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server azurerm_netapp_volume_bucket_with_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer(
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
  netapp_volume_id: str,
  id: str = None,
  timeouts: DataAzurermNetappVolumeBucketWithServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#name DataAzurermNetappVolumeBucketWithServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.netappVolumeId">netapp_volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#netapp_volume_id DataAzurermNetappVolumeBucketWithServer#netapp_volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#id DataAzurermNetappVolumeBucketWithServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#name DataAzurermNetappVolumeBucketWithServer#name}.

---

##### `netapp_volume_id`<sup>Required</sup> <a name="netapp_volume_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.netappVolumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#netapp_volume_id DataAzurermNetappVolumeBucketWithServer#netapp_volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#id DataAzurermNetappVolumeBucketWithServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#timeouts DataAzurermNetappVolumeBucketWithServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#read DataAzurermNetappVolumeBucketWithServer#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermNetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermNetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermNetappVolumeBucketWithServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermNetappVolumeBucketWithServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappVolumeBucketWithServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fileSystemCifsUsername">file_system_cifs_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fileSystemNfsUser">file_system_nfs_user</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList">DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.keyVault">key_vault</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList">DataAzurermNetappVolumeBucketWithServerKeyVaultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.server">server</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList">DataAzurermNetappVolumeBucketWithServerServerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverCertificateCommonName">server_certificate_common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverCertificateExpiryDate">server_certificate_expiry_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverIpAddress">server_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference">DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.netappVolumeIdInput">netapp_volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.netappVolumeId">netapp_volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `file_system_cifs_username`<sup>Required</sup> <a name="file_system_cifs_username" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fileSystemCifsUsername"></a>

```python
file_system_cifs_username: str
```

- *Type:* str

---

##### `file_system_nfs_user`<sup>Required</sup> <a name="file_system_nfs_user" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fileSystemNfsUser"></a>

```python
file_system_nfs_user: DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList">DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList</a>

---

##### `key_vault`<sup>Required</sup> <a name="key_vault" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.keyVault"></a>

```python
key_vault: DataAzurermNetappVolumeBucketWithServerKeyVaultList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList">DataAzurermNetappVolumeBucketWithServerKeyVaultList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.server"></a>

```python
server: DataAzurermNetappVolumeBucketWithServerServerList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList">DataAzurermNetappVolumeBucketWithServerServerList</a>

---

##### `server_certificate_common_name`<sup>Required</sup> <a name="server_certificate_common_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverCertificateCommonName"></a>

```python
server_certificate_common_name: str
```

- *Type:* str

---

##### `server_certificate_expiry_date`<sup>Required</sup> <a name="server_certificate_expiry_date" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverCertificateExpiryDate"></a>

```python
server_certificate_expiry_date: str
```

- *Type:* str

---

##### `server_ip_address`<sup>Required</sup> <a name="server_ip_address" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverIpAddress"></a>

```python
server_ip_address: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.timeouts"></a>

```python
timeouts: DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference">DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `netapp_volume_id_input`<sup>Optional</sup> <a name="netapp_volume_id_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.netappVolumeIdInput"></a>

```python
netapp_volume_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermNetappVolumeBucketWithServerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `netapp_volume_id`<sup>Required</sup> <a name="netapp_volume_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.netappVolumeId"></a>

```python
netapp_volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappVolumeBucketWithServerConfig <a name="DataAzurermNetappVolumeBucketWithServerConfig" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  netapp_volume_id: str,
  id: str = None,
  timeouts: DataAzurermNetappVolumeBucketWithServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#name DataAzurermNetappVolumeBucketWithServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.netappVolumeId">netapp_volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#netapp_volume_id DataAzurermNetappVolumeBucketWithServer#netapp_volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#id DataAzurermNetappVolumeBucketWithServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#name DataAzurermNetappVolumeBucketWithServer#name}.

---

##### `netapp_volume_id`<sup>Required</sup> <a name="netapp_volume_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.netappVolumeId"></a>

```python
netapp_volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#netapp_volume_id DataAzurermNetappVolumeBucketWithServer#netapp_volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#id DataAzurermNetappVolumeBucketWithServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.timeouts"></a>

```python
timeouts: DataAzurermNetappVolumeBucketWithServerTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#timeouts DataAzurermNetappVolumeBucketWithServer#timeouts}

---

### DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser <a name="DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser()
```


### DataAzurermNetappVolumeBucketWithServerKeyVault <a name="DataAzurermNetappVolumeBucketWithServerKeyVault" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVault.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVault()
```


### DataAzurermNetappVolumeBucketWithServerServer <a name="DataAzurermNetappVolumeBucketWithServerServer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServer.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServer()
```


### DataAzurermNetappVolumeBucketWithServerTimeouts <a name="DataAzurermNetappVolumeBucketWithServerTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#read DataAzurermNetappVolumeBucketWithServer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket_with_server#read DataAzurermNetappVolumeBucketWithServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList <a name="DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference <a name="DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser">DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser">DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser</a>

---


### DataAzurermNetappVolumeBucketWithServerKeyVaultList <a name="DataAzurermNetappVolumeBucketWithServerKeyVaultList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference <a name="DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri">certificate_key_vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri">credentials_key_vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName">credentials_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVault">DataAzurermNetappVolumeBucketWithServerKeyVault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_key_vault_uri`<sup>Required</sup> <a name="certificate_key_vault_uri" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri"></a>

```python
certificate_key_vault_uri: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `credentials_key_vault_uri`<sup>Required</sup> <a name="credentials_key_vault_uri" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri"></a>

```python
credentials_key_vault_uri: str
```

- *Type:* str

---

##### `credentials_secret_name`<sup>Required</sup> <a name="credentials_secret_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName"></a>

```python
credentials_secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappVolumeBucketWithServerKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVault">DataAzurermNetappVolumeBucketWithServerKeyVault</a>

---


### DataAzurermNetappVolumeBucketWithServerServerList <a name="DataAzurermNetappVolumeBucketWithServerServerList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappVolumeBucketWithServerServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappVolumeBucketWithServerServerOutputReference <a name="DataAzurermNetappVolumeBucketWithServerServerOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.certificatePem">certificate_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction">on_certificate_conflict_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServer">DataAzurermNetappVolumeBucketWithServerServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_pem`<sup>Required</sup> <a name="certificate_pem" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.certificatePem"></a>

```python
certificate_pem: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `on_certificate_conflict_action`<sup>Required</sup> <a name="on_certificate_conflict_action" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction"></a>

```python
on_certificate_conflict_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappVolumeBucketWithServerServer
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServer">DataAzurermNetappVolumeBucketWithServerServer</a>

---


### DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference <a name="DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket_with_server

dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermNetappVolumeBucketWithServerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a>

---



