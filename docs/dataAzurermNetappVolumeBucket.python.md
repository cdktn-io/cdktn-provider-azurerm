# `dataAzurermNetappVolumeBucket` Submodule <a name="`dataAzurermNetappVolumeBucket` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappVolumeBucket <a name="DataAzurermNetappVolumeBucket" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket azurerm_netapp_volume_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket(
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
  timeouts: DataAzurermNetappVolumeBucketTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#name DataAzurermNetappVolumeBucket#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.netappVolumeId">netapp_volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#netapp_volume_id DataAzurermNetappVolumeBucket#netapp_volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#id DataAzurermNetappVolumeBucket#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#name DataAzurermNetappVolumeBucket#name}.

---

##### `netapp_volume_id`<sup>Required</sup> <a name="netapp_volume_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.netappVolumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#netapp_volume_id DataAzurermNetappVolumeBucket#netapp_volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#id DataAzurermNetappVolumeBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#timeouts DataAzurermNetappVolumeBucket#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#read DataAzurermNetappVolumeBucket#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermNetappVolumeBucket resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermNetappVolumeBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermNetappVolumeBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermNetappVolumeBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappVolumeBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fileSystemCifsUsername">file_system_cifs_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fileSystemNfsUser">file_system_nfs_user</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList">DataAzurermNetappVolumeBucketFileSystemNfsUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.keyVault">key_vault</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList">DataAzurermNetappVolumeBucketKeyVaultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverCertificateCommonName">server_certificate_common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverCertificateExpiryDate">server_certificate_expiry_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverIpAddress">server_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference">DataAzurermNetappVolumeBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.netappVolumeIdInput">netapp_volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.netappVolumeId">netapp_volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `file_system_cifs_username`<sup>Required</sup> <a name="file_system_cifs_username" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fileSystemCifsUsername"></a>

```python
file_system_cifs_username: str
```

- *Type:* str

---

##### `file_system_nfs_user`<sup>Required</sup> <a name="file_system_nfs_user" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fileSystemNfsUser"></a>

```python
file_system_nfs_user: DataAzurermNetappVolumeBucketFileSystemNfsUserList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList">DataAzurermNetappVolumeBucketFileSystemNfsUserList</a>

---

##### `key_vault`<sup>Required</sup> <a name="key_vault" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.keyVault"></a>

```python
key_vault: DataAzurermNetappVolumeBucketKeyVaultList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList">DataAzurermNetappVolumeBucketKeyVaultList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `server_certificate_common_name`<sup>Required</sup> <a name="server_certificate_common_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverCertificateCommonName"></a>

```python
server_certificate_common_name: str
```

- *Type:* str

---

##### `server_certificate_expiry_date`<sup>Required</sup> <a name="server_certificate_expiry_date" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverCertificateExpiryDate"></a>

```python
server_certificate_expiry_date: str
```

- *Type:* str

---

##### `server_ip_address`<sup>Required</sup> <a name="server_ip_address" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverIpAddress"></a>

```python
server_ip_address: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.timeouts"></a>

```python
timeouts: DataAzurermNetappVolumeBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference">DataAzurermNetappVolumeBucketTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `netapp_volume_id_input`<sup>Optional</sup> <a name="netapp_volume_id_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.netappVolumeIdInput"></a>

```python
netapp_volume_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermNetappVolumeBucketTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `netapp_volume_id`<sup>Required</sup> <a name="netapp_volume_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.netappVolumeId"></a>

```python
netapp_volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappVolumeBucketConfig <a name="DataAzurermNetappVolumeBucketConfig" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig(
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
  timeouts: DataAzurermNetappVolumeBucketTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#name DataAzurermNetappVolumeBucket#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.netappVolumeId">netapp_volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#netapp_volume_id DataAzurermNetappVolumeBucket#netapp_volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#id DataAzurermNetappVolumeBucket#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#name DataAzurermNetappVolumeBucket#name}.

---

##### `netapp_volume_id`<sup>Required</sup> <a name="netapp_volume_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.netappVolumeId"></a>

```python
netapp_volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#netapp_volume_id DataAzurermNetappVolumeBucket#netapp_volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#id DataAzurermNetappVolumeBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.timeouts"></a>

```python
timeouts: DataAzurermNetappVolumeBucketTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#timeouts DataAzurermNetappVolumeBucket#timeouts}

---

### DataAzurermNetappVolumeBucketFileSystemNfsUser <a name="DataAzurermNetappVolumeBucketFileSystemNfsUser" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser()
```


### DataAzurermNetappVolumeBucketKeyVault <a name="DataAzurermNetappVolumeBucketKeyVault" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault()
```


### DataAzurermNetappVolumeBucketTimeouts <a name="DataAzurermNetappVolumeBucketTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#read DataAzurermNetappVolumeBucket#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/netapp_volume_bucket#read DataAzurermNetappVolumeBucket#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappVolumeBucketFileSystemNfsUserList <a name="DataAzurermNetappVolumeBucketFileSystemNfsUserList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference <a name="DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser">DataAzurermNetappVolumeBucketFileSystemNfsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappVolumeBucketFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser">DataAzurermNetappVolumeBucketFileSystemNfsUser</a>

---


### DataAzurermNetappVolumeBucketKeyVaultList <a name="DataAzurermNetappVolumeBucketKeyVaultList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappVolumeBucketKeyVaultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappVolumeBucketKeyVaultOutputReference <a name="DataAzurermNetappVolumeBucketKeyVaultOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUri">certificate_key_vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUri">credentials_key_vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretName">credentials_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault">DataAzurermNetappVolumeBucketKeyVault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_key_vault_uri`<sup>Required</sup> <a name="certificate_key_vault_uri" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUri"></a>

```python
certificate_key_vault_uri: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `credentials_key_vault_uri`<sup>Required</sup> <a name="credentials_key_vault_uri" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUri"></a>

```python
credentials_key_vault_uri: str
```

- *Type:* str

---

##### `credentials_secret_name`<sup>Required</sup> <a name="credentials_secret_name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretName"></a>

```python
credentials_secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappVolumeBucketKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault">DataAzurermNetappVolumeBucketKeyVault</a>

---


### DataAzurermNetappVolumeBucketTimeoutsOutputReference <a name="DataAzurermNetappVolumeBucketTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_netapp_volume_bucket

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermNetappVolumeBucketTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a>

---



