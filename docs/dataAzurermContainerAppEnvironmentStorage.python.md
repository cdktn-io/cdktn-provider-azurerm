# `dataAzurermContainerAppEnvironmentStorage` Submodule <a name="`dataAzurermContainerAppEnvironmentStorage` Submodule" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerAppEnvironmentStorage <a name="DataAzurermContainerAppEnvironmentStorage" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage azurerm_container_app_environment_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_container_app_environment_storage

dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_app_environment_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermContainerAppEnvironmentStorageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | The ID of the Container App Environment to which this storage belongs. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for this Container App Environment Storage. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* str

The ID of the Container App Environment to which this storage belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#container_app_environment_id DataAzurermContainerAppEnvironmentStorage#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.name"></a>

- *Type:* str

The name for this Container App Environment Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#name DataAzurermContainerAppEnvironmentStorage#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#timeouts DataAzurermContainerAppEnvironmentStorage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#read DataAzurermContainerAppEnvironmentStorage#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermContainerAppEnvironmentStorage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_container_app_environment_storage

dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_container_app_environment_storage

dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_container_app_environment_storage

dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_container_app_environment_storage

dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermContainerAppEnvironmentStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermContainerAppEnvironmentStorage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermContainerAppEnvironmentStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermContainerAppEnvironmentStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nfsServerUrl">nfs_server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference">DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentIdInput">container_app_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `nfs_server_url`<sup>Required</sup> <a name="nfs_server_url" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nfsServerUrl"></a>

```python
nfs_server_url: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeouts"></a>

```python
timeouts: DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference">DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference</a>

---

##### `container_app_environment_id_input`<sup>Optional</sup> <a name="container_app_environment_id_input" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentIdInput"></a>

```python
container_app_environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermContainerAppEnvironmentStorageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerAppEnvironmentStorageConfig <a name="DataAzurermContainerAppEnvironmentStorageConfig" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_container_app_environment_storage

dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_app_environment_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermContainerAppEnvironmentStorageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | The ID of the Container App Environment to which this storage belongs. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.name">name</a></code> | <code>str</code> | The name for this Container App Environment Storage. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

The ID of the Container App Environment to which this storage belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#container_app_environment_id DataAzurermContainerAppEnvironmentStorage#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this Container App Environment Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#name DataAzurermContainerAppEnvironmentStorage#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.timeouts"></a>

```python
timeouts: DataAzurermContainerAppEnvironmentStorageTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#timeouts DataAzurermContainerAppEnvironmentStorage#timeouts}

---

### DataAzurermContainerAppEnvironmentStorageTimeouts <a name="DataAzurermContainerAppEnvironmentStorageTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_container_app_environment_storage

dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#read DataAzurermContainerAppEnvironmentStorage#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/container_app_environment_storage#read DataAzurermContainerAppEnvironmentStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference <a name="DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_container_app_environment_storage

dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermContainerAppEnvironmentStorageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

---



