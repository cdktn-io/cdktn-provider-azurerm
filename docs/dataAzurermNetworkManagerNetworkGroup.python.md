# `dataAzurermNetworkManagerNetworkGroup` Submodule <a name="`dataAzurermNetworkManagerNetworkGroup` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkManagerNetworkGroup <a name="DataAzurermNetworkManagerNetworkGroup" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group azurerm_network_manager_network_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_network_manager_network_group

dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup(
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
  network_manager_id: str,
  id: str = None,
  timeouts: DataAzurermNetworkManagerNetworkGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#name DataAzurermNetworkManagerNetworkGroup#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#network_manager_id DataAzurermNetworkManagerNetworkGroup#network_manager_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#id DataAzurermNetworkManagerNetworkGroup#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#name DataAzurermNetworkManagerNetworkGroup#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.networkManagerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#network_manager_id DataAzurermNetworkManagerNetworkGroup#network_manager_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#id DataAzurermNetworkManagerNetworkGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#timeouts DataAzurermNetworkManagerNetworkGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#read DataAzurermNetworkManagerNetworkGroup#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermNetworkManagerNetworkGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_network_manager_network_group

dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_network_manager_network_group

dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_network_manager_network_group

dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_network_manager_network_group

dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermNetworkManagerNetworkGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermNetworkManagerNetworkGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermNetworkManagerNetworkGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkManagerNetworkGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.memberType">member_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference">DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.networkManagerIdInput">network_manager_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `member_type`<sup>Required</sup> <a name="member_type" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.memberType"></a>

```python
member_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.timeouts"></a>

```python
timeouts: DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference">DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_manager_id_input`<sup>Optional</sup> <a name="network_manager_id_input" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.networkManagerIdInput"></a>

```python
network_manager_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermNetworkManagerNetworkGroupTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkManagerNetworkGroupConfig <a name="DataAzurermNetworkManagerNetworkGroupConfig" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_network_manager_network_group

dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  network_manager_id: str,
  id: str = None,
  timeouts: DataAzurermNetworkManagerNetworkGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#name DataAzurermNetworkManagerNetworkGroup#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#network_manager_id DataAzurermNetworkManagerNetworkGroup#network_manager_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#id DataAzurermNetworkManagerNetworkGroup#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#name DataAzurermNetworkManagerNetworkGroup#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#network_manager_id DataAzurermNetworkManagerNetworkGroup#network_manager_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#id DataAzurermNetworkManagerNetworkGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupConfig.property.timeouts"></a>

```python
timeouts: DataAzurermNetworkManagerNetworkGroupTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#timeouts DataAzurermNetworkManagerNetworkGroup#timeouts}

---

### DataAzurermNetworkManagerNetworkGroupTimeouts <a name="DataAzurermNetworkManagerNetworkGroupTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_network_manager_network_group

dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#read DataAzurermNetworkManagerNetworkGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_manager_network_group#read DataAzurermNetworkManagerNetworkGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference <a name="DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_network_manager_network_group

dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermNetworkManagerNetworkGroupTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetworkManagerNetworkGroup.DataAzurermNetworkManagerNetworkGroupTimeouts">DataAzurermNetworkManagerNetworkGroupTimeouts</a>

---



